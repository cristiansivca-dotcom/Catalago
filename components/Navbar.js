import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, Menu } from "lucide-react";

const Navbar = ({ activeTab, setActiveTab, cartCount, toggleCart }) => {
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
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-white ${
        scrolled ? "shadow-lg h-16" : "shadow-sm h-20"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Area */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab("inicio")}
          >
            <div
              className={`relative transition-all duration-300 ${scrolled ? "h-8 w-24" : "h-10 w-32"}`}
            >
              <Image
                src="/logos/logo_sivca.png"
                alt="SIVCA Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold tracking-tight text-xl text-gray-900">
              Catálogo <span className="text-blue-500 font-extrabold">SIVCA</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {["inicio", "talentos"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-1 font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab === "inicio" ? "INICIO" : "STAFF & MODELOS"}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-all border border-transparent"
            >
              <ShoppingBag size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-black text-white bg-blue-600 rounded-full shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
