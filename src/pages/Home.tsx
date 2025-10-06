import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { CheckCircle2, Clock, CreditCard, Heart } from "lucide-react";

import heroBanner from "@/assets/hero-banner.jpg";
import categoryMugs from "@/assets/category-mugs.jpg";
import categoryTshirts from "@/assets/category-tshirts.jpg";
import categoryFrames from "@/assets/category-frames.jpg";
import categoryCorporate from "@/assets/category-corporate.jpg";
import categorySpecial from "@/assets/category-special.jpg";

const Home = () => {
  const categories = [
    { title: "Canecas", image: categoryMugs, link: "/produtos?categoria=canecas" },
    { title: "Camisetas", image: categoryTshirts, link: "/produtos?categoria=camisetas" },
    { title: "Quadros", image: categoryFrames, link: "/produtos?categoria=quadros" },
    { title: "Kits Corporativos", image: categoryCorporate, link: "/produtos?categoria=corporativo" },
    { title: "Datas Especiais", image: categorySpecial, link: "/produtos?categoria=especiais" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Designs Exclusivos",
      description: "Criações únicas e personalizadas para cada cliente",
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Produção ágil sem comprometer a qualidade",
    },
    {
      icon: CreditCard,
      title: "Pagamento Fácil",
      description: "Pix, Cartão ou Boleto - você escolhe",
    },
    {
      icon: CheckCircle2,
      title: "Clientes Felizes",
      description: "Mais de 5000 produtos entregues com sucesso",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Caneca Personalizada com Foto",
      price: 45.90,
      image: categoryMugs,
      category: "Canecas",
    },
    {
      id: "2",
      name: "Camiseta Premium Personalizada",
      price: 79.90,
      image: categoryTshirts,
      category: "Camisetas",
    },
    {
      id: "3",
      name: "Quadro Decorativo Personalizado",
      price: 89.90,
      image: categoryFrames,
      category: "Quadros",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Adorei a caneca personalizada! A qualidade superou minhas expectativas.",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "Entrega rápida e produto exatamente como mostrado. Recomendo!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Perfeito para presente! A pessoa amou. Voltarei a comprar com certeza.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Produtos Personalizados"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-darker/85 to-purple-dark/50" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Presentes Personalizados<br />que Contam Histórias
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Transforme momentos especiais em produtos únicos. Qualidade, criatividade e carinho em cada detalhe.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/produtos">Explorar Produtos</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Categorias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher a CoffeeCup?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            <Button asChild variant="outline">
              <Link to="/produtos">Ver Todos</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-bright text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/depoimentos">Ver Mais Depoimentos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Criar Algo Especial?</h2>
          <p className="text-lg mb-8 opacity-95">
            Entre em contato e transforme suas ideias em realidade
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contato">Fale Conosco</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
