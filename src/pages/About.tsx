import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Users, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Qualidade",
      description: "Produtos de alta qualidade, cuidadosamente produzidos para durar",
    },
    {
      icon: Sparkles,
      title: "Criatividade",
      description: "Designs únicos que transformam suas ideias em realidade",
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Relacionamento transparente e suporte em cada etapa",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometidos em superar expectativas em cada entrega",
    },
  ];

  const milestones = [
    { year: "2018", title: "Início da Jornada", description: "Primeiras produções em pequena escala" },
    { year: "2020", title: "Expansão", description: "Ampliamos nossa linha de produtos" },
    { year: "2022", title: "Crescimento", description: "Mais de 5000 produtos entregues" },
    { year: "2024", title: "Hoje", description: "Referência em produtos personalizados" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-95">
            Uma jornada construída com paixão, criatividade e o desejo de tornar cada momento especial através de produtos únicos e personalizados.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Como Tudo Começou</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A CoffeeCup nasceu em 2018 de uma paixão por criar presentes únicos e significativos. Começamos com pequenas produções em nossa região, atendendo amigos e familiares que buscavam algo especial para presentear.
                </p>
                <p>
                  Com o tempo, percebemos que havia uma grande demanda por produtos personalizados de qualidade, feitos com cuidado e atenção aos detalhes. Foi assim que decidimos expandir nossas operações e oferecer nossos serviços para um público maior.
                </p>
                <p>
                  Hoje, somos referência em produtos personalizados, atendendo desde clientes individuais até empresas que buscam brindes corporativos diferenciados. Cada produto que criamos carrega nossa paixão e compromisso com a excelência.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-medium">
              <img
                src={aboutTeam}
                alt="Nossa Equipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Trajetória</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <Card className="flex-1 shadow-soft">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg opacity-95">
              Transformar momentos especiais em memórias tangíveis através de produtos personalizados de alta qualidade, oferecendo uma experiência excepcional do pedido à entrega.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
