import React, { useState } from "react";
import { Search } from "lucide-react";
import TalentCard from "./TalentCard";

const TalentList = ({ promotoras, cart, addToCart, onViewImage }) => {
  const [filterText, setFilterText] = useState("");
  const [activeGender, setActiveGender] = useState("Dama");

  const filteredPromoters = promotoras.filter(
    (p) =>
      p.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
      p.especialidad.toLowerCase().includes(filterText.toLowerCase()),
  );

  const displayTalents = filteredPromoters.filter((p) => p.genero === activeGender);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-20 animate-fade-in">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4 backdrop-blur-md">
            <span>Directorio Premium</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Nuestros <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
              Talentos
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Descubre perfiles exclusivos seleccionados bajo los más altos estándares de
            profesionalismo y excelencia.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto">
          {/* iOS Segmented Control */}
          <div className="bg-gray-200/50 backdrop-blur-xl p-1 rounded-2xl flex items-center w-full md:w-80 border border-white/50 shadow-inner">
            {["Dama", "Caballero"].map((gender) => (
              <button
                key={gender}
                onClick={() => setActiveGender(gender)}
                className={`flex-1 py-3 px-6 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                  activeGender === gender
                    ? "bg-white text-blue-600 shadow-lg scale-[1.02] transform"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {gender === "Dama" ? "Damas" : "Caballeros"}
              </button>
            ))}
          </div>

          <div className="relative group w-full md:w-80">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search
                className="text-slate-400 group-focus-within:text-blue-500 transition-colors"
                size={18}
                strokeWidth={3}
              />
            </div>
            <input
              type="text"
              placeholder="Nombre o especialidad..."
              className="w-full pl-12 pr-6 py-4 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-bold placeholder:text-slate-400 text-sm"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid Section with Cascade Animation */}
      <div className="min-h-[400px]">
        {displayTalents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {displayTalents.map((talento, index) => (
              <div
                key={talento.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TalentCard
                  data={talento}
                  onAdd={addToCart}
                  isAdded={cart.some((item) => item.id === talento.id)}
                  onViewImage={onViewImage}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white/30 backdrop-blur-xl rounded-[3rem] border border-white/50 shadow-sm animate-fade-in">
            <div className="w-24 h-24 bg-white/80 rounded-full shadow-lg flex items-center justify-center mx-auto mb-8 border border-white">
              <Search size={40} className="text-slate-200" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">Sin perfiles encontrados</h4>
            <p className="text-slate-500 font-medium">Intenta ajustando tus filtros de búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TalentList;
