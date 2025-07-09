
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ElementData, WorkspaceElement, Compound, Compounds } from './types';
import { initialCompounds, generateCanonicalFormula } from './constants';
import { useAudio } from './hooks/useAudio';
import { Beaker, Music, RotateCcw, Lightbulb, Trash2, XCircle } from './components/icons';
import HintBox from './components/HintBox';
import DiscoveryGuide from './components/DiscoveryGuide';
import NotificationPopup from './components/NotificationPopup';
import ElementLibrary from './components/ElementLibrary';
import ErrorNotification from './components/ErrorNotification';
import ResetConfirmationModal from './components/ResetConfirmationModal';
import Tutorial from './components/Tutorial';

interface AppProps {
    onReset: () => void;
}

export const App: React.FC<AppProps> = ({ onReset }) => {
    const [isStarted, setIsStarted] = useState(false);
    const [compounds] = useState<Compounds>(initialCompounds);
    const [discovered, setDiscovered] = useState<{ [key: string]: boolean }>(() => {
        try {
            const saved = localStorage.getItem('discoveredCompounds');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    const discoveredMap: { [key: string]: boolean } = {};
                    parsed.forEach(key => {
                        discoveredMap[key] = true;
                    });
                    return discoveredMap;
                }
                if (typeof parsed === 'object' && parsed !== null) {
                    return parsed;
                }
            }
        } catch (e) {
            console.error("Failed to load discovered compounds from localStorage", e);
        }
        return {};
    });
    const [workspaceElements, setWorkspaceElements] = useState<WorkspaceElement[]>([]);
    const [formedCompound, setFormedCompound] = useState<Compound | null>(null);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [draggedElement, setDraggedElement] = useState<ElementData | null>(null);
    const [isGuideOpen, setIsGuideOpen] = useState(false);
    const [hint, setHint] = useState('');
    const [errorNotification, setErrorNotification] = useState('');
    const [isResetConfirmVisible, setIsResetConfirmVisible] = useState(false);
    
    const [isTutorialActive, setIsTutorialActive] = useState(false);
    const [tutorialStep, setTutorialStep] = useState(0);

    const { initializeAudio, playSound, playDiscoverySound, toggleMusic, isMuted, playFailureSound, playDeleteSound } = useAudio();
    const workspaceRef = useRef<HTMLDivElement>(null);
    const lastElementId = useRef(0);
    const lockedFormulaRef = useRef<string | null>(null);
    const discoveredRef = useRef(discovered);

    useEffect(() => {
        discoveredRef.current = discovered;
    }, [discovered]);

    useEffect(() => {
        try {
            localStorage.setItem('discoveredCompounds', JSON.stringify(discovered));
        } catch (e) {
            console.error("Failed to save discovered compounds to localStorage", e);
        }
    }, [discovered]);

    useEffect(() => {
        if (errorNotification) {
            const timer = setTimeout(() => setErrorNotification(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [errorNotification]);
    
    // --- Tutorial Logic ---
    useEffect(() => {
        if (!isStarted) return;
        try {
            const completed = localStorage.getItem('elementaryTutorialCompleted_v1');
            if (!completed) {
                setIsTutorialActive(true);
                // Mute music during tutorial for a cleaner experience
                if (!isMuted) toggleMusic(true);
            }
        } catch (e) {
            console.error("Failed to read from localStorage", e);
        }
    }, [isStarted]);
    
    useEffect(() => {
        if (!isTutorialActive) return;

        // Step 2 -> 3: User dragged one H
        if (tutorialStep === 2 && workspaceElements.some(el => el.symbol === 'H')) {
            setTutorialStep(3);
            return;
        }
        // Step 3 -> 4: User dragged a second H for H2
        if (tutorialStep === 3 && workspaceElements.filter(el => el.symbol === 'H').length >= 2) {
             setTimeout(() => setTutorialStep(4), 1200);
             return;
        }
        // Step 5 -> 6: User deleted one element
        if (tutorialStep === 5 && workspaceElements.length === 1) {
            setTutorialStep(6);
            return;
        }
        // Step 6 -> 7: User cleared the workspace
        if (tutorialStep === 6 && workspaceElements.length === 0) {
            setTutorialStep(7);
            return;
        }
        // Step 7 -> 8: User added elements for water
        const hCount = workspaceElements.filter(el => el.symbol === 'H').length;
        const oCount = workspaceElements.filter(el => el.symbol === 'O').length;
        if (tutorialStep === 7 && hCount === 2 && oCount === 1) {
            setTimeout(() => setTutorialStep(8), 1200); // Wait for combination
            return;
        }
        // Step 9 -> 10: User opened the guide
        if (tutorialStep === 9 && isGuideOpen) {
            setTutorialStep(10);
        }

    }, [isTutorialActive, tutorialStep, workspaceElements, isGuideOpen]);

    const handleFinishTutorial = () => {
        setIsTutorialActive(false);
        try {
            localStorage.setItem('elementaryTutorialCompleted_v1', 'true');
        } catch (e) {
            console.error("Failed to save to localStorage", e);
        }
    };
    // --- End Tutorial Logic ---

    const handleStart = () => {
        if (initializeAudio()) {
            toggleMusic(false);
        }
        setIsStarted(true);
    };

    const handleDragStart = (e: React.DragEvent, element: ElementData) => {
        setDraggedElement(element);
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', element.symbol);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (!draggedElement || !workspaceRef.current) return;

        const workspaceRect = workspaceRef.current.getBoundingClientRect();
        const x = e.clientX - workspaceRect.left;
        const y = e.clientY - workspaceRect.top;

        const newElement: WorkspaceElement = {
            ...draggedElement,
            id: ++lastElementId.current,
            x: x - 32, // center element on cursor
            y: y - 32,
        };
        setWorkspaceElements(prev => [...prev, newElement]);
        playSound(draggedElement.frequency);
        setDraggedElement(null);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };

    const checkCombination = useCallback(() => {
        if (workspaceElements.length < 2) return;
        const canonicalFormula = generateCanonicalFormula(workspaceElements);

        if (lockedFormulaRef.current === canonicalFormula) {
            return;
        }

        if (compounds[canonicalFormula]) {
            const compound = compounds[canonicalFormula];
            lockedFormulaRef.current = canonicalFormula;
            setErrorNotification('');
            setFormedCompound(compound);
            setIsNotificationVisible(true);
            setHint('');
            playDiscoverySound();

            if (!discoveredRef.current[canonicalFormula]) {
                setDiscovered(prev => ({ ...prev, [canonicalFormula]: true }));
            }
        } else {
            setErrorNotification('This combination does not yield a known compound.');
            playFailureSound();
        }
    }, [workspaceElements, compounds, playDiscoverySound, playFailureSound]);

    useEffect(() => {
        lockedFormulaRef.current = null;
        const timer = setTimeout(() => {
            checkCombination();
        }, 1000);
        return () => clearTimeout(timer);
    }, [workspaceElements, checkCombination]);

    const handleDeleteElement = (id: number) => {
        setWorkspaceElements(prev => prev.filter(el => el.id !== id));
        playDeleteSound?.();
    };

    const closeNotification = () => {
        setIsNotificationVisible(false);
        setFormedCompound(null);
         if (isTutorialActive) {
            if (tutorialStep === 4) { // After H2 discovery
                setTutorialStep(5);
            } else if (tutorialStep === 8) { // After H2O discovery
                setTutorialStep(9);
            }
        }
    };

    const handleResetWorkspace = () => {
        setWorkspaceElements([]);
        setHint('');
        setErrorNotification('');
    };

    const handleGetHint = () => {
        const undiscovered = Object.entries(compounds).filter(([key]) => !discovered[key]);
        if (undiscovered.length === 0) {
            setHint("You've discovered everything! Congratulations!");
            return;
        }
        const [, compound] = undiscovered[Math.floor(Math.random() * undiscovered.length)];
        const hintText = `Try combining ${compound.recipe.replace(/\s?\+\s?/g, ' and ')}.`;
        setHint(hintText);
    };
    
    const handleToggleMusic = () => {
        if (!isStarted && initializeAudio()) {
            setIsStarted(true);
        }
        toggleMusic(!isMuted);
    };

    const handleFullReset = () => {
        onReset();
    };

    if (!isStarted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 relative">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-2 text-purple-400">Elementary</h1>
                    <p className="text-xl text-gray-300 mb-8">The Complete Edition</p>
                    <button
                        onClick={handleStart}
                        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-2xl transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Begin Your Discovery
                    </button>
                    <p className="mt-8 text-gray-400 max-w-lg mx-auto">
                        Drag elements from the library into the workspace to combine them. Discover all the compounds, and use the hint system if you get stuck!
                    </p>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-gray-500 text-sm flex justify-between items-baseline">
                    <span>A project by Zaib Uddin.</span>
                    <span className="text-lg font-bold text-yellow-400 underline">Have fun!</span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
            <header className="flex justify-between items-center p-3 border-b-2 border-gray-700 bg-gray-800/80 backdrop-blur-sm z-30 flex-shrink-0">
                <h1 className="text-2xl font-bold text-purple-400">Elementary</h1>
                <div className="flex items-center gap-2 sm:gap-4">
                    <button data-tutorial-id="reset-workspace-button" onClick={handleResetWorkspace} className="p-2 rounded-full hover:bg-gray-700 transition-colors" title="Reset Workspace"><RotateCcw className="text-gray-300" /></button>
                    <button data-tutorial-id="hint-button" onClick={handleGetHint} className="p-2 rounded-full hover:bg-gray-700 transition-colors" title="Get a Hint">
                        <Lightbulb className="text-yellow-400" />
                    </button>
                    <button data-tutorial-id="discovery-guide" onClick={() => setIsGuideOpen(true)} className="p-2 rounded-full hover:bg-gray-700 transition-colors" title="Discovery Guide"><Beaker className="text-gray-300" /></button>
                    <button data-tutorial-id="music-button" onClick={handleToggleMusic} className="p-2 rounded-full hover:bg-gray-700 transition-colors" title={isMuted ? "Unmute Music" : "Mute Music"}>
                        <Music className={isMuted ? "text-red-500" : "text-green-400"} />
                    </button>
                </div>
            </header>

            <main ref={workspaceRef} onDrop={handleDrop} onDragOver={handleDragOver} className="flex-grow relative bg-grid-pattern" data-tutorial-id="workspace">
                <button
                    onClick={() => setIsResetConfirmVisible(true)}
                    className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded-full shadow-lg transition-transform transform hover:scale-105 z-10"
                    title="Reset All Progress"
                    data-tutorial-id="reset-all-button"
                >
                    <Trash2 size={20} />
                </button>
                
                {workspaceElements.map((el, index) => (
                    <div
                        key={el.id}
                        data-tutorial-id={`workspace-element-${index}`}
                        className="group absolute w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white font-bold shadow-lg border border-white/30 cursor-default"
                        style={{
                            left: `${el.x}px`,
                            top: `${el.y}px`,
                            background: `linear-gradient(135deg, ${el.color}, #333)`,
                            textShadow: '1px 1px 3px #000'
                        }}
                    >
                        <span className="text-xs absolute top-1 right-1 opacity-70">{el.number}</span>
                        <span className="text-xl font-black">{el.symbol}</span>
                        <span className="text-[10px] opacity-90 font-medium truncate w-full px-1">{el.name}</span>
                        <button
                            onClick={() => handleDeleteElement(el.id)}
                            aria-label={`Delete ${el.name}`}
                            className="absolute -top-2 -right-2 p-0.5 bg-red-600 hover:bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 focus:opacity-100 z-10"
                        >
                            <XCircle size={18} />
                        </button>
                    </div>
                ))}
                
                <ErrorNotification message={errorNotification} />
                <HintBox hint={hint} />
            </main>
            
            <ElementLibrary onDragStart={handleDragStart} />
            
            {isGuideOpen && (
                <DiscoveryGuide 
                    compounds={compounds} 
                    discovered={discovered} 
                    onClose={() => {
                        setIsGuideOpen(false)
                        if (isTutorialActive && tutorialStep === 10) {
                            setTutorialStep(11);
                        }
                    }} 
                />
            )}
            {isNotificationVisible && formedCompound && (
                <NotificationPopup 
                    compound={formedCompound} 
                    onClose={closeNotification} 
                    data-tutorial-id="notification-popup"
                />
            )}
            {isResetConfirmVisible && (
                <ResetConfirmationModal
                    onConfirm={handleFullReset}
                    onCancel={() => setIsResetConfirmVisible(false)}
                />
            )}
            {isTutorialActive && (
                <Tutorial 
                    step={tutorialStep}
                    setStep={setTutorialStep}
                    onFinish={handleFinishTutorial}
                    isNotificationVisible={isNotificationVisible}
                />
            )}
        </div>
    );
};
