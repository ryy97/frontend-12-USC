export interface CartData {
  price: number;
  discount: number;
  quantity: number;
  id: number;
  selectedProductColor: string;
  selectedProductSize: string;
  name: string;
  image: Array<string>;
}

export interface Currency {
  currencyRate: number;
  currencySymbol: string;
}

export interface JsonData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
  textAlign?: string;
  price?: number;
  textColor?: string;
}
