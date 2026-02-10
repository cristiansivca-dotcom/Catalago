import React from "react";
import { CheckCircle, Info } from "lucide-react";

const Toast = ({ message, type }) => (
  <div
    className={`fixed top-8 right-8 px-6 py-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-white transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-[100] flex items-center gap-4 border border-white/20 backdrop-blur-3xl animate-fade-in-right ${
      type === "success" ? "bg-slate-900/90" : "bg-blue-600/90"
    }`}
  >
    <div
      className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
        type === "success" ? "bg-green-500/20 text-green-400" : "bg-white/20 text-white"
      }`}
    >
      {type === "success" ? (
        <CheckCircle size={22} strokeWidth={3} />
      ) : (
        <Info size={22} strokeWidth={3} />
      )}
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-0.5">
        Notificación
      </span>
      <span className="font-bold text-sm tracking-tight">{message}</span>
    </div>
  </div>
);

export default Toast;
