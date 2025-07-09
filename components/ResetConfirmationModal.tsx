import React from 'react';
import { AlertTriangle, XCircle } from './icons';

interface ResetConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const ResetConfirmationModal: React.FC<ResetConfirmationModalProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onCancel}>
            <div
                className="bg-gray-800 border-2 border-red-500 rounded-xl max-w-md w-full p-6 relative"
                onClick={e => e.stopPropagation()}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="reset-title"
                aria-describedby="reset-description"
            >
                <button onClick={onCancel} className="absolute -top-3 -right-3 text-gray-300 hover:text-white" aria-label="Close">
                    <XCircle size={32} className="bg-gray-800 rounded-full" />
                </button>
                <div className="flex flex-col items-center text-center">
                    <AlertTriangle size={48} className="text-yellow-400 mb-4" />
                    <h2 id="reset-title" className="text-2xl font-bold text-white mb-2">Reset All Progress?</h2>
                    <p id="reset-description" className="text-gray-300 mb-6">
                        Are you sure you want to start over? All your discovered compounds will be permanently deleted. This action cannot be undone.
                    </p>
                    <div className="flex gap-4 w-full">
                        <button
                            onClick={onCancel}
                            className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
                        >
                            Yes, Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetConfirmationModal;
