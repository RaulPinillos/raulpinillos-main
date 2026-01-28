import React from 'react';
import { CheckCircle, Award, BookOpen, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Sobre Mí
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {mockData.teacher.bio}
              </p>
              <div className="space-y-3">
                {mockData.teacher.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={mockData.teacher.teachingImage}
                alt={`${mockData.teacher.name} enseñando`}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Formación y Credenciales
            </h2>
            <p className="text-lg text-gray-600">
              Respaldado por formación sólida y certificaciones internacionales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.teacher.education.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-blue-600" size={24} />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mi Filosofía de Enseñanza
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enfoque Personalizado</h3>
              <p className="text-gray-600">
                Cada estudiante es único. Adapto mi metodología según las necesidades, nivel y objetivos específicos de cada persona.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aprendizaje Práctico</h3>
              <p className="text-gray-600">
                Más allá de la teoría, enfoco las clases en aplicaciones reales del idioma para situaciones académicas, profesionales y cotidianas.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-blue-600 rounded-xl p-8 text-center">
            <p className="text-xl text-white font-medium mb-6">
              "No solo enseño inglés, te preparo para alcanzar tus objetivos académicos y profesionales."
            </p>
            <p className="text-blue-100">— {mockData.teacher.name}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctame para conocer más sobre mis programas y cómo puedo ayudarte
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contactar
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
