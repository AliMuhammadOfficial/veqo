import React from 'react'

const ProductWrapper = () => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-[56px] h-[56px] rounded-xl bg-[#EEF2F7] flex items-center justify-center p-1'>
            <img src="/assets/products/shirt.png" className='w-full h-full object-contain' alt="shirt-img" />
      </div>
      <div>
        <h3 className='text-[#032D44] text-[14px] font-[600] mb-1 cursor-pointer'>Test T Shirt name</h3>
        <p className='text-gray-600 text-[12px]'>Size : S , M , L , Xl</p>
      </div>
    </div>
  )
}

export default ProductWrapper
