import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  whatsapp: z.string()
    .trim()
    .min(1, "WhatsApp é obrigatório")
    .regex(/^[\d\s()+-]+$/, "WhatsApp deve conter apenas números e caracteres válidos")
    .max(20, "WhatsApp deve ter no máximo 20 caracteres"),
  email: z.string()
    .trim()
    .email("Email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(1, "Mensagem é obrigatória")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = contactFormSchema.safeParse(formData);
    
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    const validatedData = validation.data;
    
    // Safely encode data for WhatsApp URL
    const encodedName = encodeURIComponent(validatedData.name);
    const encodedMessage = encodeURIComponent(validatedData.message);
    const encodedWhatsapp = encodeURIComponent(validatedData.whatsapp);
    const encodedEmail = validatedData.email ? encodeURIComponent(validatedData.email) : "";
    
    // Construct WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${encodedName}.%0A%0A${encodedMessage}%0A%0AContato: ${encodedWhatsapp}${encodedEmail ? `%0AEmail: ${encodedEmail}` : ""}`;
    window.open(`https://wa.me/5555996665991?text=${whatsappMessage}`, "_blank");
    
    toast.success("Mensagem enviada! Aguarde nosso contato.");
    
    // Reset form
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      message: "",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5555996665991?text=Olá! Gostaria de mais informações.", "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 99666-5991",
      action: "tel:+5555996665991",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@coffeecup.com.br",
      action: "mailto:contato@coffeecup.com.br",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      action: null,
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco através do formulário ou WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-medium">
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-soft bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-center">Fale Conosco Diretamente</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white mb-4"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Abrir WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Resposta imediata em horário comercial
                  </p>
                </CardContent>
              </Card>

              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-base">Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a
                      href="https://www.instagram.com/coffeecup_personalizados/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-smooth"
                    >
                      <span className="font-medium">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-smooth"
                    >
                      <span className="font-medium">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-smooth"
                    >
                      <span className="font-medium">TikTok</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
