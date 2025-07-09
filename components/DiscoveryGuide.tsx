
import React from 'react';
import { Compounds } from '../types';
import { XCircle } from './icons';

interface DiscoveryGuideProps {
    compounds: Compounds;
    discovered: { [key: string]: boolean };
    onClose: () => void;
}

const DiscoveryGuide: React.FC<DiscoveryGuideProps> = ({ compounds, discovered, onClose }) => {
    const sortedCompounds = Object.entries(compounds).sort(([, a], [, b]) =>
        a.commonName.localeCompare(b.commonName)
    );

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-gray-800 border-2 border-purple-500 rounded-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
                onClick={e => e.stopPropagation()}
                data-tutorial-id="discovery-guide-modal"
            >
                <div className="p-4 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
                    <h2 className="text-2xl font-bold text-white">
                        Discovery Guide ({Object.keys(discovered).length}/{Object.keys(compounds).length})
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close guide">
                        <XCircle size={32} />
                    </button>
                </div>
                <div className="p-4 space-y-3 overflow-y-auto custom-scrollbar">
                    {sortedCompounds.map(([key, compound]) => (
                        <div
                            key={compound.formula}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 ease-in-out ${
                                discovered[key]
                                    ? 'border-green-500/50 bg-green-500/10'
                                    : 'border-transparent bg-gray-900'
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{compound.emoji}</span>
                                    <div>
                                        <p className="font-bold text-lg text-white">
                                            {compound.commonName} ({compound.formula})
                                        </p>
                                        <p className="text-purple-300 text-sm">
                                            Recipe: {compound.recipe.replace(/\b1 /g, '')}
                                        </p>
                                    </div>
                                </div>
                                {discovered[key] && <span className="text-3xl text-green-500">✅</span>}
                            </div>
                            <p className="text-sm text-gray-400 mt-2 ml-12 italic">{compound.explanation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiscoveryGuide;
