export enum ProductType {
  Simple = "simple",
  Grouped = "grouped",
  External = "external",
  Variable = "variable",
}

export enum Status {
  Draft = "draft",
  Pending = "pending",
  Private = "private",
  Publish = "publish",
}

export enum CatalogVisibility {
  Visible = "visible",
  Catalog = "catalog",
  Search = "search",
  Hidden = "hidden",
}

export enum TaxStatus {
  Taxable = "taxable",
  Shipping = "shipping",
  None = "none",
}

export enum StockStatus {
  InStock = "instock",
  OutOfStock = "outofstock",
  OnBackorder = "onbackorder",
}

export enum BackOrderStatus {
  No = "no",
  Notify = "notify",
  Yes = "yes",
}

export interface Dimensions {
  length: string;
  width: string;
  height: string;
}

export interface Image {
  id: string;
  src: string;
  alt: string;
}

export interface Attribute {
  id: string;
  name: string;
  values: string[];
}

export interface DefaultAttribute {
  id: string;
  name: string;
  option: string;
}

export interface Variation {
  id: string;
  attributes: DefaultAttribute[];
}

export interface IProduct {
  name: string;
  slug: string;
  permalink?: string;
  type?: ProductType;
  status?: Status;
  featured: boolean;
  catalogVisibility?: CatalogVisibility;
  description?: string;
  shortDescription?: string;
  sku: string;
  price?: string;
  regularPrice: string;
  salePrice?: string;
  dateOnSaleFrom?: Date;
  dateOnSaleTo?: Date;
  onSale?: boolean;
  purchasable?: boolean;
  totalSales?: number;
  virtual?: boolean;
  downloadable: boolean;
  downloads?: any;
  downloadLimit: number;
  downloadExpiry: number;
  externalUrl?: string;
  buttonText?: string;
  taxStatus: TaxStatus;
  taxClass?: string;
  manageStock: boolean;
  stockQuantity?: number;
  stockStatus: StockStatus;
  backorders: BackOrderStatus;
  backordersAllowed?: boolean;
  backordered?: boolean;
  soldIndividually: boolean;
  weight?: string;
  dimensions?: Dimensions;
  shippingRequired: boolean;
  shippingTaxable?: boolean;
  shippingClass?: string;
  shippingClassId?: number;
  reviewsAllowed: boolean;
  averageRating: string;
  ratingCount: number;
  relatedIds?: number[];
  upsellIds?: number[];
  crossSellIds?: number[];
  parentId?: number;
  purchaseNote?: string;
  categoryIDs: string[];
  tagIDs: string[];
  images: Image[];
  attributes: Attribute[];
  defaultAttributes: DefaultAttribute[];
  variations: Variation[];
  groupedProducts: number[];
  metaData: any[];
}
