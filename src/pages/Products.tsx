import { useState, useMemo } from "react";
import { Search, Loader2 } from "lucide-react";
import ProductModal from "@/components/ProductModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/products";
import { Product } from "@/types/product";
import { useProducts } from "@/hooks/useProducts";

const Products = () => {
  const { data: products = [], isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(p => p.categoria === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.nome.toLowerCase().includes(search) ||
        p.categoria.toLowerCase().includes(search)
      );
    }

    return filtered;
  }, [products, selectedCategory, searchTerm]);

  if (error) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <p className="text-destructive text-lg mb-4">
              Erro ao carregar produtos. Tente novamente mais tarde.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Catálogo de Produtos
          </h1>
          <div className="max-w-2xl mx-auto bg-gradient-card border-2 border-primary/20 rounded-2xl p-4 shadow-soft">
            <p className="text-sm text-muted-foreground">
              Todos os itens do nosso catálogo possuem variações de cores e tipos diferentes.{" "}
              <a 
                href="https://wa.me/5555996665991?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20variações%20dos%20produtos."
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-primary/80 transition-smooth"
              >
                Entre em contato para saber mais!
              </a>
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="search"
              placeholder="O que você procura? Ex: caneca, camiseta, etc."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-smooth ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-medium" 
                    : "hover:bg-primary/10 hover:border-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-muted-foreground">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openModal(product)}
                className="cursor-pointer"
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth group">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    <img
                      src={product.imagem_url}
                      alt={product.nome}
                      className="w-full h-full object-contain p-4 transition-smooth group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                      {product.nome}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      R$ {product.preco.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              Nenhum produto encontrado.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
              }}
              variant="outline"
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Products;
