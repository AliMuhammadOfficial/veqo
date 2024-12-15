"use client"

import FormSelectField from "@/components/dashboard/common/FormSelectField";
import FormTextField from "@/components/dashboard/common/FormTextField";
import { createProductSchema } from "@/utils/zod-schemas/createProduct";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const JoditTextEditor = dynamic(
    () => import('@/components/dashboard/common/ReactJoditEditor'),
    { ssr: false }
  )

interface ProductInfoProps {
  form: UseFormReturn<z.infer<typeof createProductSchema>>;
}

const categoriesOptions = ["Category 1", "Category 2", "Category 3"];
const genderOptions = ["Men", "Women"];
const sizesOptions = ["XS", "S", "M", "XL", "XXL", "3XL"];
const colorsOptions = ["red", "yellow", "blue", "green", "pink", "white"];

const ProductInfo = (props: ProductInfoProps) => {
  const { form } = props;
  const [includedSizes, setIncludedSizes] = useState<string[]>([]);

  const handleSizes = (size: string) => {
    const sizes = form?.getValues("sizes");
    const included = includedSizes?.includes(size);
    if (!included) {
      if (sizes) {
        const updatedSizes = [...sizes, size];
        form.setValue("sizes", updatedSizes);
        setIncludedSizes(updatedSizes as string[]);
      } else {
        form.setValue("sizes", [size]);
        setIncludedSizes([size]);
      }
    } else {
      const updatedSizes = includedSizes?.filter((s) => s !== size);
      form.setValue("sizes", updatedSizes);
      setIncludedSizes(updatedSizes as string[]);
    }
  };

  const handleColors = (color: string) => {
    const colors = form?.getValues("colors");
    const included = includedSizes?.includes(color);
    if (!included) {
      if (colors) {
        const updatedColors = [...colors, color];
        form.setValue("colors", updatedColors);
        setIncludedSizes(updatedColors as string[]);
      } else {
        form.setValue("colors", [color]);
        setIncludedSizes([color]);
      }
    } else {
      const updatedColors = includedSizes?.filter((s) => s !== color);
      form.setValue("colors", updatedColors);
      setIncludedSizes(updatedColors as string[]);
    }
  };

  const handleEditorChange = (content: string) => {
    form.setValue("description", content);
  };

  return (
    <div className="w-full h-auto py-5 bg-white rounded-xl shadow-sm mt-6">
      <div className="top border-b border-gray-300 px-5 pb-4">
        <p className="text-black">Product Information</p>
      </div>
      <div className="py-6 px-5">
        <div className="flex items-center justify-center w-full gap-6">
          <FormTextField
            type="text"
            label="Product Name"
            name="name"
            form={form}
          />

          <FormSelectField
            label="Category"
            placeholder="Select category"
            name="category"
            form={form}
            options={categoriesOptions}
          />
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          <FormTextField type="text" label="Brand" name="brand" form={form} />

          <FormTextField type="text" label="Weight" name="weight" form={form} />

          <FormSelectField
            label="Gender"
            placeholder="Select gender"
            name="gender"
            form={form}
            options={genderOptions}
          />
        </div>

        <div className="mt-8 flex items-start justify-between gap-6">
          <div className="w-[50%]">
            <p className="text-[14px] text-[var(--darkBlue-950)] font-[400] mb-4">
              Size:
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {sizesOptions?.map((size: string, index: number) => {
                const isInclude = includedSizes?.includes(size);
                console.log("isInclude ", isInclude);
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 cursor-pointer text-[14px] rounded-full flex items-center justify-center text-gray-700 ${
                      isInclude ? "bg-gray-400" : "bg-[#EEF2F7]"
                    }`}
                    onClick={() => handleSizes(size)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[50%]">
            <p className="text-[14px] text-[var(--darkBlue-950)] font-[400] mb-4">
              Colors:
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {colorsOptions?.map((color: string, index: number) => {
                const isInclude = includedSizes?.includes(color);
                console.log("isInclude ", isInclude);
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 cursor-pointer text-[14px] rounded-full flex items-center justify-center text-gray-700 ${
                      isInclude ? "bg-gray-400" : "bg-[#EEF2F7]"
                    }`}
                    onClick={() => handleColors(color)}
                  >
                    <div
                      className="w-4 h-4 rounded-full shadow-md"
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-[14px] text-[var(--darkBlue-950)] font-[400] mb-4">
            Description:
          </p>
          <JoditTextEditor
          handleEditorValue={(val: any) => handleEditorChange(val)}
          value={form.getValues("description")}
        />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
