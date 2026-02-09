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
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Nuestros Talentos</h2>
                    <p className="text-gray-500">Selecciona los perfiles que mejor se adapten a tu marca.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o especialidad..."
                        className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-80"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-10">
                {talentosDamas.length > 0 && (
                    <section>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Damas ({talentosDamas.length})
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Caballeros ({talentosCaballeros.length})
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
        </div>
    );
};

export default TalentList;
