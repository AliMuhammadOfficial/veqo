export const exampleProduct = {
  name: "Example Product",
  slug: "example-product",
  featured: false,
  sku: "SKU-001",
  regularPrice: "99.99",
  downloadable: false,
  downloadLimit: -1,
  downloadExpiry: -1,
  taxStatus: "taxable" as const,
  manageStock: false,
  stockStatus: "instock" as const,
  backorders: "no" as const,
  soldIndividually: true,
  shippingRequired: true,
  reviewsAllowed: true,
  averageRating: "NA",
  ratingCount: 0,

  // Optional fields with defaults
  type: "simple",
  status: "publish",
  catalogVisibility: "visible",
  price: "99.99",
  salePrice: "89.99",
  description: "Product description",
  shortDescription: "Short description",

  // Related entities
  categoryIDs: [], // Add MongoDB ObjectIds
  tagIDs: [], // Add MongoDB ObjectIds
  images: [],
  attributes: [],
  defaultAttributes: [],
  variations: [],
  groupedProducts: [],
  metaData: [],
};
