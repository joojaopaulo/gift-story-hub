import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ShoppingCart, Truck, Shield, ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";

import categoryMugs from "@/assets/category-mugs.jpg";
import categoryTshirts from "@/assets/category-tshirts.jpg";
import categoryFrames from "@/assets/category-frames.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity] = useState(1);

  // Mock product data
  const product = {
    id: id || "1",
    name: "Caneca Personalizada com Foto",
    price: 45.90,
    image: categoryMugs,
    description: "Caneca de cerâmica de alta qualidade, perfeita para presentear ou usar no dia a dia. Personalize com suas fotos favoritas e crie um presente único e especial.",
    details: [
      "Material: Cerâmica de alta qualidade",
      "Capacidade: 325ml",
      "Impressão em alta definição",
      "Pode ir ao microondas",
      "Lavável na máquina de lavar louças",
      "Dimensões: 9,5cm (altura) x 8cm (diâmetro)",
    ],
    customization: "Envie sua foto em alta resolução (mínimo 1000x1000px) após a compra via WhatsApp. Nossa equipe fará um preview antes da produção.",
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Caneca Mágica Térmica",
      price: 55.90,
      image: categoryMugs,
      category: "Canecas",
    },
    {
      id: "3",
      name: "Camiseta Premium Personalizada",
      price: 79.90,
      image: categoryTshirts,
      category: "Camisetas",
    },
    {
      id: "5",
      name: "Quadro Decorativo Personalizado",
      price: 89.90,
      image: categoryFrames,
      category: "Quadros",
    },
  ];

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/5511999999999?text=Olá! Gostaria de encomendar: ${product.name} (${quantity}x)`,
      "_blank"
    );
  };

  const features = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "5-7 dias úteis",
    },
    {
      icon: Shield,
      title: "Garantia",
      description: "30 dias",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm">
            <Link to="/produtos">
              <ChevronLeft size={16} className="mr-1" />
              Voltar aos Produtos
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-4xl font-bold text-primary mb-6">
              R$ {product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                onClick={handleWhatsApp}
                className="flex-1 bg-whatsapp hover:bg-whatsapp-hover text-white"
                size="lg"
              >
                <MessageCircle size={20} className="mr-2" />
                Pedir no WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <ShoppingCart size={20} className="mr-2" />
                Adicionar ao Carrinho
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <feature.icon className="text-primary w-8 h-8" />
                    <div>
                      <p className="font-semibold text-sm">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h2 className="font-semibold text-lg mb-3">Detalhes do Produto</h2>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Customization */}
            <div className="border-t mt-6 pt-6">
              <h2 className="font-semibold text-lg mb-3">Personalização</h2>
              <p className="text-sm text-muted-foreground">{product.customization}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
