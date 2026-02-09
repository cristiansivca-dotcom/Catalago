import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

const Toast = ({ message, type }) => (
    <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-xl shadow-2xl text-white transform transition-all duration-500 animate-slide-up z-[100] flex items-center gap-3 ${type === 'success' ? 'bg-green-600' : 'bg-blue-600'
        }`}>
        {type === 'success' ? <CheckCircle size={20} /> : <Info size={20} />}
        <span className="font-medium">{message}</span>
    </div>
);

export default Toast;
