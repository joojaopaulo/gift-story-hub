import { Product } from "@/types/product";

// Dados migrados do sistema PHP original
export const allProducts: Product[] = [
  // Canecas e Garrafas
  { id: 13, nome: "Caneca de Cerâmica Branca", categoria: "Canecas e Garrafas", imagem_url: "/placeholder.svg", preco: 25.90 },
  { id: 14, nome: "Caneca Mágica (Revela Imagem)", categoria: "Canecas e Garrafas", imagem_url: "/placeholder.svg", preco: 45.00 },
  { id: 30, nome: "Caneca de Chopp Vidro Jateado", categoria: "Canecas e Garrafas", imagem_url: "/placeholder.svg", preco: 48.00 },
  { id: 15, nome: "Squeeze de Alumínio 500ml", categoria: "Canecas e Garrafas", imagem_url: "/placeholder.svg", preco: 35.50 },
  { id: 26, nome: "Copo Térmico (tipo Stanley)", categoria: "Canecas e Garrafas", imagem_url: "/placeholder.svg", preco: 89.90 },

  // Vestuário e Acessórios
  { id: 8, nome: "Camiseta Poliéster Branca", categoria: "Vestuário e Acessórios", imagem_url: "/placeholder.svg", preco: 49.99 },
  { id: 9, nome: "Body de Bebê Personalizado", categoria: "Vestuário e Acessórios", imagem_url: "/placeholder.svg", preco: 38.00 },
  { id: 10, nome: "Chinelos Personalizados", categoria: "Vestuário e Acessórios", imagem_url: "/placeholder.svg", preco: 32.00 },
  { id: 31, nome: "Camiseta de Algodão", categoria: "Vestuário e Acessórios", imagem_url: "/placeholder.svg", preco: 79.90 },

  // Decoração e Casa
  { id: 1, nome: "Azulejo Personalizado 15x15", categoria: "Decoração e Casa", imagem_url: "/placeholder.svg", preco: 28.00 },
  { id: 2, nome: "Quadro MDF 20x30cm", categoria: "Decoração e Casa", imagem_url: "/placeholder.svg", preco: 45.00 },
  { id: 28, nome: "Luminária LED 3D", categoria: "Decoração e Casa", imagem_url: "/placeholder.svg", preco: 120.00 },
  { id: 3, nome: "Almofada Personalizada 40x40", categoria: "Decoração e Casa", imagem_url: "/placeholder.svg", preco: 55.00 },
  { id: 29, nome: "Porta-Retrato MDF 15x21", categoria: "Decoração e Casa", imagem_url: "/placeholder.svg", preco: 35.00 },

  // Escritório e Papelaria
  { id: 16, nome: "Caneta Plástica Colorida", categoria: "Escritório e Papelaria", imagem_url: "/placeholder.svg", preco: 8.50 },
  { id: 17, nome: "Agenda 2024 Personalizada", categoria: "Escritório e Papelaria", imagem_url: "/placeholder.svg", preco: 42.00 },
  { id: 18, nome: "Mouse Pad Retangular", categoria: "Escritório e Papelaria", imagem_url: "/placeholder.svg", preco: 18.00 },
  { id: 19, nome: "Caderno Capa Dura A5", categoria: "Escritório e Papelaria", imagem_url: "/placeholder.svg", preco: 32.00 },
  { id: 20, nome: "Bloco de Notas Adesivas", categoria: "Escritório e Papelaria", imagem_url: "/placeholder.svg", preco: 15.00 },

  // Ocasiões Especiais
  { id: 4, nome: "Convite de Casamento", categoria: "Ocasiões Especiais", imagem_url: "/placeholder.svg", preco: 3.50 },
  { id: 5, nome: "Tag de Aniversário", categoria: "Ocasiões Especiais", imagem_url: "/placeholder.svg", preco: 2.00 },
  { id: 6, nome: "Embalagem Personalizada", categoria: "Ocasiões Especiais", imagem_url: "/placeholder.svg", preco: 5.00 },
  { id: 7, nome: "Caixa Surpresa Personalizada", categoria: "Ocasiões Especiais", imagem_url: "/placeholder.svg", preco: 80.00 },

  // Infantil
  { id: 21, nome: "Mochila Infantil Personalizada", categoria: "Infantil", imagem_url: "/placeholder.svg", preco: 65.00 },
  { id: 22, nome: "Estojo Escolar", categoria: "Infantil", imagem_url: "/placeholder.svg", preco: 28.00 },
  { id: 23, nome: "Lancheira Térmica", categoria: "Infantil", imagem_url: "/placeholder.svg", preco: 48.00 },

  // Pet
  { id: 24, nome: "Coleira Personalizada", categoria: "Pet", imagem_url: "/placeholder.svg", preco: 32.00 },
  { id: 32, nome: "Comedouro Personalizado", categoria: "Pet", imagem_url: "/placeholder.svg", preco: 45.00 },

  // Tecnologia
  { id: 33, nome: "Carregador Portátil 10.000mAh", categoria: "Tecnologia", imagem_url: "/placeholder.svg", preco: 95.00 },
  { id: 34, nome: "Pop Socket Personalizado", categoria: "Tecnologia", imagem_url: "/placeholder.svg", preco: 18.00 },
  { id: 35, nome: "Suporte para Celular", categoria: "Tecnologia", imagem_url: "/placeholder.svg", preco: 25.00 },

  // Corporativo
  { id: 36, nome: "Kit Corporativo Básico", categoria: "Corporativo", imagem_url: "/placeholder.svg", preco: 120.00 },
  { id: 37, nome: "Kit Corporativo Premium", categoria: "Corporativo", imagem_url: "/placeholder.svg", preco: 180.00 },
  { id: 38, nome: "Brinde Empresarial Personalizado", categoria: "Corporativo", imagem_url: "/placeholder.svg", preco: 35.00 },
];

export const categories: string[] = [
  "Todos",
  "Canecas e Garrafas",
  "Vestuário e Acessórios",
  "Decoração e Casa",
  "Escritório e Papelaria",
  "Ocasiões Especiais",
  "Infantil",
  "Pet",
  "Tecnologia",
  "Corporativo",
];
