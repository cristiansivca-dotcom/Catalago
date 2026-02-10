import React from "react";
import Image from "next/image";
import { Users, Maximize2, Star, Calendar, MapPin, CheckCircle, ShoppingBag } from "lucide-react";

const TalentCard = ({ data, onAdd, isAdded, onViewImage }) => (
  <div className="group bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-sm hover:shadow-3xl transition-all duration-700 overflow-hidden border border-white/60 flex flex-col h-full relative ring-1 ring-white/20 hover:ring-blue-500/30">
    {/* Profile Image Section */}
    <div
      className="h-[28rem] w-full bg-slate-200 relative flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={() => onViewImage(data)}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700 z-10" />

      {data.fotos && data.fotos.length > 0 ? (
        <Image
          src={data.fotos[0]}
          alt={data.nombre}
          fill
          className="object-cover relative z-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:rotate-1"
        />
      ) : (
        <div className="flex flex-col items-center gap-4 opacity-30">
          <Users size={80} className="text-slate-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sin Portafolio</span>
        </div>
      )}

      {/* Floating Badges iOS Style */}
      <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
        {data.tags.slice(0, 2).map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1.5 bg-white/30 backdrop-blur-xl text-[9px] font-black text-white rounded-full shadow-lg border border-white/20 uppercase tracking-[0.15em] transition-all hover:bg-white/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Photo Count Tooltip Glass */}
      {data.fotos && data.fotos.length > 1 && (
        <div className="absolute bottom-6 left-6 bg-black/30 backdrop-blur-xl text-white text-[9px] px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 z-20 transition-all group-hover:bg-blue-600/40">
          <Maximize2 size={12} strokeWidth={3} />
          <span className="font-black tracking-widest">{data.fotos.length} FOTOS</span>
        </div>
      )}

      {/* Action Hover Glass */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none">
        <div className="bg-white/10 backdrop-blur-2xl text-white text-[10px] font-black px-6 py-3 rounded-full border border-white/20 shadow-2xl tracking-[0.2em] uppercase transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 hover:bg-white hover:text-blue-600 pointer-events-auto">
          Explorar Perfil
        </div>
      </div>
    </div>

    {/* Content Section Premium */}
    <div className="p-8 flex-1 flex flex-col relative bg-transparent">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-none mb-1">
            {data.nombre}
          </h3>
          <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em]">
            {data.especialidad}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-400/10 rounded-xl border border-yellow-400/20 shadow-sm">
          <Star size={12} fill="#eab308" className="text-yellow-500" />
          <span className="text-[11px] font-black text-yellow-700">{data.rating}.0</span>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-6 mb-8">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-500/5 rounded-xl flex items-center justify-center border border-blue-500/10">
            <Calendar size={14} className="text-blue-500" />
          </div>
          <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">
            {data.genero}
          </span>
        </div>
        {data.altura && (
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-500/5 rounded-xl flex items-center justify-center border border-indigo-500/10">
              <MapPin size={14} className="text-indigo-500" />
            </div>
            <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">
              {data.altura}
            </span>
          </div>
        )}
      </div>

      {data.descripcion && (
        <div className="mb-8 p-4 bg-slate-500/5 rounded-2xl border border-slate-500/10 italic">
          <p className="text-xs text-slate-500 leading-relaxed">&quot;{data.descripcion}&quot;</p>
        </div>
      )}

      <div className="mt-auto pt-6 border-t border-white/40">
        <button
          onClick={() => onAdd(data)}
          disabled={isAdded}
          className={`w-full py-4 px-8 rounded-2xl font-black transition-all duration-500 flex items-center justify-center gap-3 tracking-widest uppercase text-[10px] ${
            isAdded
              ? "bg-green-500/10 text-green-600 cursor-default border border-green-500/20"
              : "bg-slate-900 text-white hover:bg-blue-600 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.5)] active:scale-[0.97] transform"
          }`}
        >
          {isAdded ? (
            <>
              <span>Seleccionada</span>
              <CheckCircle size={16} strokeWidth={3} className="animate-bounce" />
            </>
          ) : (
            <>
              <span>Añadir a Selección</span>
              <ShoppingBag size={16} strokeWidth={3} />
            </>
          )}
        </button>
      </div>
    </div>
  </div>
);

export default TalentCard;
