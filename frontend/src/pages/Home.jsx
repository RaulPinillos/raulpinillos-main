import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {mockData.teacher.experience} de Experiencia
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Aprende inglés desde cero hasta nivel académico avanzado
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Clases personalizadas para niños, adolescentes y adultos. Preparación especializada para <span className="font-semibold text-blue-600">TOEFL, IELTS</span> y estudios de posgrado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                    Consultar Información
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                    Ver Servicios
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-sm text-gray-700">Inglés para estudios</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-sm text-gray-700">Docencia e investigación</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-sm text-gray-700">Desarrollo profesional</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mockData.teacher.profileImage}
                  alt={mockData.teacher.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">{mockData.teacher.experience}</div>
                <div className="text-sm text-gray-600">de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Estudiantes Formados</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-sm text-gray-600">Tasa de Éxito</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-sm text-gray-600">Programas Especializados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Programas de Inglés para Cada Objetivo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde aprendizaje básico hasta preparación académica avanzada y certificaciones internacionales
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.services.slice(0, 6).map((service) => (
              <Card key={service.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button variant="link" className="text-blue-600 p-0 h-auto">
                      Ver más detalles <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comienza Tu Camino Hacia la Fluidez en Inglés
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contáctame para más información sobre mis programas y metodología
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contactar Ahora
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
