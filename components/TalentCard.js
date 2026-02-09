import React from "react";
import Image from "next/image";
import { Users, Maximize2, Star, Calendar, MapPin, CheckCircle, ShoppingBag } from "lucide-react";

const TalentCard = ({ data, onAdd, isAdded, onViewImage }) => (
  <div className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full relative">
    {/* Profile Image Section */}
    <div
      className="h-80 w-full bg-slate-100 relative flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={() => onViewImage(data)}
    >
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {data.fotos && data.fotos.length > 0 ? (
        <Image
          src={data.fotos[0]}
          alt={data.nombre}
          fill
          className="object-cover relative z-0 transition-transform duration-1000 ease-out group-hover:scale-110"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 opacity-20">
          <Users size={64} className="text-slate-400" />
          <span className="text-xs font-semibold uppercase tracking-widest">Sin imagen</span>
        </div>
      )}

      {/* Floating Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
        {data.tags.slice(0, 2).map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white/80 backdrop-blur-md text-[10px] font-bold text-slate-800 rounded-full shadow-sm border border-white/50 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Photo Count Tooltip */}
      {data.fotos && data.fotos.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20 z-20">
          <Maximize2 size={10} strokeWidth={3} />
          <span className="font-bold">{data.fotos.length} FOTOS</span>
        </div>
      )}

      {/* Quick View Message on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
        <span className="bg-white/20 backdrop-blur-lg text-white text-xs font-bold px-4 py-2 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          Ver Portafolio
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6 flex-1 flex flex-col relative bg-white">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-xl font-black text-slate-900 tracking-tight">{data.nombre}</h3>
        <div className="flex items-center gap-1 px-2 py-0.5 bg-yellow-50 rounded-lg border border-yellow-100">
          <Star size={12} fill="#eab308" className="text-yellow-500" />
          <span className="text-xs font-bold text-yellow-700">{data.rating}.0</span>
        </div>
      </div>

      <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
        {data.especialidad}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="flex items-center gap-2 text-slate-500">
          <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center">
            <Calendar size={12} className="text-slate-400" />
          </div>
          <span className="text-xs font-medium">{data.genero}</span>
        </div>
        {data.altura && (
          <div className="flex items-center gap-2 text-slate-500">
            <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center">
              <MapPin size={12} className="text-slate-400" />
            </div>
            <span className="text-xs font-medium">{data.altura}</span>
          </div>
        )}
      </div>

      {/* Description or Snippet */}
      {data.descripcion && (
        <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-2 italic">
          &quot;{data.descripcion}&quot;
        </p>
      )}

      <div className="mt-auto pt-4 border-t border-slate-50">
        <button
          onClick={() => onAdd(data)}
          disabled={isAdded}
          className={`w-full py-3.5 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2.5 ${
            isAdded
              ? "bg-green-50 text-green-600 cursor-default border border-green-100"
              : "bg-slate-900 text-white hover:bg-blue-600 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] active:scale-95"
          }`}
        >
          {isAdded ? (
            <>
              <span className="text-sm">Seleccionada</span>
              <div className="bg-green-500 rounded-full p-0.5">
                <CheckCircle size={14} className="text-white" />
              </div>
            </>
          ) : (
            <>
              <span className="text-sm">Añadir a Selección</span>
              <ShoppingBag size={18} strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </div>
  </div>
);

export default TalentCard;
