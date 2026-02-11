import React, { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TalentList from "./components/TalentList";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";
import CartSidebar from "./components/CartSidebar";
import MobileMenu from "./components/MobileMenu";
import Toast from "./components/Toast";

// Data
import { supabase } from "./lib/supabaseClient";

export default function App() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [promotoras, setPromotoras] = useState([]);
  const [loading, setLoading] = useState(true);

  const whatsappNumber = "584121901044";
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchPromotoras();
  }, []);

  const fetchPromotoras = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("talents")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching promotoras:", error);
        showToast("Error al cargar los talentos", "error");
      } else {
        setPromotoras(data || []);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      showToast("Error inesperado", "error");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addToCart = (item) => {
    const alreadyInCart = cart.find((i) => i.id === item.id);

    if (!alreadyInCart) {
      setCart([...cart, item]);
      showToast(`${item.nombre} agregado a tu selección`, "success");
    } else {
      showToast(`${item.nombre} ya está en tu selección`, "info");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleWhatsAppQuote = (customMessage) => {
    if (cart.length === 0) return;

    const baseUrl = `https://wa.me/${whatsappNumber}`;
    const lines = cart.map((item) => `- ${item.nombre} (${item.genero || "Talento"})`);
    const defaultText =
      `Hola, me gustaría cotizar los siguientes perfiles del Catálogo SIVCA:\n` +
      `${lines.join("\n")}\n\n` +
      `Por favor envíen disponibilidad y presupuesto.`;

    const textToUse = customMessage || defaultText;
    const url = `${baseUrl}?text=${encodeURIComponent(textToUse)}`;

    showToast("Abriendo WhatsApp para enviar tu solicitud...", "info");

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }

    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-gray-900 selection:bg-blue-500 selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.length}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        onQuote={handleWhatsAppQuote}
      />

      {/* 
          Standard padding-top (pt-20) applied to the entire main container. 
          This ensures the fixed Navbar (h-20) never covers Hero or TalentList content.
      */}
      <main className="pt-20 min-h-screen">
        {activeTab === "inicio" && (
          <div className="animate-fade-in">
            <Hero setActiveTab={setActiveTab} />
            <div className="bg-white">
              <Features />
            </div>
          </div>
        )}

        {activeTab === "talentos" && (
          <div className="py-12 animate-fade-in">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <TalentList
                promotoras={promotoras}
                cart={cart}
                addToCart={addToCart}
                onViewImage={setSelectedImage}
              />
            )}
          </div>
        )}
      </main>

      <Footer />

      {toast && <Toast message={toast.message} type={toast.type} />}

      {selectedImage && (
        <ImageModal
          images={selectedImage.fotos}
          altText={selectedImage.nombre}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
