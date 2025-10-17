export interface Product {
  id: string | number;
  nome: string;
  categoria: string;
  imagem_url: string;
  preco: number;
  descricao?: string;
  created_at?: string;
  updated_at?: string;
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
