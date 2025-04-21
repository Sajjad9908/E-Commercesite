import React from 'react'
import { GoGift } from "react-icons/go";
import { TiArrowSync } from "react-icons/ti";
import { TbDeviceAirpodsCase } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Booking = () => {
  return (
   <>
   <div className='flex justify-center items-center mt-14 gap-4 flex-wrap'>
    <div className='w-[15rem] text-center p-2 '>
    <TbDeviceAirpodsCase className='block m-auto ' size={40} color='gray'/>
    <h1 className='marcellus-regular text-[28.8px] mt-4 '>Book an Appointed</h1>
    <p className='jost-medium text-[18px] text-[#8F8F8F] mt-4'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
    </div>
    <div className='w-[15rem] text-center p-2 '>
    <HiOutlineShoppingBag className='block m-auto ' size={40} color='gray'/>
    <h1 className='marcellus-regular text-[28.8px] mt-4 '>Pick Up In Store</h1>
    <p className='jost-medium text-[18px] text-[#8F8F8F] mt-4'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
    </div>
    <div className='w-[15rem] text-center p-2 '>
    <GoGift className='block m-auto ' size={40} color='gray'/>
    <h1 className='marcellus-regular text-[28.8px] mt-4 '>Special Packaging</h1>
    <p className='jost-medium text-[18px] text-[#8F8F8F] mt-4'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
    </div>
    <div className='w-[15rem] text-center p-2 '>
    <TiArrowSync className='block m-auto ' size={40} color='gray'/>
    <h1 className='marcellus-regular text-[28.8px] mt-4  '>Free Global Returns</h1>
    <p className='jost-medium text-[18px] text-[#8F8F8F] mt-4'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
    </div>


   </div>
   </>
  )
}

export default Booking