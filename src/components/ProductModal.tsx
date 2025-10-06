import { X, MessageCircle } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen || !product) return null;

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
            {/* Image */}
            <div className="aspect-square bg-secondary rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={product.imagem_url}
                alt={product.nome}
                className="w-full h-full object-contain p-4"
              />
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
