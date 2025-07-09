import React from 'react';
import { Lightbulb } from './icons';

interface HintBoxProps {
    hint: string;
}

const HintBox: React.FC<HintBoxProps> = ({ hint }) => {
    if (!hint) return null;

    return (
        <div className="hint-box">
            <div className="flex items-center gap-2 text-yellow-400">
                <Lightbulb size={20} />
                <h4 className="font-bold">Flash of inspiration!</h4>
            </div>
            <p className="text-sm text-gray-300 mt-1">{hint}</p>
        </div>
    );
};

export default HintBox;
