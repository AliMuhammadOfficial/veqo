interface ProductFeature {
  icon: React.ReactNode;
  text: string;
}

interface ProductVariant {
  id: string;
  name?: string;
  color?: string;
  size?: string;
  stock: number;
  price?: number;
}

interface PackItem {
  id: string;
  name: string;
  selectedVariant?: ProductVariant;
  variants: ProductVariant[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  features: ProductFeature[];
  isPack: boolean;
  packItems?: PackItem[];
  variants?: ProductVariant[];
  price: number;
}
