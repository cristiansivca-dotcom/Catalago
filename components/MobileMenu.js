import React from "react";
import { X, Home, Users, ExternalLink, ChevronRight } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "talentos", label: "Staff & Modelos", icon: Users },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[90] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed inset-y-0 left-0 w-[85%] sm:w-[400px] bg-white/90 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.2)] border-r border-white/40 transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-[100] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Explorar</h2>
              <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em] mt-1">
                Catálogo SIVCA
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-slate-100/50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 shadow-sm"
              aria-label="Cerrar menú"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full group flex items-center justify-between p-5 rounded-[2rem] transition-all duration-500 border ${
                    isActive
                      ? "bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20"
                      : "bg-white/50 border-white text-slate-600 hover:bg-white hover:border-slate-200 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isActive ? "bg-white/20" : "bg-slate-100/50 group-hover:bg-blue-50"
                      }`}
                    >
                      <Icon size={20} className={isActive ? "text-white" : "text-blue-500"} />
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    strokeWidth={3}
                    className={`transition-transform duration-500 ${
                      isActive
                        ? "translate-x-1"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="https://www.sivca.com.ve"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-5 rounded-[2rem] bg-slate-900 text-white hover:bg-blue-600 transition-all duration-500 shadow-xl hover:shadow-blue-500/30 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                  <span className="font-black text-sm uppercase tracking-widest text-left">
                    SIVCA.COM.VE
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  strokeWidth={3}
                  className="text-white/40 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-auto pt-8 flex flex-col items-center gap-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                Catálogo Actualizado 2024
              </p>
            </div>
            <p className="text-[9px] text-slate-300 font-medium text-center leading-relaxed">
              Agencia SIVCA Venezuela <br />
              Expertos en Talento y Protocolo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
