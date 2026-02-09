import React from 'react';
import { CheckCircle, Shirt, MapPin } from 'lucide-react';

const Features = () => (
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
                <p className="text-gray-600">Cuidamos cada detalle del vestuario y la presencia para garantizar la mejor imagen de tu marca.</p>
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
);

export default Features;
