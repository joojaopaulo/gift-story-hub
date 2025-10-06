import { Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/coffeecup_personalizados/", "_blank");
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5555996665991?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orçamento.",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Instagram Button */}
      <button
        onClick={handleInstagram}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-500 hover:scale-110 text-white shadow-strong transition-smooth"
        aria-label="Instagram"
      >
        <Instagram size={28} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover hover:scale-110 text-white shadow-strong transition-smooth"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default FloatingButtons;
