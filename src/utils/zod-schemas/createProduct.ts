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
  stock: z.string().optional(),
  type: z.string({
    message: "Please select type",
  })
})