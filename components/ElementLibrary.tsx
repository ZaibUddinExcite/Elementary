

import React, { useState, useCallback, useRef } from 'react';
import { ElementData } from '../types';
import { allElements, commonElements, elementCategories, elementCategoryDefinitions } from '../constants';
import { ChevronDown, ChevronUp } from './icons';

interface ElementLibraryProps {
    onDragStart: (e: React.DragEvent, element: ElementData) => void;
}

const ElementLibrary: React.FC<ElementLibraryProps> = ({ onDragStart }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [panelHeight, setPanelHeight] = useState(280);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const footerRef = useRef<HTMLElement>(null);
    const hoveredButtonRef = useRef<HTMLButtonElement | null>(null);
    const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({ display: 'none' });

    const getVisibleElements = () => {
        if (selectedCategory === 'all') return allElements;
        if (selectedCategory === 'common') return commonElements;
        return allElements.filter(el => el.category === selectedCategory).sort((a, b) => a.number - b.number);
    };
    const visibleElements = getVisibleElements();

    const startResizing = useCallback((mouseDownEvent: React.MouseEvent) => {
        if (mouseDownEvent.button !== 0 || !footerRef.current) return;
        const startY = mouseDownEvent.clientY;
        const startHeight = footerRef.current.offsetHeight;
        
        const doDrag = (e: MouseEvent) => {
            const newHeight = startHeight - (e.clientY - startY);
            if (newHeight > 100 && newHeight < window.innerHeight * 0.8) {
                 setPanelHeight(newHeight);
            }
        };
        const stopDrag = () => {
            document.removeEventListener('mousemove', doDrag);
            document.removeEventListener('mouseup', stopDrag);
        };
        
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
    }, []);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, category: string) => {
        setHoveredCategory(category);
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        setTooltipStyle({
            display: 'block',
            position: 'fixed',
            bottom: `${window.innerHeight - rect.top}px`,
            left: `${rect.left + rect.width / 2}px`,
            transform: 'translateX(-50%)',
            zIndex: 100,
        });
    };
    
    const handleMouseLeave = () => {
        setHoveredCategory(null);
        setTooltipStyle({ display: 'none' });
    };

    return (
        <>
        <footer
            ref={footerRef}
            style={{ height: isPanelOpen ? panelHeight : '48px' }}
            className="w-full bg-gray-800/80 backdrop-blur-sm border-t-2 border-gray-700 shadow-2xl z-40 flex-shrink-0 flex flex-col transition-all duration-300"
            data-tutorial-id="element-library"
        >
            <div
                onMouseDown={startResizing}
                className="w-full h-2 cursor-ns-resize flex items-center justify-center absolute -top-1 left-0 group"
                aria-label="Resize element panel"
                role="separator"
            >
                <div className="w-10 h-1 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors" />
            </div>
            <button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                className="w-full py-3 text-center text-gray-300 hover:bg-gray-700 flex items-center justify-center gap-2 flex-shrink-0"
                aria-expanded={isPanelOpen}
            >
                {isPanelOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                <span>Element Library</span>
            </button>
            <div className={`flex-grow flex flex-col min-h-0 transition-opacity duration-200 ${isPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="px-4 pt-4 flex-shrink-0">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {Object.entries(elementCategories).map(([key, name]) => (
                            <div key={key} onMouseEnter={(e) => handleMouseEnter(e, key)} onMouseLeave={handleMouseLeave}>
                                <button
                                    onClick={() => setSelectedCategory(key)}
                                    className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedCategory === key ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                                >
                                    {name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-grow p-4 overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 xl:grid-cols-15 gap-2 text-center">
                        {visibleElements.map((element) => (
                            <div
                                key={element.symbol}
                                draggable
                                onDragStart={(e) => onDragStart(e, element)}
                                className="relative cursor-grab active:cursor-grabbing group"
                                title={element.name}
                                {...(element.symbol === 'H' ? { 'data-tutorial-id': 'element-H' } : {})}
                            >
                                <div className="aspect-square rounded-lg flex flex-col items-center justify-center text-white font-bold shadow-md border border-white/20 transform transition-all hover:scale-110" style={{ background: `linear-gradient(135deg, ${element.color}, #333)`, textShadow: '1px 1px 3px #000' }}>
                                    <span className="text-xs absolute top-1 right-1 opacity-70">{element.number}</span>
                                    <span className="text-lg font-black">{element.symbol}</span>
                                    <span className="text-[10px] opacity-90 font-medium truncate w-full px-1">{element.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
        {hoveredCategory && (
            <div 
                style={tooltipStyle}
                className="mb-2 w-72 p-3 bg-gray-900 text-white rounded-lg shadow-xl text-sm border border-purple-400 text-left"
            >
                <p className="font-bold text-purple-300 mb-1">{elementCategories[hoveredCategory]}</p>
                <p className="text-gray-300">{elementCategoryDefinitions[hoveredCategory as keyof typeof elementCategoryDefinitions]}</p>
            </div>
        )}
        </>
    );
};

export default ElementLibrary;