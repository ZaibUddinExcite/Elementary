import React from 'react';
import { AlertTriangle } from './icons';

interface ErrorNotificationProps {
    message: string;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div 
            className="absolute top-5 left-1/2 bg-red-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-3 border-2 border-red-400 animate-fade-in-down z-20"
            role="alert"
        >
            <AlertTriangle size={20} className="text-yellow-300" />
            <p className="font-semibold">{message}</p>
        </div>
    );
};

export default ErrorNotification;