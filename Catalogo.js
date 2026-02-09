import React, { useState } from 'react';
import {
  Users,
  Shirt,
  Search,
  Filter,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  ShoppingBag,
  X,
  Menu,
  Instagram,
  Facebook,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

// --- DATOS DE EJEMPLO (MOCK DATA) ---

const PROMOTORAS = [
  {
    id: 1,
    genero: "Dama",
    nombre: "María Emilia Molina",
    altura: "",
    experiencia: "Modelo profesional 2020-2023",
    especialidad: "Modelo de pasarela y foto pose",
    rating: 5,
    foto: "pink",
    fotos: [
      "/modelos/maria.jpg",
      "/modelos/maria-2.jpg",
      "/modelos/maria-3.jpg"
    ],
    descripcion:
      "Modelo profesional egresada de la agencia y academia Show Models de Colombia (2020-2023). Especializada en pasarela, expresión corporal y foto pose. Capacitada en maquillaje profesional, estilismo, etiqueta y protocolo. Modelo impulsadora Polar de la empresa SIVCA.",
    tags: ["Modelo profesional", "Show Models"]
  },
  {
    id: 2,
    genero: "Dama",
    nombre: "Waleska Gómez",
    altura: "",
    experiencia: "Modelo profesional 2021-2024",
    especialidad: "Modelo de pasarela y foto pose",
    rating: 5,
    foto: "purple",
    fotos: [
      "/modelos/waleska.jpg",
      "/modelos/waleska-2.jpg",
      "/modelos/waleska-3.jpg"
    ],
    descripcion:
      "Modelo profesional egresada de la Academia MAGNOS (2021-2024). Formación en pasarela y foto pose. Capacitada en maquillaje profesional, etiqueta y protocolo. Modelo impulsadora Polar de la empresa SIVCA.",
    tags: ["Modelo profesional", "MAGNOS"]
  },
  {
    id: 3,
    genero: "Caballero",
    nombre: "Jonathan Garalas",
    altura: "1,85 m",
    experiencia: "Modelo comercial y animador",
    especialidad: "Modelo comercial y animador de eventos",
    rating: 5,
    foto: "blue",
    fotos: [
      "/modelos/jonathan.jpg",
      "/modelos/jonathan-2.jpg",
      "/modelos/jonathan-3.jpg"
    ],
    descripcion:
      "Modelo comercial, animador de eventos y profesor de oratoria. Embajador de marcas y creador de contenido. Imagen para Empresas Polar en comercial nacional de cervecería.",
    tags: ["Modelo comercial", "Embajador de marcas"]
  },
  {
    id: 4,
    genero: "Caballero",
    nombre: "Luis Graterol",
    altura: "1,80 m",
    experiencia: "Modelo comercial y productor audiovisual",
    especialidad: "Modelo comercial y creación de contenido",
    rating: 5,
    foto: "indigo",
    fotos: [
      "/modelos/luis.jpg",
      "/modelos/luis-2.jpg"
    ],
    descripcion:
      "Productor audiovisual y modelo especializado en modelaje comercial. Enfocado en marketing digital y creación de contenido. Imagen SIVCA en diversos eventos.",
    tags: ["Modelo comercial", "Marketing digital"]
  },
  {
    id: 5,
    genero: "Dama",
    nombre: "Litzabeth Veliz",
    altura: "1,70 m",
    experiencia: "Modelo profesional y de protocolo",
    especialidad: "Modelo de pasarela, maquillaje y protocolo",
    rating: 5,
    foto: "cyan",
    fotos: [
      "/modelos/litzabeth.jpg",
      "/modelos/litzabeth-2.jpg",
      "/modelos/litzabeth-3.jpg"
    ],
    descripcion:
      "Modelo egresada de Pro model’s vzla. Capacitada en maquillaje profesional, protocolo y etiqueta. Modelo Impulsadora polar Empresa SIVCA.",
    tags: ["Modelo profesional", "Protocolo", "SIVCA"]
  }
];

// --- COMPONENTES ---

const Navbar = ({ activeTab, setActiveTab, cartCount, toggleCart }) => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('inicio')}>
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Users size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">Catálogo <span className="text-blue-600">SIVCA</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => setActiveTab('talentos')}
            className={`font-medium transition-colors ${activeTab === 'talentos' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Staff & Modelos
          </button>
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleCart}
            className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <div className="md:hidden ml-4">
            <Menu className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = ({ setActiveTab }) => (
  <div className="relative bg-slate-900 text-white overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-90"></div>
    {/* Decorative circles */}
    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

    <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        La Imagen Perfecta para<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Tu Campaña de Invierno
        </span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
        Agencia especializada en promotoras, anfitrionas y equipos de marketing con vestuario térmico de alta gama. Eleva tu marca con elegancia y calidez.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setActiveTab('talentos')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
        >
          <Users size={20} />
          Ver Catálogo de Talentos
        </button>
      </div>
    </div>
  </div>
);

const TalentCard = ({ data, onAdd, isAdded, onViewImage }) => (
  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
    <div
      className="h-64 w-full bg-gradient-to-br from-gray-200 to-gray-300 relative flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={() => onViewImage(data)}
    >
      {/* Área para la foto del talento */}
      <div className={`absolute inset-0 bg-${data.foto}-100 opacity-50`}></div>
      {data.fotos && data.fotos.length > 0 ? (
        <React.Fragment>
          <img
            src={data.fotos[0]}
            alt={data.nombre}
            className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
          />
          {data.fotos.length > 1 && (
            <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
              <Maximize2 size={12} />
              +{data.fotos.length - 1}
            </div>
          )}
        </React.Fragment>
      ) : (
        <Users
          size={64}
          className={`text-${data.foto}-400 opacity-50 transform group-hover:scale-110 transition-transform duration-500`}
        />
      )}
      <div className="absolute bottom-3 left-3 flex gap-2">
        {data.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-white/90 backdrop-blur text-xs font-semibold text-gray-700 rounded-md shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-800">{data.nombre}</h3>
        <div className="flex items-center text-yellow-400">
          <Star size={16} fill="currentColor" />
          <span className="ml-1 text-sm font-medium text-gray-600">{data.rating}.0</span>
        </div>
      </div>

      <p className="text-blue-600 font-medium text-sm mb-4">{data.especialidad}</p>

      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={14} /> {data.genero}
        </div>
        {data.altura && (
          <div className="flex items-center gap-2">
            <MapPin size={14} /> Altura: {data.altura}
          </div>
        )}
        {data.experiencia && (
          <div className="col-span-2 flex items-center gap-2">
            <CheckCircle size={14} /> {data.experiencia}
          </div>
        )}
      </div>

      {data.descripcion && (
        <p className="text-sm text-gray-600 mb-6">{data.descripcion}</p>
      )}

      <div className="mt-auto">
        <button
          onClick={() => onAdd(data)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${isAdded
            ? 'bg-green-100 text-green-700 cursor-default'
            : 'bg-gray-900 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
            }`}
        >
          {isAdded ? (
            <>Agregada <CheckCircle size={18} /></>
          ) : (
            <>Cotizar Perfil <ShoppingBag size={18} /></>
          )}
        </button>
      </div>
    </div>
  </div>
);

