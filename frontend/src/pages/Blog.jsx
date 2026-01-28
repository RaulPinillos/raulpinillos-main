import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Recursos y Blog
          </h1>
          <p className="text-lg text-gray-600">
            Artículos, guías y consejos para mejorar tu inglés académico y profesional
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.blogPosts.map((post) => (
              <Card key={post.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    Leer más <ArrowRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700">
                Más contenido próximamente. ¡Mantente atento a nuevos artículos y recursos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes dudas específicas?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctame y responderé todas tus preguntas personalmente
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

export default Blog;
