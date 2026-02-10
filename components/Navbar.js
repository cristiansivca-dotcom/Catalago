import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, Menu, ExternalLink } from "lucide-react";

const Navbar = ({ activeTab, setActiveTab, cartCount, toggleCart, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.05)] h-16 border-b border-gray-200/50"
          : "bg-white/50 backdrop-blur-sm h-20 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Area */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab("inicio")}
          >
            <div
              className={`relative transition-all duration-500 scale-95 group-hover:scale-100 ${
                scrolled ? "h-8 w-24" : "h-10 w-32"
              }`}
            >
              <Image
                src="/logos/logo_sivca.png"
                alt="SIVCA Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-black tracking-tight text-xl text-gray-900">Catálogo</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600">
                SIVCA VENEZUELA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["inicio", "talentos"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-1 font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-500 group ${
                  activeTab === tab ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab === "inicio" ? "INICIO" : "STAFF & MODELOS"}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-500 ${
                    activeTab === tab ? "w-full" : "w-0 group-hover:w-1/2"
                  }`}
                ></span>
              </button>
            ))}
            <a
              href="https://www.sivca.com.ve"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 rounded-full font-bold text-[11px] tracking-[0.1em] uppercase bg-gray-900/5 hover:bg-blue-600 hover:text-white text-gray-700 transition-all duration-500"
            >
              SIVCA.COM.VE
              <ExternalLink size={12} strokeWidth={3} />
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {activeTab !== "inicio" && (
              <button
                onClick={toggleCart}
                className={`relative p-2.5 rounded-full transition-all duration-500 border ${
                  scrolled
                    ? "bg-blue-600 text-white border-transparent shadow-lg shadow-blue-200"
                    : "bg-white/50 text-gray-700 border-gray-200/50 hover:bg-white hover:shadow-md"
                }`}
              >
                <ShoppingBag size={20} strokeWidth={2.5} />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[20px] h-[20px] text-[10px] font-black rounded-full shadow-sm ${
                      scrolled ? "bg-white text-blue-600" : "bg-blue-600 text-white"
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 text-gray-900 bg-gray-100/50 rounded-2xl hover:bg-gray-100 transition-all active:scale-90 border border-transparent hover:border-gray-200"
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
