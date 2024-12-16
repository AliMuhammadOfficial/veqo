import { z } from "zod";

// RESIDENCE SCHEMA
export const createProductSchema = z.object({
  name: z.string({
    message: "Name is required.",
  }),
  category: z.string({
    message: "Category is required.",
  }),
  images: z.array(
    z.object({
      file: z.instanceof(File)
    })
  ).min(1, 'At least one image is required.'),
  sizes: z.array(
    z.string().optional()
  ),
  colors: z.array(
    z.string().optional()
  ),
  description: z.string().optional(),
  price: z.string({
    message: "Please enter price.",
  }),
  currency: z.string({
    message: "Please select currency.",
  }),
  // New inventory tracking fields
  inventoryDetails: z.array(
    z.object({
      size: z.string(),
      color: z.string(),
      quantity: z.number().min(0, { message: "Quantity must be non-negative" }),
      warehouse: z.string()
    })
  ).optional(),

  // Computed total stock
  stock: z.string().refine(val => !isNaN(parseInt(val)), { message: "Stock must be a number" }),
  type: z.string({
    message: "Please select type",
  })
})