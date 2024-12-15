"use client"

import React from "react";
import ImagesBox from "./ImagesBox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/utils/zod-schemas/createProduct";
import { Form } from "@/components/ui/form";
import ProductInfo from "./ProductInfo";

const CreateProduct = () => {
  const form = useForm<z.infer<typeof createProductSchema>>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof createProductSchema>) => {
    console.log("values ", values);
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Product</h1>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="residence-info flex flex-col h-full justify-start"
        >
          <ImagesBox form={form} />
          <ProductInfo form={form} />
        </form>
      </Form>
    </div>
  );
};

export default CreateProduct;
