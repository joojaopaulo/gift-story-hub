import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os produtos personalizados.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-strong transition-smooth hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
