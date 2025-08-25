export interface Product {
  id?: string | undefined;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface formInputs {
  id: string;
  name: "title" | "description" | "imageUrl" | "price";
  label: string;
  type: string;
}
