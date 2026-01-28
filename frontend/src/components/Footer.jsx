import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RP</span>
              </div>
              <div>
                <div className="font-bold text-white">Raúl Pinillos</div>
                <div className="text-xs">Profesor de Inglés</div>
              </div>
            </div>
            <p className="text-sm">
              Más de 25 años de experiencia formando estudiantes desde nivel básico hasta académico avanzado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="hover:text-blue-400 transition-colors">
                  Metodología
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Inglés para Niños</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Inglés para Adolescentes</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Inglés Académico</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Preparación TOEFL</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Preparación IELTS</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span>{mockData.contact.whatsapp}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span>{mockData.contact.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span>{mockData.contact.location}</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href={mockData.contact.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />  
              </a>
              <a href={mockData.contact.social.instagram} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={mockData.contact.social.facebook} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Raúl Pinillos - Profesor de Inglés. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
