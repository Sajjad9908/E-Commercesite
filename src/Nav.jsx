import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Nav = () => {
  return (
    <>
    <nav className='bg-[#f5f5f5] border-b-2'>
      <div className='flex justify-items-center pt-2 relative'>
        <div className='ml-16 mobile:ml-[0.4rem] '>
          <h1 className=' relative text-left group top-2 font-bold marcellus-regular text-[32px] tablet:top-0 mobile:top-0' >KAIRA
          
          </h1>

        </div>
        <div>
        <input className='hidden peer' type='checkbox' id='toggle-btn'/>
        <label htmlFor='toggle-btn'className='hidden max-933:flex relative top-[15px] left-[274px] mobile:left-[181px]'><AiOutlineMenuUnfold  size={22}/></label>
       
        <ul className='flex justify-between gap-9 justify-items-center ml-10 p-6 max-933:flex-col max-933:absolute max-933:top-20 max-933:w-[100%] max-933:h-[100vh] max-933:text-center max-933:left-[-1700px] max-933:gap-0 max-933:p-0 max-933:ml-0 max-933:bg-[#f5f5f5] peer-checked:max-933:left-0 peer-checked:max-933:transition-all  peer-checked:max-933:duration-200 peer-checked:max-933:pt-3 '>
          <li className='text-[16px] px-2 cursor-pointer transition-colors duration-200 hover:text-[#39c651] font-semibold marcellus-regular  '> Home

          </li>
          <li className='  marcellus-regular px-2 cursor-pointer  transition-colors duration-200 hover:text-[#39c651]'>About</li>
          <li  className= '  marcellus-regular px-2 cursor-pointer transition-colors duration-200 hover:text-[#39c651]'>Services</li>
          <li className='  marcellus-regular px-2 cursor-pointer transition-colors duration-200 hover:text-[#39c651]'>Portfolio</li>
          <li className='  marcellus-regular px-2 cursor-pointer transition-colors duration-200 hover:text-[#39c651]'>Blog</li>
          <li className='  marcellus-regular px-2 cursor-pointer transition-colors duration-200 hover:text-[#39c651]'>Pricing</li>
          <li className='  marcellus-regular px-2 cursor-pointer transition-colors duration-200 hover:text-[#39c651]'>Contact</li>
        </ul>
        </div>
        <div className='flex items-center justify-between   gap-4 ml-[4rem] mobile:ml-0 laptop:ml-0 laptop:absolute laptop:right-0 laptop:top-8 '>
        <li className='list-none cursor-pointer hover:text-[#39c651]'>Whishlist(0)</li>
        <li className='list-none cursor-pointer hover:text-[#39c651]'>Cart(0)</li>

        </div>

      </div>
    </nav>

    </>
  )
}

export default Nav