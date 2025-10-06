export interface Product {
  id: number;
  nome: string;
  categoria: string;
  imagem_url: string;
  preco: number;
}

export type ProductCategory = 
  | "Todos"
  | "Canecas e Garrafas"
  | "Vestuário e Acessórios"
  | "Decoração e Casa"
  | "Escritório e Papelaria"
  | "Ocasiões Especiais"
  | "Infantil"
  | "Pet"
  | "Tecnologia"
  | "Corporativo";
