import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import categoryMugs from "@/assets/category-mugs.jpg";
import categoryTshirts from "@/assets/category-tshirts.jpg";
import categoryFrames from "@/assets/category-frames.jpg";
import categoryCorporate from "@/assets/category-corporate.jpg";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("categoria");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("all");

  const categories = [
    { id: "canecas", label: "Canecas" },
    { id: "camisetas", label: "Camisetas" },
    { id: "quadros", label: "Quadros" },
    { id: "corporativo", label: "Corporativo" },
    { id: "especiais", label: "Datas Especiais" },
  ];

  const occasions = [
    { id: "presente", label: "Presente" },
    { id: "corporativo", label: "Corporativo" },
    { id: "aniversario", label: "Aniversário" },
    { id: "casamento", label: "Casamento" },
  ];

  const priceRanges = [
    { id: "all", label: "Todos os Preços" },
    { id: "0-50", label: "Até R$ 50" },
    { id: "50-100", label: "R$ 50 - R$ 100" },
    { id: "100+", label: "Acima de R$ 100" },
  ];

  // Mock products
  const allProducts = [
    {
      id: "1",
      name: "Caneca Personalizada com Foto",
      price: 45.90,
      image: categoryMugs,
      category: "canecas",
    },
    {
      id: "2",
      name: "Caneca Mágica Térmica",
      price: 55.90,
      image: categoryMugs,
      category: "canecas",
    },
    {
      id: "3",
      name: "Camiseta Premium Personalizada",
      price: 79.90,
      image: categoryTshirts,
      category: "camisetas",
    },
    {
      id: "4",
      name: "Camiseta Básica com Estampa",
      price: 59.90,
      image: categoryTshirts,
      category: "camisetas",
    },
    {
      id: "5",
      name: "Quadro Decorativo Personalizado",
      price: 89.90,
      image: categoryFrames,
      category: "quadros",
    },
    {
      id: "6",
      name: "Kit Corporativo Premium",
      price: 149.90,
      image: categoryCorporate,
      category: "corporativo",
    },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleOccasionToggle = (occasionId: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occasionId)
        ? prev.filter((o) => o !== occasionId)
        : [...prev, occasionId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedOccasions([]);
    setPriceRange("all");
  };

  // Filter products based on selections
  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map((v) => (v === "+" ? Infinity : parseInt(v)));
      if (product.price < min || product.price > max) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Nossos Produtos</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Filtros
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    Limpar
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Categoria</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => handleCategoryToggle(category.id)}
                        />
                        <Label htmlFor={category.id} className="cursor-pointer">
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Occasions */}
                <div>
                  <h3 className="font-semibold mb-3">Ocasião</h3>
                  <div className="space-y-2">
                    {occasions.map((occasion) => (
                      <div key={occasion.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={occasion.id}
                          checked={selectedOccasions.includes(occasion.id)}
                          onCheckedChange={() => handleOccasionToggle(occasion.id)}
                        />
                        <Label htmlFor={occasion.id} className="cursor-pointer">
                          {occasion.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Preço</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={range.id}
                          checked={priceRange === range.id}
                          onCheckedChange={() => setPriceRange(range.id)}
                        />
                        <Label htmlFor={range.id} className="cursor-pointer">
                          {range.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
