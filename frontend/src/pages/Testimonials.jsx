import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Testimonios
          </h1>
          <p className="text-lg text-gray-600">
            Conoce las experiencias de estudiantes que han alcanzado sus objetivos
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700">Tasa de éxito en exámenes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700">Estudiantes formados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <p className="text-gray-700">Calificación promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Quieres ser el próximo en alcanzar tus objetivos?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctame para comenzar tu camino hacia la fluidez en inglés
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

export default Testimonials;
