export type CtaStatPair = {
  num: number;
  text: string;
};

export type FooterLinks = {
  colTitle: string;
  links: string[];
};

export type Category = {
  slug: string;
  name: string;
  url: string;
};

export type CategoryRoute = {
  data: {
    slug: string;
  };
};

export type ProductRoute = {
  data: {
    productId: string;
  };
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type StoredProduct = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type SortOrder = {
  order: 'asc' | 'desc';
};

export type Brand = {
  id: number;
  brand?: string;
};

export type BrandsResponse = {
  products: Brand[];
  total: number;
  skip: number;
  limit: number;
};

export type CartAddResponse = {
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
  products: Product[];
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export type SweetAlert = {
  title?: string;
  text?: string;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  timer?: number;
  showConfirmButton?: boolean;
};
