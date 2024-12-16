import FormPriceInput from "@/components/dashboard/common/FormPriceInput";
import FormSelectField from "@/components/dashboard/common/FormSelectField";
import FormTextField from "@/components/dashboard/common/FormTextField";
import React, { useState } from "react";

// Warehouse location options
const warehouseOptions = [
  "Warehouse A - New York",
  "Warehouse B - Los Angeles",
  "Warehouse C - Chicago",
  "Warehouse D - Houston",
];

interface PricingAndStockProps {
  form: any;
}

const PricingAndStock = (props: PricingAndStockProps) => {
  const { form } = props;
  const [inventoryDetails, setInventoryDetails] = useState<
    {
      size: string;
      color: string;
      quantity: number;
      warehouse: string;
    }[]
  >([]);

  const handleAddInventoryEntry = () => {
    const sizes = form.getValues("sizes") || [];
    const colors = form.getValues("colors") || [];

    // If no sizes or colors are selected, prevent adding inventory
    if (sizes.length === 0 || colors.length === 0) {
      alert("Please select sizes and colors first in Product Information");
      return;
    }

    // Default to first available size and color
    const newEntry = {
      size: sizes[0],
      color: colors[0],
      quantity: 1,
      warehouse: warehouseOptions[0],
    };

    const updatedInventoryDetails = [...inventoryDetails, newEntry];
    setInventoryDetails(updatedInventoryDetails);
    form.setValue("inventoryDetails", updatedInventoryDetails);
  };

  const handleUpdateInventoryEntry = (
    index: number,
    field: string,
    value: any
  ) => {
    const updatedInventoryDetails = [...inventoryDetails];
    updatedInventoryDetails[index] = {
      ...updatedInventoryDetails[index],
      [field]: value,
    };
    setInventoryDetails(updatedInventoryDetails);
    form.setValue("inventoryDetails", updatedInventoryDetails);
  };

  const handleRemoveInventoryEntry = (index: number) => {
    const updatedInventoryDetails = inventoryDetails.filter(
      (_, i) => i !== index
    );
    setInventoryDetails(updatedInventoryDetails);
    form.setValue("inventoryDetails", updatedInventoryDetails);
  };

  return (
    <div className="w-full h-auto py-5 bg-white rounded-xl shadow-md mt-6">
      <div className="top border-b border-gray-300 px-5 pb-4">
        <p className="text-black text-xl font-bold">Pricing and Inventory</p>
      </div>
      <div className="py-6 px-5">
        <div className="flex items-center justify-center w-full gap-6">
          <FormPriceInput label="Price" name="price" form={form} />

          <FormTextField
            type="text"
            label="Total Stock"
            name="stock"
            form={form}
            readOnly
            value={inventoryDetails.reduce(
              (sum, item) => sum + item.quantity,
              0
            )}
          />
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Inventory Breakdown</h3>
            <button
              type="button"
              onClick={handleAddInventoryEntry}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-600"
            >
              Add Inventory Entry
            </button>
          </div>

          {inventoryDetails.map((entry, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 items-center mb-4 p-4 bg-gray-50 rounded"
            >
              <FormSelectField
                label="Size"
                name="size"
                options={form.getValues("sizes") || []}
                form={form}
              />
              <FormSelectField
                label="Color"
                name="color"
                options={form.getValues("colors") || []}
                form={form}
              />
              <FormTextField
                type="number"
                label="Quantity"
                name="quantity"
                form={form}
              />
              <FormSelectField
                label="Warehouse"
                options={warehouseOptions}
                name="warehouse"
                form={form}
              />
              <button
                type="button"
                onClick={() => handleRemoveInventoryEntry(index)}
                className="mt-6 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingAndStock;
