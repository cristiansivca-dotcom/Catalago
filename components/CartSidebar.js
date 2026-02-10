import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Users, MessageCircle, ArrowLeft, Send } from "lucide-react";

const CartSidebar = ({ isOpen, onClose, cart, removeFromCart, onQuote }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  useEffect(() => {
    if (isOpen && !isConfirming) {
      const lines = cart.map((item) => `- ${item.nombre} (${item.especialidad})`);
      setCustomMessage(
        `Hola, me gustaría cotizar los siguientes perfiles del Catálogo SIVCA:\n\n${lines.join("\n")}\n\nPor favor envíen disponibilidad y presupuesto.`,
      );
    }
  }, [isOpen, cart, isConfirming]);

  const handleFinalQuote = () => {
    onQuote(customMessage);
    setIsConfirming(false);
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[70] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[500px] bg-white/90 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.2)] border-l border-white/40 transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-[80] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          {!isConfirming ? (
            <>
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                    Mi Selección
                  </h2>
                  <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em] mt-1">
                    Catálogo Premium
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 -mr-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100/50 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200"
                  aria-label="Cerrar panel"
                >
                  <X size={24} strokeWidth={2.5} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-fade-in">
                    <div className="w-24 h-24 bg-slate-100/50 rounded-[2rem] flex items-center justify-center border border-slate-200/50 shadow-inner">
                      <Users size={40} className="text-slate-300" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-900 tracking-tight">
                        Tu bolsa está vacía
                      </p>
                      <p className="text-sm text-slate-400 font-medium max-w-[200px] mx-auto mt-2">
                        Explora nuestro catálogo y añade los talentos que necesites.
                      </p>
                    </div>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={item.id}
                      className="group flex items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-3xl border border-white hover:border-blue-500/30 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 animate-fade-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200/30 relative shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        {item.fotos && item.fotos.length > 0 ? (
                          <Image
                            src={item.fotos[0]}
                            alt={item.nombre}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <Users size={24} className="text-slate-300" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-slate-900 tracking-tight">{item.nombre}</p>
                        <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5">
                          {item.especialidad}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 active:scale-95"
                        title="Quitar"
                      >
                        <X size={18} strokeWidth={3} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={() => setIsConfirming(true)}
                  className={`w-full py-5 rounded-[2rem] font-black transition-all duration-700 flex items-center justify-center gap-4 tracking-[0.15em] uppercase text-xs shadow-2xl ${
                    cart.length === 0
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "bg-slate-900 text-white hover:bg-green-600 hover:shadow-green-500/40 active:scale-[0.98] transform"
                  }`}
                  disabled={cart.length === 0}
                >
                  <span>Generar Presupuesto</span>
                  <div
                    className={`flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-black ${
                      cart.length === 0 ? "bg-slate-200 text-slate-400" : "bg-white/20 text-white"
                    }`}
                  >
                    {cart.length}
                  </div>
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col h-full animate-fade-in-right">
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setIsConfirming(false)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-all"
                >
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-2xl font-black text-slate-900 tracking-tighter">
                  Revisar Mensaje
                </h2>
              </div>

              <div className="flex-1 space-y-6 overflow-y-auto pr-2 scrollbar-hide">
                <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-[2rem]">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <MessageCircle size={14} /> Contenido del mensaje
                  </p>
                  <textarea
                    className="w-full bg-white/60 backdrop-blur-sm border border-white rounded-2xl p-4 text-sm text-slate-700 font-medium focus:ring-4 focus:ring-blue-500/10 outline-none transition-all h-64 resize-none leading-relaxed"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                    Resumen de Selección ({cart.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-slate-100 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm"
                      >
                        <span className="text-xs font-bold text-slate-700">{item.nombre}</span>
                        <button
                          onClick={() => {
                            removeFromCart(item.id);
                            if (cart.length <= 1) setIsConfirming(false);
                          }}
                          className="text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <X size={12} strokeWidth={3} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={handleFinalQuote}
                  className="w-full py-5 rounded-[2rem] bg-green-600 text-white font-black hover:bg-green-700 hover:shadow-green-500/40 transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 uppercase text-xs tracking-widest active:scale-95"
                >
                  <span>Enviar a WhatsApp</span>
                  <Send size={18} strokeWidth={2.5} />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-4 font-black uppercase tracking-[0.2em]">
                  Puedes editar el mensaje antes de enviar
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <p className="text-[9px] text-slate-900 font-black uppercase tracking-[0.2em]">
              Soporte prioritario activo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
