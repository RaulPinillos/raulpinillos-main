import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mapeo de campos a español para el cuerpo del correo
    const object = {
      access_key: "b6e4a6cc-a744-4fd1-961e-2125502c0c49",
      "Nombre del Cliente": formData.name, // El nombre de la propiedad será la etiqueta en el email
      "Correo Electrónico": formData.email,
      "Asunto del Mensaje": formData.subject,
      "Contenido del Mensaje": formData.message,
      subject: `Nuevo Contacto Web: ${formData.subject}`, // Este es el asunto del email que recibes
      from_name: formData.name, // Aparecerá como remitente en tu bandeja
    };

    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Error al procesar el envío. Inténtalo de nuevo.');
      }
    } catch (error) {
      toast.error('Error de conexión con el servidor de correo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contáctame
          </h1>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna pregunta? Estoy aquí para ayudarte
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Escribe tu nombre"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="tu@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="¿Sobre qué quieres consultar?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Escribe tu mensaje aquí..."
                      rows={6}
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">WhatsApp</p>
                      <p className="text-sm text-gray-600">{mockData.contact.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email</p>
                      <p className="text-sm text-gray-600">{mockData.contact.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;