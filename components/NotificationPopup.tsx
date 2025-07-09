
import React from 'react';
import { Compound } from '../types';
import { XCircle } from './icons';

interface NotificationPopupProps {
    compound: Compound;
    onClose: () => void;
    'data-tutorial-id'?: string;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ compound, onClose, 'data-tutorial-id': dataTutorialId }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div 
                className="bg-black/70 backdrop-blur-md rounded-xl p-6 border-2 border-green-400 shadow-2xl max-w-sm w-full mx-4 relative pointer-events-auto"
                data-tutorial-id={dataTutorialId}
            >
                <button onClick={onClose} className="absolute -top-3 -right-3 text-gray-300 hover:text-white" aria-label="Close notification">
                    <XCircle size={32} className="bg-gray-800 rounded-full" />
                </button>
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">🎉 Compound Discovered!</h3>
                    <div className="text-4xl my-3">{compound.emoji}</div>
                    <div className="text-lg text-white/90 mb-2">
                        <strong>{compound.name}</strong>
                    </div>
                    <div className="text-4xl font-mono text-white mb-3">{compound.formula}</div>
                    <p className="text-sm text-gray-300 mt-2 italic">{compound.explanation}</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationPopup;
