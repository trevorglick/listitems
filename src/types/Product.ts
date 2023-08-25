type Rating = {
  rate: number;
  price: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
};
