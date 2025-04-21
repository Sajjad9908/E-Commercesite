import React from 'react'

const BestSellingProduct = () => {
  return (
    <>
    <section className='mt-6'>
    <div className='flex justify-between items-center ml-20 mobile:flex-wrap mobile:ml-6 '>
            <div className=' '>
            <h4 className='text-[28.8px] marcellus-regular uppercase mobile:text-center '>Best Selling Items</h4>
            </div>
            
            <div className='mr-20 mobile:mr-3 '>
                <p className='jost-medium text-[16px] group cursor-pointer hover:text-gray-600 uppercase'>view all product
                    <div className='group w-full h-[1px] bg-black text-[black] group-hover:bg-gray-400'></div>
                </p>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default BestSellingProduct