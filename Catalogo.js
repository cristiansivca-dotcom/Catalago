import React, { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TalentList from "./components/TalentList";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";

// Data
import PROMOTORAS from "./data/promotoras";

export default function App() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const whatsappNumber = "584121901044";
  const [toast, setToast] = useState(null);

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

    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleWhatsAppQuote = () => {
    if (cart.length === 0) return;

    const baseUrl = `https://wa.me/${whatsappNumber}`;
    const lines = cart.map((item) => `- ${item.nombre} (${item.genero || "Talento"})`);
    const text =
      `Hola, me gustaría cotizar los siguientes perfiles del Catálogo SIVCA:\n` +
      `${lines.join("\n")}\n\n` +
      `Por favor envíen disponibilidad y presupuesto.`;

    const url = `${baseUrl}?text=${encodeURIComponent(text)}`;

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
            <TalentList
              promotoras={PROMOTORAS}
              cart={cart}
              addToCart={addToCart}
              onViewImage={setSelectedImage}
            />
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
