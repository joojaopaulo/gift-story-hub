import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-darker text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">CoffeeCup</h3>
            <p className="text-sm opacity-90">
              Presentes personalizados que contam histórias. Qualidade e criatividade em cada produto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/produtos" className="opacity-90 hover:opacity-100 transition-smooth">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="opacity-90 hover:opacity-100 transition-smooth">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="opacity-90 hover:opacity-100 transition-smooth">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="opacity-90 hover:opacity-100 transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-smooth">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-smooth">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-smooth">
                  Política de Trocas
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Phone size={16} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail size={16} />
                <span>contato@coffeecup.com.br</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-smooth">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} CoffeeCup Personalizados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
