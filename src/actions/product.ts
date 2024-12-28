"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { createProductSchema } from "@/utils/zod-schemas/createProduct";

type ProductInput = z.infer<typeof createProductSchema>;

export async function createProduct(input: ProductInput) {
  try {
    // Validate input
    const validatedData = createProductSchema.parse(input);

    // Create product
    const product = await prisma.product.create({
      data: {
        ...validatedData,
        createdAt: new Date(),
        updatedAt: new Date(),
        images: {
          create: validatedData.images,
        },
        attributes: {
          create: validatedData.attributes,
        },
        defaultAttributes: {
          create: validatedData.defaultAttributes,
        },
        variations: {
          create: validatedData.variations,
        },
      },
    });

    // Revalidate product pages
    revalidatePath("/products");
    revalidatePath(`/products/${product.id}`);

    return { success: true, data: product };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    return {
      success: false,
      error: "Failed to create product. Please try again.",
    };
  }
}

export async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      attributes: true,
      defaultAttributes: true,
      variations: true,
    },
  });

  return products;
}
