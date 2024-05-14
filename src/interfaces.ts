export interface Card {
    id : number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
    img: string;
}



export interface Product {
  id: string;
  title: string;
  video: string;
}

export interface Entries {
  sys: { id: string };
  fields: {
    id: string;
    video: { fields: { file: { url: string } } };
    title: string;
  };
}

export interface Products {
    id: number;
    name: string;
    price: number;
    gender: string;
    category: string;
    img: string;
    quantity: number;
    description: string;
  }

