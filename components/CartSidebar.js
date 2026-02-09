import React from 'react';
import { X, Users } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cart, removeFromCart, onQuote }) => (
    <>
        {/* Backdrop overlay */}
        <div 
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        />
        
        {/* Sidebar panel */}
        <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Tu Selección</h2>
                    <button 
                        onClick={onClose} 
                        className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Cerrar panel"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-400 mt-10">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users size={32} className="opacity-30" />
                            </div>
                            <p className="text-sm">Aún no has seleccionado talentos.</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="group flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden border border-gray-100">
                                    {item.fotos && item.fotos.length > 0 ? (
                                        <img src={item.fotos[0]} alt={item.nombre} className="w-full h-full object-cover" />
                                    ) : (
                                        <Users size={20} className="text-blue-500" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-sm text-gray-900 truncate">{item.nombre}</p>
                                    <p className="text-xs text-gray-500 truncate">{item.especialidad}</p>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)} 
                                    className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                    title="Quitar"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="mt-6 border-t pt-4">
                    <button
                        onClick={onQuote}
                        className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 active:scale-[0.98] transition-all shadow-lg shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
                        disabled={cart.length === 0}
                    >
                        <span>Cotizar por WhatsApp</span>
                        <span className="bg-green-500 text-white px-2 py-0.5 rounded-md text-xs">
                            {cart.length}
                        </span>
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-3 uppercase tracking-wider font-medium">
                        Atención inmediata 24/7
                    </p>
                </div>
            </div>
        </div>
    </>
);

export default CartSidebar;
