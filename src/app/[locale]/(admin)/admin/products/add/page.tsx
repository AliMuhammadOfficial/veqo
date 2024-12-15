/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { Upload, Trash2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid price format"),
  compareAtPrice: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid price format")
    .optional(),
  category: z.string().min(1, "Please select a category"),
  stock: z.string().regex(/^\d+$/, "Stock must be a number"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  colors: z.array(z.string()).min(1, "At least one color is required"),
  sizes: z.array(z.string()).optional(),
  sku: z.string().min(1, "SKU is required"),
  brand: z.string().min(1, "Brand is required"),
  tags: z.array(z.string()).optional(),
  weight: z.string().optional(),
  dimensions: z
    .object({
      length: z.string(),
      width: z.string(),
      height: z.string(),
    })
    .optional(),
  isPublished: z.boolean().default(false),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  variations: z
    .array(
      z.object({
        color: z.string(),
        size: z.string(),
        price: z.string(),
        stock: z.string(),
        sku: z.string(),
      })
    )
    .optional(),
});

export default function AddProductPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      compareAtPrice: "",
      category: "",
      stock: "",
      images: [],
      colors: [],
      sizes: [],
      sku: "",
      brand: "",
      tags: [],
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      isPublished: false,
      metaTitle: "",
      metaDescription: "",
      variations: [],
    },
  });

  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files) {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages([...images, ...urls]);
    }
  }

  function removeImage(index: number) {
    setImages(images.filter((_, i) => i !== index));
  }

  async function onSubmit(data: any) {
    console.log(data);
    toast({
      title: "Product",
    });
    router.push("/admin/products");
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <FormProvider {...form}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Add New Product</h1>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="isPublished"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel>Published</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter product name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter product description"
                                  className="min-h-[150px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Media Section */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Media</h3>
                      <div className="border-2 border-dashed rounded-lg p-4">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label
                          htmlFor="image-upload"
                          className="flex flex-col items-center justify-center cursor-pointer p-8"
                        >
                          <Upload className="w-12 h-12 mb-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            Drop images here or click to upload
                          </span>
                        </label>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`Product ${index + 1}`}
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 p-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Variations Section */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Product Attributes
                      </h3>
                      <div className="space-y-6">
                        {/* Color Attributes */}
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h4 className="text-sm font-medium">Colors</h4>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const colors = form.getValues("colors") || [];
                                form.setValue("colors", [...colors, ""]);
                              }}
                            >
                              Add Color
                            </Button>
                          </div>
                          {form.watch("colors")?.map((_, index) => (
                            <div key={index} className="flex gap-2">
                              <FormField
                                control={form.control}
                                name={`colors.${index}`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input
                                        placeholder="Enter color name"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="text-red-500"
                                onClick={() => {
                                  const colors = form.getValues("colors");
                                  form.setValue(
                                    "colors",
                                    colors.filter((_, i) => i !== index)
                                  );
                                }}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>

                        {/* Size Attributes */}
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h4 className="text-sm font-medium">Sizes</h4>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const sizes = form.getValues("sizes") || [];
                                form.setValue("sizes", [...sizes, ""]);
                              }}
                            >
                              Add Size
                            </Button>
                          </div>
                          {form.watch("sizes")?.map((_, index) => (
                            <div key={index} className="flex gap-2">
                              <FormField
                                control={form.control}
                                name={`sizes.${index}`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input
                                        placeholder="Enter size value"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="text-red-500"
                                onClick={() => {
                                  const sizes = form.getValues("sizes");
                                  form.setValue(
                                    "sizes",
                                    (sizes ?? []).filter((_, i) => i !== index)
                                  );
                                }}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>

                        {/* Generate Variations */}
                        <div className="pt-4 border-t">
                          <Button
                            type="button"
                            onClick={() => {
                              const colors = form.getValues("colors") || [];
                              const sizes = form.getValues("sizes") || [];
                              const variations = colors.flatMap((color) =>
                                sizes.map((size) => ({
                                  color,
                                  size,
                                  price: "",
                                  stock: "",
                                  sku: "",
                                }))
                              );
                              form.setValue("variations", variations);
                            }}
                          >
                            Generate Variations
                          </Button>
                        </div>

                        {/* Variations Table */}
                        {(form.watch("variations") || []).length > 0 && (
                          <div className="mt-6">
                            <h4 className="text-sm font-medium mb-4">
                              Product Variations
                            </h4>
                            <div className="space-y-4">
                              {form
                                .watch("variations")
                                ?.map((variation, index) => (
                                  <div
                                    key={index}
                                    className="p-4 border rounded-lg bg-gray-50 space-y-4"
                                  >
                                    <div className="flex justify-between items-center">
                                      <h5 className="font-medium">
                                        {variation.color} - {variation.size}
                                      </h5>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                      <FormField
                                        control={form.control}
                                        name={`variations.${index}.price`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                              <Input
                                                type="number"
                                                step="0.01"
                                                placeholder="0.00"
                                                {...field}
                                              />
                                            </FormControl>
                                          </FormItem>
                                        )}
                                      />
                                      <FormField
                                        control={form.control}
                                        name={`variations.${index}.stock`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>Stock</FormLabel>
                                            <FormControl>
                                              <Input
                                                type="number"
                                                placeholder="0"
                                                {...field}
                                              />
                                            </FormControl>
                                          </FormItem>
                                        )}
                                      />
                                      <FormField
                                        control={form.control}
                                        name={`variations.${index}.sku`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>SKU</FormLabel>
                                            <FormControl>
                                              <Input
                                                placeholder="SKU"
                                                {...field}
                                              />
                                            </FormControl>
                                          </FormItem>
                                        )}
                                      />
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Pricing</h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="compareAtPrice"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Compare at price</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Organization Card */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Organization
                      </h3>
                      <div className="space-y-4">
                        {/* Add category, brand, tags fields here */}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Inventory Card */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Inventory</h3>
                      <div className="space-y-4">
                        {/* Add SKU, stock, weight, dimensions fields here */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button type="submit">Create Product</Button>
              </div>
            </form>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}
