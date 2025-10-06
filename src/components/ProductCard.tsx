import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o produto: ${name}`,
      "_blank"
    );
  };

  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-medium">
      <Link to={`/produto/${id}`}>
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        {category && (
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        )}
        <Link to={`/produto/${id}`}>
          <h3 className="font-semibold text-base mt-1 mb-2 group-hover:text-primary transition-smooth">
            {name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-primary mb-3">
          R$ {price.toFixed(2)}
        </p>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/produto/${id}`}>Ver Mais</Link>
          </Button>
          <Button
            onClick={handleWhatsApp}
            className="flex-1 bg-whatsapp hover:bg-whatsapp-hover text-white"
          >
            <MessageCircle size={16} className="mr-1" />
            WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
