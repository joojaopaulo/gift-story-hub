import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, User, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Depoimentos", href: "/depoimentos" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsApp = () => {
    window.open("https://wa.me/5555996665991?text=Olá! Gostaria de saber mais sobre os produtos personalizados.", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="CoffeeCup Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={handleWhatsApp}
              className="items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Button>
            
            {user ? (
              <>
                {isAdmin && (
                  <Button
                    asChild
                    variant="outline"
                    className="items-center gap-2"
                  >
                    <Link to="/admin">
                      <Shield size={18} />
                      Admin
                    </Link>
                  </Button>
                )}
                <Button
                  onClick={signOut}
                  variant="outline"
                  className="items-center gap-2"
                >
                  <LogOut size={18} />
                  Sair
                </Button>
              </>
            ) : (
              <Button
                asChild
                variant="outline"
                className="items-center gap-2"
              >
                <Link to="/auth">
                  <User size={18} />
                  Login
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                handleWhatsApp();
                setIsMenuOpen(false);
              }}
              className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white"
            >
              <MessageCircle size={18} className="mr-2" />
              WhatsApp
            </Button>
            
            {user ? (
              <>
                {isAdmin && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/admin">
                      <Shield size={18} className="mr-2" />
                      Admin
                    </Link>
                  </Button>
                )}
                <Button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  <LogOut size={18} className="mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <Button
                asChild
                variant="outline"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/auth">
                  <User size={18} className="mr-2" />
                  Login
                </Link>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
