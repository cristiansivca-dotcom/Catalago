import React from 'react';
import { Users, Maximize2, Star, Calendar, MapPin, CheckCircle, ShoppingBag } from 'lucide-react';

const TalentCard = ({ data, onAdd, isAdded, onViewImage }) => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
        <div
            className="h-64 w-full bg-gradient-to-br from-gray-200 to-gray-300 relative flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={() => onViewImage(data)}
        >
            {/* Área para la foto del talento */}
            <div className={`absolute inset-0 bg-${data.foto}-100 opacity-50`}></div>
            {data.fotos && data.fotos.length > 0 ? (
                <React.Fragment>
                    <img
                        src={data.fotos[0]}
                        alt={data.nombre}
                        className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                    />
                    {data.fotos.length > 1 && (
                        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
                            <Maximize2 size={12} />
                            +{data.fotos.length - 1}
                        </div>
                    )}
                </React.Fragment>
            ) : (
                <Users
                    size={64}
                    className={`text-${data.foto}-400 opacity-50 transform group-hover:scale-110 transition-transform duration-500`}
                />
            )}
            <div className="absolute bottom-3 left-3 flex gap-2">
                {data.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-1 bg-white/90 backdrop-blur text-xs font-semibold text-gray-700 rounded-md shadow-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{data.nombre}</h3>
                <div className="flex items-center text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm font-medium text-gray-600">{data.rating}.0</span>
                </div>
            </div>

            <p className="text-blue-600 font-medium text-sm mb-4">{data.especialidad}</p>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                    <Calendar size={14} /> {data.genero}
                </div>
                {data.altura && (
                    <div className="flex items-center gap-2">
                        <MapPin size={14} /> Altura: {data.altura}
                    </div>
                )}
                {data.experiencia && (
                    <div className="col-span-2 flex items-center gap-2">
                        <CheckCircle size={14} /> {data.experiencia}
                    </div>
                )}
            </div>

            {data.descripcion && (
                <p className="text-sm text-gray-600 mb-6">{data.descripcion}</p>
            )}

            <div className="mt-auto">
                <button
                    onClick={() => onAdd(data)}
                    disabled={isAdded}
                    className={`w-full py-2.5 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${isAdded
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-gray-900 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
                        }`}
                >
                    {isAdded ? (
                        <>Agregada <CheckCircle size={18} /></>
                    ) : (
                        <>Cotizar Perfil <ShoppingBag size={18} /></>
                    )}
                </button>
            </div>
        </div>
    </div>
);

export default TalentCard;
