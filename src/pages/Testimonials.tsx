import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente",
      rating: 5,
      text: "Adorei a caneca personalizada! A qualidade superou minhas expectativas. O atendimento foi excelente e a entrega muito rápida. Com certeza voltarei a comprar!",
      date: "Janeiro 2024",
    },
    {
      name: "João Santos",
      role: "Empresário",
      rating: 5,
      text: "Comprei kits corporativos para minha empresa e ficamos muito satisfeitos. Produtos de qualidade e que realmente impressionam. Recomendo!",
      date: "Fevereiro 2024",
    },
    {
      name: "Ana Costa",
      role: "Cliente",
      rating: 5,
      text: "Perfeito para presente! A pessoa amou a camiseta personalizada. O processo de personalização foi muito fácil e o resultado ficou incrível.",
      date: "Março 2024",
    },
    {
      name: "Carlos Oliveira",
      role: "Designer",
      rating: 5,
      text: "Trabalho com design e fiquei impressionado com a qualidade da impressão. As cores ficaram vibrantes e fiéis ao arquivo que enviei. Parabéns!",
      date: "Abril 2024",
    },
    {
      name: "Juliana Ferreira",
      role: "Cliente",
      rating: 5,
      text: "Comprei um quadro personalizado para minha sala e ficou maravilhoso! A qualidade do material é excelente e o acabamento impecável.",
      date: "Maio 2024",
    },
    {
      name: "Roberto Lima",
      role: "Gerente de RH",
      rating: 5,
      text: "Fizemos uma parceria para brindes corporativos e não poderia estar mais satisfeito. Atendimento personalizado e produtos de alta qualidade.",
      date: "Junho 2024",
    },
    {
      name: "Fernanda Rocha",
      role: "Cliente",
      rating: 5,
      text: "Fiz um pedido especial para um aniversário e a equipe foi super atenciosa. O produto chegou no prazo e ficou exatamente como eu imaginava!",
      date: "Julho 2024",
    },
    {
      name: "Pedro Alves",
      role: "Cliente",
      rating: 5,
      text: "Primeira vez comprando produtos personalizados e a experiência foi excelente. Desde o atendimento até a entrega, tudo perfeito!",
      date: "Agosto 2024",
    },
    {
      name: "Mariana Souza",
      role: "Empresária",
      rating: 5,
      text: "Produtos de qualidade excepcional! Já fiz vários pedidos e sempre superam minhas expectativas. Muito obrigada pelo carinho e dedicação!",
      date: "Setembro 2024",
    },
  ];

  const stats = [
    { number: "5000+", label: "Produtos Entregues" },
    { number: "98%", label: "Satisfação" },
    { number: "4.9", label: "Avaliação Média" },
    { number: "500+", label: "Clientes Corporativos" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-purple text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Depoimentos</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-95">
            Veja o que nossos clientes têm a dizer sobre nossos produtos e serviços.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-bright text-yellow-bright" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Seja Nosso Próximo Cliente Satisfeito</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes que já transformaram momentos especiais em memórias com nossos produtos personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/produtos"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Ver Produtos
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
