

import { useRef, useCallback, useState, useEffect } from 'react';
import { Note } from '../types';
import { noteToFreq, melody, bassline } from '../constants';

export const useAudio = () => {
    const audioContextRef = useRef<AudioContext | null>(null);
    const musicStateRef = useRef({ isPlaying: false, noteIndex: 0, bassIndex: 0, timeoutId: null as ReturnType<typeof setTimeout> | null });
    const [isMuted, setIsMuted] = useState(false);
    
    const initializeAudio = useCallback(() => {
        if (!audioContextRef.current) {
            try {
                const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
                audioContextRef.current = new AudioContext();
            } catch (e) {
                console.error("Web Audio API is not supported.");
                return false;
            }
        }
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }
        return true;
    }, []);

    // This effect ensures that any running music timeout is cleared when the component unmounts.
    // This is crucial for preventing memory leaks and crashes on reset.
    useEffect(() => {
        return () => {
            if (musicStateRef.current.timeoutId) {
                clearTimeout(musicStateRef.current.timeoutId);
            }
        };
    }, []);

    const playSound = useCallback((frequency: number, duration: number = 0.4) => {
        if (!audioContextRef.current || isMuted) return;
        const ac = audioContextRef.current;
        const oscillator = ac.createOscillator();
        const gainNode = ac.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ac.destination);
        oscillator.frequency.setValueAtTime(frequency, ac.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, ac.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ac.currentTime + duration);
        oscillator.start(ac.currentTime);
        oscillator.stop(ac.currentTime + duration);
    }, [isMuted]);

    const playDiscoverySound = useCallback(() => {
        if (!audioContextRef.current || isMuted) return;
        playSound(880, 0.1);
        setTimeout(() => playSound(1100, 0.1), 100);
        setTimeout(() => playSound(1320, 0.1), 200);
    }, [playSound, isMuted]);

    const playFailureSound = useCallback(() => {
        if (!audioContextRef.current || isMuted) return;
        const ac = audioContextRef.current;
        const oscillator = ac.createOscillator();
        const gainNode = ac.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ac.destination);
        oscillator.frequency.setValueAtTime(120, ac.currentTime);
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.2, ac.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ac.currentTime + 0.5);
        oscillator.start(ac.currentTime);
        oscillator.stop(ac.currentTime + 0.5);
    }, [isMuted]);

    const playDeleteSound = useCallback(() => {
        if (!audioContextRef.current || isMuted) return;
        const ac = audioContextRef.current;
        const oscillator = ac.createOscillator();
        const gainNode = ac.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ac.destination);
        oscillator.frequency.setValueAtTime(180, ac.currentTime);
        oscillator.type = 'triangle';
        gainNode.gain.setValueAtTime(0.2, ac.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ac.currentTime + 0.2);
        oscillator.start(ac.currentTime);
        oscillator.stop(ac.currentTime + 0.2);
    }, [isMuted]);

    const playMusicLoop = useCallback(() => {
        if (!musicStateRef.current.isPlaying || !audioContextRef.current) return;
        const ac = audioContextRef.current;
        
        const melodyNote = melody[musicStateRef.current.noteIndex];
        if (melodyNote.note !== 'REST') {
            const m_osc = ac.createOscillator();
            const m_gain = ac.createGain();
            m_osc.type = 'square';
            m_osc.frequency.setValueAtTime(noteToFreq[melodyNote.note], ac.currentTime);
            m_gain.gain.setValueAtTime(0.1, ac.currentTime);
            m_gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + melodyNote.duration * 0.9);
            m_osc.connect(m_gain).connect(ac.destination);
            m_osc.start(ac.currentTime);
            m_osc.stop(ac.currentTime + melodyNote.duration);
        }

        if (musicStateRef.current.noteIndex % 4 === 0) {
            const bassNote = bassline[musicStateRef.current.bassIndex];
            const b_osc = ac.createOscillator();
            const b_gain = ac.createGain();
            b_osc.type = 'sine';
            b_osc.frequency.setValueAtTime(noteToFreq[bassNote.note], ac.currentTime);
            b_gain.gain.setValueAtTime(0.15, ac.currentTime);
            b_gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + bassNote.duration * 0.9);
            b_osc.connect(b_gain).connect(ac.destination);
            b_osc.start(ac.currentTime);
            b_osc.stop(ac.currentTime + bassNote.duration);
            musicStateRef.current.bassIndex = (musicStateRef.current.bassIndex + 1) % bassline.length;
        }

        musicStateRef.current.noteIndex = (musicStateRef.current.noteIndex + 1) % melody.length;
        musicStateRef.current.timeoutId = setTimeout(playMusicLoop, melodyNote.duration * 1000);
    }, []);

    const toggleMusic = useCallback((mute: boolean) => {
        setIsMuted(mute);
        musicStateRef.current.isPlaying = !mute;
        if (musicStateRef.current.timeoutId) {
            clearTimeout(musicStateRef.current.timeoutId);
            musicStateRef.current.timeoutId = null;
        }
        if (!mute) {
            playMusicLoop();
        }
    }, [playMusicLoop]);

    return { initializeAudio, playSound, playDiscoverySound, toggleMusic, isMuted, playFailureSound, playDeleteSound };
};