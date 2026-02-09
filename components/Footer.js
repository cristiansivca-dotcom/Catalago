import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-gray-300 pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-auto">
                                <img
                                    src="/logos/logo_sivca.png"
                                    alt="SIVCA Logo"
                                    className="h-full object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">SIVCA</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Agencia líder en Venezuela especializada en talento profesional, protocolo BTL y eventos corporativos de alto nivel. Elevamos la imagen de tu marca con excelencia.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/sivcavenezuela/" className="p-2 bg-white/5 hover:bg-blue-600 rounded-lg transition-all text-white border border-white/10">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/sivcavenezuela/" className="p-2 bg-white/5 hover:bg-blue-600 rounded-lg transition-all text-white border border-white/10">
                                <Facebook size={20} />
                            </a>
                            <a href="mailto:ysanchez.sivca@gmail.com" className="p-2 bg-white/5 hover:bg-blue-600 rounded-lg transition-all text-white border border-white/10">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navegación</h4>
                        <ul className="space-y-4">
                            {['Inicio', 'Staff & Modelos'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                                        <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="text-white font-medium">WhatsApp</p>
                                    <p className="text-gray-400">+58 412-1901044</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="text-white font-medium">Email</p>
                                    <p className="text-gray-400">ysanchez.sivca@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="text-white font-medium">Oficina</p>
                                    <p className="text-gray-400">Falcon, Venezuela</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tag Column / Extras */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Ofrecemos</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Modelos', 'BTL', 'Protocolo', 'Eventos', 'Imagen Corporativa', 'Promociones'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 p-4 bg-blue-600/10 border border-blue-600/20 rounded-xl">
                            <p className="text-xs text-blue-400 font-medium mb-1">¿Buscas empleo?</p>
                            <a href="https://sivca.com.ve/#contact" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-bold flex items-center gap-1 hover:underline">
                                ¡Únete a nuestro Staff! <Globe size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500 ">
                        © {currentYear} SIVCA Servicios Integrales de Venezuela C.A. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
