export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export type ProductField = {
  id: string;
  title: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
