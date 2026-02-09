import React from 'react';
import { Users, ChevronRight, Star } from 'lucide-react';

const Hero = ({ setActiveTab }) => (
    <div className="relative bg-slate-900 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40"></div>

        {/* Animated Blobs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
                        <Star size={14} fill="currentColor" />
                        <span>Agencia Líder en Protocolo & BTL</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        Elevamos la <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                            Imagen de Tu Marca
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                        SIVCA conecta tu empresa con el talento más profesional. Especialistas en modelos de protocolo, anfitrionas y equipos de promoción para eventos de alto impacto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            onClick={() => setActiveTab('talentos')}
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 transform hover:-translate-y-1"
                        >
                            <Users size={20} />
                            Ver Catálogo
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => window.open('https://wa.me/584121901044', '_blank')}
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm flex items-center justify-center"
                        >
                            Contáctanos
                        </button>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex items-center gap-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-blue-500/50"></div>
                            <span>Protocolo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-cyan-500/50"></div>
                            <span>Eventos Corporativos</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block relative">
                    {/* Abstract visual element or placeholder for a hero image */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm p-4 transform rotate-2 hover:rotate-0 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                        <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 relative">
                            <img
                                src="/modelos/waleska.jpg"
                                alt="Modelo SIVCA"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-bold text-xl">Staff Profesional</p>
                                <p className="text-blue-300 text-sm">Calidad garantizada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
