import React from 'react'
import { CiHeart } from "react-icons/ci";

const OurNewArrival = () => {
  return (
    <>
    <section className='mt-20 '>
        <div className='flex justify-between items-center ml-20 mobile:flex-wrap mobile:ml-6 '>
            <div className=' '>
            <h4 className='text-[28.8px] marcellus-regular uppercase mobile:text-center '>Our New Arrivals</h4>
            </div>
            
            <div className='mr-20 mobile:mr-3 '>
                <p className='jost-medium text-[16px] group cursor-pointer hover:text-gray-600 uppercase'>view all product
                    <div className='group w-full h-[1px] bg-black text-[black] group-hover:bg-gray-400'></div>
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center mt-5 gap-6 flex-wrap' >
            <div className=' w-[350px] mobile:w-[100%] relative group peer'>
              <img  className='hover:transition-transform hover:duration-300 hover:scale-95 '  src='https://themewagon.github.io/kaira/images/product-item-1.jpg'/>
              <div className='text-center hidden group-hover:flex group-hover:justify-center group-hover:items-center group-hover:absolute group-hover:bg-white group-hover:w-9 group-hover:h-9 group-hover:top-4 group-hover:right-4 border-r-2 group-hover:transition-transform group-hover:duration-300 '><CiHeart className='text-[26px] text-center font-bold' />
              </div>
              <div className='mobile:text-center'>
              <h2 className='uppercase marcellus-regular text-[20px] mt-3 '>Dark Flourish OnePiece</h2>
              <p className='uppercase jost-medium text-[20px] scale-100 mt-1 group-hover:scale-0'>$95.00</p>
              <p className='jost-medium text-[16px] mt-1 bottom-[-700%] scale-0 group-hover:transform 
              group-hover:scale-100 group-hover:-translate-y-7 group-hover:transition-all group-hover:duration-700 cursor-pointer'>Add To Cart</p>
              
              </div>
            </div>
            
            <div className='w-[350px] mobile:w-[100%] relative group'>
              <img className='hover:transition-transform hover:duration-300 hover:scale-95' src='	https://themewagon.github.io/kaira/images/product-item-2.jpg'/>
              <div className='text-center hidden group-hover:flex group-hover:justify-center group-hover:items-center group-hover:absolute group-hover:bg-white group-hover:w-9 group-hover:h-9 group-hover:top-4 group-hover:right-4 border-r-2 group-hover:transition-transform group-hover:duration-300 '><CiHeart className='text-[26px] text-center font-bold' /></div>
              <div className='mobile:text-center'>
              <h2 className='uppercase marcellus-regular text-[20px] mt-3 '>Dark Flourish OnePiece</h2>
              <p className='uppercase jost-medium text-[20px] scale-100 mt-1 group-hover:scale-0'>$95.00</p>
              <p className='jost-medium text-[16px] mt-1 bottom-[-700%] scale-0 group-hover:transform 
              group-hover:scale-100 group-hover:-translate-y-7 group-hover:transition-all group-hover:duration-700 cursor-pointer'>Add To Cart</p>
              
              </div>
            </div>
            <div className='w-[350px] mobile:w-[100%] relative group'>
              <img className='hover:transition-transform hover:duration-300 hover:scale-95' src='	https://themewagon.github.io/kaira/images/product-item-3.jpg'/>
              <div className='text-center hidden group-hover:flex group-hover:justify-center group-hover:items-center group-hover:absolute group-hover:bg-white group-hover:w-9 group-hover:h-9 group-hover:top-4 group-hover:right-4 border-r-2 group-hover:transition-transform group-hover:duration-300 '><CiHeart className='text-[26px] text-center font-bold' /></div>
              <div className='mobile:text-center'>
              <h2 className='uppercase marcellus-regular text-[20px] mt-3 '>Dark Flourish OnePiece</h2>
              <p className='uppercase jost-medium text-[20px] scale-100 mt-1 group-hover:scale-0'>$95.00</p>
              <p className='jost-medium text-[16px] mt-1 bottom-[-700%] scale-0 group-hover:transform 
              group-hover:scale-100 group-hover:-translate-y-7 group-hover:transition-all group-hover:duration-700 cursor-pointer'>Add To Cart</p>
              
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurNewArrival