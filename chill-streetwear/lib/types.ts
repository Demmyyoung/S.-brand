export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiImage {
  id: number;
  attributes: {
    url: string;
    alternativeText: string;
    formats?: {
      thumbnail?: StrapiImageFormat;
      small?: StrapiImageFormat;
      medium?: StrapiImageFormat;
      large?: StrapiImageFormat;
    };
  };
}

export interface ProductAttributes {
  name: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  images: {
    data: StrapiImage[];
  };
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface CartItem {
  id: number; // Product ID
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}
