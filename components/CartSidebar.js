import React from 'react';
import { X, Users } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cart, removeFromCart, onQuote }) => (
    <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Tu Selección</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
                {cart.length === 0 ? (
                    <div className="text-center text-gray-400 mt-10">
                        <Users size={48} className="mx-auto mb-2 opacity-50" />
                        <p>Aún no has seleccionado talentos.</p>
                    </div>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                            <div className={`w-10 h-10 rounded-full bg-${item.foto}-100 flex items-center justify-center overflow-hidden`}>
                                {item.fotos && item.fotos.length > 0 ? (
                                    <img src={item.fotos[0]} alt={item.nombre} className="w-full h-full object-cover" />
                                ) : (
                                    <Users size={16} className={`text-${item.foto}-500`} />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-sm">{item.nombre}</p>
                                <p className="text-xs text-gray-500">{item.especialidad}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                                <X size={16} />
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-6 border-t pt-4">
                <button
                    onClick={onQuote}
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={cart.length === 0}
                >
                    Cotizar por WhatsApp ({cart.length})
                </button>
            </div>
        </div>
    </div>
);

export default CartSidebar;