const Toast = ({ message, type }) => {
  const isSuccess = type === 'success';

  return (
    <div className="fixed top-4 right-4 z-[60]">
      <div className="animate-fade-in-up">
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg bg-white border-l-4 ${isSuccess ? 'border-green-500' : 'border-blue-500'
            }`}
        >
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
              }`}
          >
            <CheckCircle size={16} />
          </div>
          <span className="text-sm text-gray-800">{message}</span>
        </div>
      </div>
    </div>
  );
};

const ImageModal = ({ images, altText, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 animate-fade-in" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 z-50 bg-white/10 rounded-full backdrop-blur-sm"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-white/20 transition-all p-3 z-50 rounded-full"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-white/20 transition-all p-3 z-50 rounded-full"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}

      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`${altText} - Foto ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
        />

        {images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto max-w-full p-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-blue-500 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- APP PRINCIPAL ---

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const whatsappNumber = '584121901044';
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addToCart = (item) => {
    const alreadyInCart = cart.find(i => i.id === item.id);

    if (!alreadyInCart) {
      setCart([...cart, item]);
      showToast(`${item.nombre} agregado a tu selección`, 'success');
    } else {
      showToast(`${item.nombre} ya está en tu selección`, 'info');
    }

    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const filteredPromoters = PROMOTORAS.filter(p =>
    p.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
    p.especialidad.toLowerCase().includes(filterText.toLowerCase())
  );

  const talentosDamas = filteredPromoters.filter(p => p.genero === "Dama");
  const talentosCaballeros = filteredPromoters.filter(p => p.genero === "Caballero");

  const handleWhatsAppQuote = () => {
    if (cart.length === 0) return;

    const baseUrl = `https://wa.me/${whatsappNumber}`;
    const lines = cart.map(item => `- ${item.nombre} (${item.genero || 'Talento'})`);
    const text =
      `Hola, me gustaría cotizar los siguientes perfiles del Catálogo SIVCA:\n` +
      `${lines.join('\n')}\n\n` +
      `Por favor envíen disponibilidad y presupuesto.`;

    const url = `${baseUrl}?text=${encodeURIComponent(text)}`;

    showToast('Abriendo WhatsApp para enviar tu solicitud...', 'info');

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }

    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.length}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      {/* Carrito Sidebar (Cotización) */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Tu Selección</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <div className="text-center text-gray-400 mt-10">
                <Users size={48} className="mx-auto mb-2 opacity-50" />
                <p>Aún no has seleccionado talentos.</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className={`w-10 h-10 rounded-full bg-${item.foto}-100 flex items-center justify-center overflow-hidden`}>
                    {item.fotos && item.fotos.length > 0 ? (
                      <img src={item.fotos[0]} alt={item.nombre} className="w-full h-full object-cover" />
                    ) : (
                      <Users size={16} className={`text-${item.foto}-500`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{item.nombre}</p>
                    <p className="text-xs text-gray-500">{item.especialidad}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                    <X size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 border-t pt-4">
            <button
              onClick={handleWhatsAppQuote}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cart.length === 0}
            >
              Cotizar por WhatsApp ({cart.length})
            </button>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main>
        {activeTab === 'inicio' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir SIVCA?</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Selección Rigurosa</h3>
                  <p className="text-gray-600">Todo nuestro personal pasa por casting presencial y capacitación en protocolo.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shirt size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Uniformidad Impecable</h3>
                  <p className="text-gray-600">Incluimos vestuario térmico "Polar" de alta calidad para mantener la imagen en invierno.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cobertura Nacional</h3>
                  <p className="text-gray-600">Disponibilidad de equipos en las principales regiones y centros de esquí.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'talentos' && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Nuestros Talentos</h2>
                <p className="text-gray-500">Selecciona los perfiles que mejor se adapten a tu marca.</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por nombre o especialidad..."
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-80"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-10">
              {talentosDamas.length > 0 && (
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Damas ({talentosDamas.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {talentosDamas.map(talento => (
                      <TalentCard
                        key={talento.id}
                        data={talento}
                        onAdd={addToCart}
                        isAdded={cart.some(item => item.id === talento.id)}
                        onViewImage={(t) => setSelectedImage(t)}
                      />
                    ))}
                  </div>
                </section>
              )}

              {talentosCaballeros.length > 0 && (
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Caballeros ({talentosCaballeros.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {talentosCaballeros.map(talento => (
                      <TalentCard
                        key={talento.id}
                        data={talento}
                        onAdd={addToCart}
                        isAdded={cart.some(item => item.id === talento.id)}
                        onViewImage={(t) => setSelectedImage(t)}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        )}

      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 text-white">
            <Users /> <span className="text-xl font-bold">Catálogo SIVCA</span>
          </div>
          <p className="mb-8 text-sm">© 2024 SIVCA Agencia. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Trabaja con nosotros</a>
          </div>
        </div>
      </footer>

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