import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TalentCard from './TalentCard';

const TalentList = ({ promotoras, cart, addToCart, onViewImage }) => {
    const [filterText, setFilterText] = useState('');

    const filteredPromoters = promotoras.filter(p =>
        p.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
        p.especialidad.toLowerCase().includes(filterText.toLowerCase())
    );

    const talentosDamas = filteredPromoters.filter(p => p.genero === "Dama");
    const talentosCaballeros = filteredPromoters.filter(p => p.genero === "Caballero");

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                    <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                        Directorio Exclusivo
                    </span>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
                        Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Talentos</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Explora nuestra exclusiva selección de profesionales para elevar la presencia de tu marca en cualquier evento.
                    </p>
                </div>

                <div className="relative group w-full md:w-96">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar por nombre o especialidad..."
                        className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-600 font-medium"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-20">
                {talentosDamas.length > 0 && (
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                Damas
                            </h3>
                            <div className="h-px flex-1 bg-slate-100"></div>
                            <span className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-xs font-bold border border-slate-100">
                                {talentosDamas.length} PERFILES
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {talentosDamas.map(talento => (
                                <TalentCard
                                    key={talento.id}
                                    data={talento}
                                    onAdd={addToCart}
                                    isAdded={cart.some(item => item.id === talento.id)}
                                    onViewImage={onViewImage}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {talentosCaballeros.length > 0 && (
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                Caballeros
                            </h3>
                            <div className="h-px flex-1 bg-slate-100"></div>
                            <span className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-xs font-bold border border-slate-100">
                                {talentosCaballeros.length} PERFILES
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {talentosCaballeros.map(talento => (
                                <TalentCard
                                    key={talento.id}
                                    data={talento}
                                    onAdd={addToCart}
                                    isAdded={cart.some(item => item.id === talento.id)}
                                    onViewImage={onViewImage}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {filteredPromoters.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6">
                            <Search size={32} className="text-slate-300" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">No encontramos resultados</h4>
                        <p className="text-slate-500">Intenta con otros términos de búsqueda.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TalentList;
