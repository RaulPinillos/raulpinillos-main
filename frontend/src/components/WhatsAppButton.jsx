import React from 'react';
import { MessageCircle } from 'lucide-react';
import { mockData } from '../mock';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phone = mockData.contact.whatsapp.replace(/\s/g, '');
    const message = encodeURIComponent('Hola, estoy interesado en tomar clases de inglés. ¿Podrías darme más información?');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        ¡Escríbeme por WhatsApp!
      </span>
    </button>
  );
};

export default WhatsAppButton;
