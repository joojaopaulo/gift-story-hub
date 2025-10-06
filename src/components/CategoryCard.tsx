import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden transition-smooth hover:shadow-medium cursor-pointer">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
        </div>
        <CardContent className="p-4 bg-gradient-card">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{title}</h3>
            <ArrowRight
              size={20}
              className="text-primary transition-smooth group-hover:translate-x-1"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
