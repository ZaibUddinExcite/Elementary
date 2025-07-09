
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Could not find root element with id "root"');
}
const root = ReactDOM.createRoot(container);

/**
 * A wrapper component to manage the application's lifecycle,
 * specifically to handle a full-state reset.
 */
const Main: React.FC = () => {
    const [resetKey, setResetKey] = useState(0);

    /**
     * Triggers a full application reset. It clears all stored data
     * and then changes the key of the App component, forcing React
     * to unmount the entire component tree and remount it fresh.
     */
    const triggerReset = () => {
        try {
            localStorage.clear();
        } catch (e) {
            console.error("Failed to clear localStorage:", e);
        }
        setResetKey(prevKey => prevKey + 1);
    };

    return <App key={resetKey} onReset={triggerReset} />;
};


root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);