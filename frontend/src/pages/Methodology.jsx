import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';

const Methodology = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {mockData.methodology.title}
          </h1>
          <p className="text-lg text-gray-600">
            {mockData.methodology.description}
          </p>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {mockData.methodology.steps.map((step, index) => (
              <div key={step.step} className="relative">
                {index !== mockData.methodology.steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
                )}
                <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beneficios de Mi Metodología
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Plan 100% personalizado según tus objetivos',
              'Clases interactivas y dinámicas',
              'Material actualizado y relevante',
              'Retroalimentación constante',
              'Seguimiento de progreso detallado',
              'Flexibilidad de horarios'
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comienza con una Evaluación Personalizada
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctame para evaluar tu nivel actual y diseñar el plan perfecto para tus objetivos
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

export default Methodology;
