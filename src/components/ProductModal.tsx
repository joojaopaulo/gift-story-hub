import { useState } from "react";
import { X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useProductImages } from "@/hooks/useProductImages";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { data: productImages } = useProductImages(product?.id || "");
  
  if (!isOpen || !product) return null;

  // Combine main image with additional images
  const allImages = [
    product.imagem_url,
    ...(productImages?.map(img => img.image_url) || [])
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de encomendar: ${product.nome} - R$ ${product.preco.toFixed(2)}`;
    window.open(
      `https://wa.me/5555996665991?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-background rounded-2xl shadow-strong max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-secondary transition-smooth"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Carousel */}
            <div className="relative">
              <div className="aspect-square bg-secondary rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={allImages[currentImageIndex]}
                  alt={`${product.nome} - Imagem ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              {allImages.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-primary w-4"
                            : "bg-primary/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                {product.categoria}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {product.nome}
              </h2>
              <p className="text-3xl font-bold text-primary mb-6">
                R$ {product.preco.toFixed(2)}
              </p>

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Encomendar no WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Todos os itens possuem variações de cores e tipos diferentes.
                  <br />
                  <strong>Entre em contato para saber mais!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
