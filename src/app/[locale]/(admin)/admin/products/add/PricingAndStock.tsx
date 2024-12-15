import FormPriceInput from '@/components/dashboard/common/FormPriceInput'
import FormTextField from '@/components/dashboard/common/FormTextField'
import React from 'react'

interface PricingAndStockProps {
    form: any
}

const PricingAndStock = (props: PricingAndStockProps) => {
    const { form } = props
  return (
    <div className="w-full h-auto py-5 bg-white rounded-xl shadow-md mt-6">
      <div className="top border-b border-gray-300 px-5 pb-4">
        <p className="text-black text-xl font-bold">Product Information</p>
      </div>
      <div className="py-6 px-5">
        <div className="flex items-center justify-center w-full gap-6">
          <FormPriceInput
            label="Price"
            name="price"
            form={form}
          />

        <FormTextField
            type="text"
            label="Total Stock"
            name="stock"
            form={form}
          />
        </div>
      </div>
    </div>
  )
}

export default PricingAndStock
