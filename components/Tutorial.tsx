
import React, { useState, useLayoutEffect, useCallback } from 'react';

interface TutorialProps {
    step: number;
    setStep: (step: number) => void;
    onFinish: () => void;
    isNotificationVisible: boolean;
}

interface StepConfig {
    text: React.ReactNode;
    selector?: string;
    position: 'top' | 'bottom' | 'center' | 'left' | 'right';
    showNext?: boolean;
    showFinish?: boolean;
    autoAdvance?: boolean;
}

const Tutorial: React.FC<TutorialProps> = ({ step, setStep, onFinish, isNotificationVisible }) => {
    const [highlightBox, setHighlightBox] = useState<React.CSSProperties>({ opacity: 0 });
    const [textBox, setTextBox] = useState<React.CSSProperties>({ opacity: 0 });

    const STEPS: StepConfig[] = [
        // 0: Welcome
        {
            text: "Welcome to Elementary! Let's walk through the basics of discovery.",
            position: 'center',
            showNext: true,
        },
        // 1: Element Library
        {
            text: "This is the Element Library. It contains all the building blocks of matter. If it's closed, click the bar to open it.",
            selector: '[data-tutorial-id="element-library"]',
            position: 'top',
            showNext: true,
        },
        // 2: Drag H
        {
            text: "Let's start simple. Drag a Hydrogen (H) element from the library into the main area, called the Workspace.",
            selector: '[data-tutorial-id="element-H"]',
            position: 'top',
            autoAdvance: true,
        },
        // 3: Drag another H
        {
            text: "Great! To form a compound, you need to combine elements. Drag another Hydrogen (H) element into the Workspace.",
            selector: '[data-tutorial-id="workspace"]',
            position: 'bottom',
            autoAdvance: true,
        },
        // 4: H2 discovered
        {
            text: "Success! You've discovered Hydrogen Gas (H₂). A notification appears for every new discovery. Close it to continue.",
            selector: '[data-tutorial-id="notification-popup"]',
            position: 'bottom',
        },
        // 5: How to delete
        {
            text: "Good job! To clean up, hover over an element to reveal the delete button (X), then click it to remove the element.",
            selector: '[data-tutorial-id="workspace-element-0"]',
            position: 'bottom',
            autoAdvance: true,
        },
        // 6: Delete the other one
        {
            text: "Perfect. Now remove the other element to clear the workspace.",
            selector: '[data-tutorial-id="workspace-element-0"]',
            position: 'bottom',
            autoAdvance: true,
        },
        // 7: Make Water
        {
            text: (
                <>
                    Excellent. Let's try a more complex compound: <strong>Water (H₂O)</strong>.
                    <br />
                    Its recipe is 2 Hydrogen and 1 Oxygen. Drag them into the workspace.
                </>
            ),
            selector: '[data-tutorial-id="workspace"]',
            position: 'bottom',
            autoAdvance: true,
        },
        // 8: H2O discovered
        {
            text: "Fantastic! You've made Water. This is one of the most essential compounds. Close the notification to proceed.",
            selector: '[data-tutorial-id="notification-popup"]',
            position: 'bottom',
        },
        // 9: Discovery Guide
        {
            text: "Your discoveries are saved in the Discovery Guide. Click the beaker icon to see your progress.",
            selector: '[data-tutorial-id="discovery-guide"]',
            position: 'bottom',
            autoAdvance: true,
        },
        // 10: Inside Guide
        {
            text: "Here you can see everything you've found and what remains undiscovered. Close this guide to continue.",
            selector: '[data-tutorial-id="discovery-guide-modal"]',
            position: 'center',
        },
        // 11: Hint System
        {
            text: "If you ever get stuck, the Hint button (💡) can give you a recipe for an undiscovered compound.",
            selector: '[data-tutorial-id="hint-button"]',
            position: 'bottom',
            showNext: true,
        },
        // 12: Reset Workspace
        {
            text: "The Reset Workspace button (🔄) clears all elements from your workspace, letting you start a new experiment quickly. Your discoveries are safe.",
            selector: '[data-tutorial-id="reset-workspace-button"]',
            position: 'bottom',
            showNext: true,
        },
        // 13: Music Toggle
        {
            text: "Use the Music button (🎵) to toggle the background music on or off.",
            selector: '[data-tutorial-id="music-button"]',
            position: 'bottom',
            showNext: true,
        },
        // 14: Reset All Progress
        {
            text: "Be careful with this one! The Reset All button (🗑️) will erase all your progress and start the game over.",
            selector: '[data-tutorial-id="reset-all-button"]',
            position: 'right',
            showNext: true,
        },
        // 15: Final
        {
            text: "You're all set! You now know everything you need to become a master of the elements. Happy experimenting!",
            position: 'center',
            showFinish: true,
        }
    ];

    const currentConfig = STEPS[step];

    const updatePosition = useCallback(() => {
        if (!currentConfig) return;

        const targetElement = currentConfig.selector ? document.querySelector(currentConfig.selector) : null;
        const padding = 10;
        const margin = 16;
        const textMaxWidth = 384;
        const textEstimatedHeight = 150;

        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();

            setHighlightBox({
                top: `${rect.top - padding}px`,
                left: `${rect.left - padding}px`,
                width: `${rect.width + padding * 2}px`,
                height: `${rect.height + padding * 2}px`,
                opacity: 1,
            });
            
            let preferredPosition = currentConfig.position;

            if (preferredPosition === 'top' && rect.top - textEstimatedHeight - margin < 0) {
                preferredPosition = 'bottom';
            }
            if (preferredPosition === 'bottom' && rect.bottom + textEstimatedHeight + margin > window.innerHeight) {
                preferredPosition = 'top';
            }
             if (preferredPosition === 'left' && rect.left - textMaxWidth - margin < 0) {
                preferredPosition = 'right';
            }
            if (preferredPosition === 'right' && rect.right + textMaxWidth + margin > window.innerWidth) {
                preferredPosition = 'left';
            }

            let textStyles: React.CSSProperties = {};
            const idealLeft = rect.left + rect.width / 2;
            let finalLeft = idealLeft;
            let transformX = '-50%';
            if (idealLeft - textMaxWidth / 2 < margin) {
                finalLeft = margin;
                transformX = '0%';
            } else if (idealLeft + textMaxWidth / 2 > window.innerWidth - margin) {
                finalLeft = window.innerWidth - margin;
                transformX = '-100%';
            }

            switch (preferredPosition) {
                case 'top':
                    textStyles = { top: `${rect.top - margin}px`, left: `${finalLeft}px`, transform: `translate(${transformX}, -100%)` };
                    break;
                case 'bottom':
                    textStyles = { top: `${rect.bottom + margin}px`, left: `${finalLeft}px`, transform: `translate(${transformX}, 0)` };
                    break;
                case 'left':
                    textStyles = { top: `${rect.top + rect.height / 2}px`, left: `${rect.left - margin}px`, transform: 'translate(-100%, -50%)' };
                    break;
                case 'right':
                    textStyles = { top: `${rect.top + rect.height / 2}px`, left: `${rect.right + margin}px`, transform: 'translate(0, -50%)' };
                    break;
            }
            setTextBox({ ...textStyles, opacity: 1 });

        } else { // Center case
            setHighlightBox({
                top: '50%', left: '50%', width: '0px', height: '0px',
                transform: 'translate(-50%, -50%)',
                opacity: 1,
            });
            setTextBox({
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                opacity: 1,
            });
        }
    }, [currentConfig]);

    useLayoutEffect(() => {
        if (!currentConfig) {
            setHighlightBox(prev => ({ ...prev, opacity: 0 }));
            setTextBox(prev => ({ ...prev, opacity: 0 }));
            return;
        }

        const timeoutId = setTimeout(updatePosition, 100);
        
        window.addEventListener('resize', updatePosition);
        
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updatePosition);
        };
        
    }, [step, isNotificationVisible, updatePosition]);

     if (!currentConfig) return null;

    return (
        <div className="fixed inset-0 z-[1000] pointer-events-none">
            <div
                className="absolute transition-all duration-500 ease-in-out border-2 border-purple-400 border-dashed rounded-lg"
                style={{ ...highlightBox, boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)' }}
            />
            <div
                className="absolute max-w-sm p-4 bg-gray-900 text-white rounded-lg shadow-2xl border border-purple-500 transition-all duration-300 z-10"
                style={{ ...textBox }}
            >
                <div className="pointer-events-auto">
                    <p className="text-base">{currentConfig.text}</p>
                    <div className="flex justify-end gap-3 mt-4">
                        <button onClick={onFinish} className="text-sm text-gray-400 hover:text-white">Skip</button>
                        {currentConfig.showNext && (
                             <button onClick={() => setStep(step + 1)} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 font-bold rounded">Next</button>
                        )}
                        {currentConfig.showFinish && (
                             <button onClick={onFinish} className="px-4 py-2 bg-green-600 hover:bg-green-700 font-bold rounded">Finish</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;
