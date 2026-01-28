import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'general', label: 'Inglés General' },
    { id: 'academic', label: 'Académico' },
    { id: 'exams', label: 'Exámenes' }
  ];

  const getServiceCategory = (serviceId) => {
    if (serviceId <= 3) return 'general';
    if (serviceId === 4) return 'academic';
    return 'exams';
  };

  const filteredServices = selectedCategory === 'all'
    ? mockData.services
    : mockData.services.filter(s => getServiceCategory(s.id) === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Programas de Inglés
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Servicios especializados desde nivel básico hasta preparación académica avanzada y certificaciones internacionales
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={selectedCategory === cat.id ? 'bg-blue-600 hover:bg-blue-700' : 'border-gray-300 hover:border-blue-600'}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="border border-gray-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {getServiceCategory(service.id) === 'general' ? 'General' :
                       getServiceCategory(service.id) === 'academic' ? 'Académico' : 'Examen'}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.ages && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users size={16} className="text-blue-600" />
                        <span><strong>Edades:</strong> {service.ages}</span>
                      </div>
                    )}
                    {service.duration && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock size={16} className="text-blue-600" />
                        <span><strong>Duración:</strong> {service.duration}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿No estás seguro qué programa elegir?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctame y te ayudaré a identificar el programa perfecto para ti
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Consultar Información
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
