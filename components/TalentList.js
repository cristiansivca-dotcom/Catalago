import React, { useState, useMemo } from "react";
import { Search, Filter, RotateCcw, Star, ChevronDown } from "lucide-react";
import TalentCard from "./TalentCard";

const TalentList = ({ promotoras, cart, addToCart, onViewImage }) => {
  const [filterText, setFilterText] = useState("");
  const [activeGender, setActiveGender] = useState("Todos");
  const [activeSpecialty, setActiveSpecialty] = useState("Todas");
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique specialties from data
  const specialties = useMemo(() => {
    const specs = promotoras.map((p) => p.especialidad);
    return ["Todas", ...new Set(specs)];
  }, [promotoras]);

  const resetFilters = () => {
    setFilterText("");
    setActiveGender("Todos");
    setActiveSpecialty("Todas");
    setMinRating(0);
  };

  const displayTalents = useMemo(() => {
    return promotoras.filter((p) => {
      // Search Text Filter
      const matchesSearch =
        p.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
        p.especialidad.toLowerCase().includes(filterText.toLowerCase()) ||
        (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(filterText.toLowerCase())));

      // Gender Filter
      const matchesGender = activeGender === "Todos" || p.genero === activeGender;

      // Specialty Filter
      const matchesSpecialty = activeSpecialty === "Todas" || p.especialidad === activeSpecialty;

      // Rating Filter
      const matchesRating = p.rating >= minRating;

      return matchesSearch && matchesGender && matchesSpecialty && matchesRating;
    });
  }, [promotoras, filterText, activeGender, activeSpecialty, minRating]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="flex flex-col mb-12 animate-fade-in">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4 backdrop-blur-md">
            <span>Directorio Premium</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            Nuestros <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
              Talentos
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Filtra y descubre el perfil ideal para tu marca entre nuestro staff profesional.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Input */}
            <div className="relative group flex-1 min-w-[300px]">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search
                  className="text-slate-400 group-focus-within:text-blue-500 transition-colors"
                  size={18}
                  strokeWidth={3}
                />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre, especialidad o etiquetas..."
                className="w-full pl-12 pr-6 py-4 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-bold placeholder:text-slate-400 text-sm"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>

            {/* Toggle Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                showFilters
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              <Filter size={16} strokeWidth={3} />
              {showFilters ? "Cerrar Filtros" : "Más Filtros"}
            </button>

            {/* Reset Button */}
            {(filterText ||
              activeGender !== "Todos" ||
              activeSpecialty !== "Todas" ||
              minRating > 0) && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 px-6 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all border border-slate-200"
              >
                <RotateCcw size={16} strokeWidth={3} />
                Limpiar
              </button>
            )}
          </div>

          {/* Expanded Filters Panel */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-xl animate-fade-in-up">
              {/* Gender Select (iOS style) */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Género
                </label>
                <div className="bg-slate-200/50 p-1.5 rounded-2xl flex items-center border border-white/50 shadow-inner">
                  {["Todos", "Dama", "Caballero"].map((gender) => (
                    <button
                      key={gender}
                      onClick={() => setActiveGender(gender)}
                      className={`flex-1 py-2.5 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                        activeGender === gender
                          ? "bg-white text-blue-600 shadow-md scale-[1.02] transform"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {gender === "Todos" ? "Todos" : gender === "Dama" ? "Damas" : "Caballeros"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialty Dropdown */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Especialidad
                </label>
                <div className="relative group">
                  <select
                    value={activeSpecialty}
                    onChange={(e) => setActiveSpecialty(e.target.value)}
                    className="w-full pl-5 pr-10 py-3 bg-white/80 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    {specialties.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Calificación Mínima
                </label>
                <div className="flex items-center gap-3 bg-white/80 p-3 rounded-2xl border border-slate-200">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setMinRating(star === minRating ? 0 : star)}
                      className="transition-transform active:scale-90"
                    >
                      <Star
                        size={20}
                        fill={star <= minRating ? "#eab308" : "none"}
                        className={star <= minRating ? "text-yellow-500" : "text-slate-300"}
                      />
                    </button>
                  ))}
                  <span className="ml-auto text-[10px] font-black text-slate-400 mr-2">
                    {minRating > 0 ? `${minRating}.0+` : "Cualquiera"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grid Section with Cascade Animation */}
      <div className="min-h-[400px]">
        {displayTalents.length > 0 ? (
          <>
            <div className="flex items-center gap-2 mb-8 ml-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {displayTalents.length} Perfiles encontrados
              </p>
            </div>
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
          </>
        ) : (
          <div className="text-center py-24 bg-white/30 backdrop-blur-xl rounded-[3rem] border border-white/50 shadow-sm animate-fade-in">
            <div className="w-24 h-24 bg-white/80 rounded-full shadow-lg flex items-center justify-center mx-auto mb-8 border border-white">
              <Search size={40} className="text-slate-200" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">Sin perfiles encontrados</h4>
            <p className="text-slate-500 font-medium">Intenta ajustando tus filtros de búsqueda.</p>
            <button
              onClick={resetFilters}
              className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg"
            >
              Ver todos los talentos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TalentList;
