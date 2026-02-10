import React from "react";
import { CheckCircle, Shirt, MapPin } from "lucide-react";

const Features = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir SIVCA?</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-white/50 text-center hover:bg-white/60 transition-all duration-500 transform hover:-translate-y-1">
        <div className="w-16 h-16 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Selección Rigurosa</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Todo nuestro personal pasa por casting presencial y capacitación en protocolo.
        </p>
      </div>
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-white/50 text-center hover:bg-white/60 transition-all duration-500 transform hover:-translate-y-1">
        <div className="w-16 h-16 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Shirt size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Uniformidad Impecable</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Cuidamos cada detalle del vestuario y la presencia para garantizar la mejor imagen de tu
          marca.
        </p>
      </div>
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-white/50 text-center hover:bg-white/60 transition-all duration-500 transform hover:-translate-y-1">
        <div className="w-16 h-16 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <MapPin size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Cobertura Nacional</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Disponibilidad de equipos en las principales regiones y centros de esquí.
        </p>
      </div>
    </div>
  </div>
);

export default Features;
