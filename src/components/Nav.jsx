import React from 'react'
import{BiSearch} from 'react-icons/bi'
import{BsFillPersonFill} from 'react-icons/bs'
import{AiOutlineHeart} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'

export default function Nav() {
  return (
    <>
    <div className='bg-white border-b-2 shadow-sm sticky py-4'>
      <nav className='flex space-x-10'>
        <h2 className='font-bold text-[25px] text-red-600 ml-20'>ELADOR</h2>
        <div className='flex'>
          <ul className='flex text-xs space-x-6 mt-3 '>
              <li className='font-semibold cursor-pointer'>NEW ARRIVALS</li>
              <li className='font-semibold cursor-pointer'>WOMEN</li>
              <li className='font-semibold cursor-pointer'>MEN</li>
              <li className='font-semibold cursor-pointer'>KIDS</li>
              <li className='font-semibold cursor-pointer'>BRANDS</li>
              <li className='font-semibold cursor-pointer'>LEAP7X</li>
              <button className='mb-4 text-[poppins] bg-[#e9edc9] shadow-xl text-[#030604] px-2 py-[1px] mx-4'>NITPRO</button>
          </ul>

          <div className='flex text-[22px] space-x-4 ml-[500px] list-none items-center  sm:ml-[200px] md:ml-[350px] lg:ml-[-100px] xl:ml-[150px] 2xl:ml-[500px]'>
            <BiSearch className='mt-[2px] text-[28px]'/>
            <BsFillPersonFill className='mt-[2px] text-[28px]'/>
            <AiOutlineHeart  className='text-[28px] mt-[2px]'/>
            <BsHandbag  className='mt-[2px] text-[28px]' />
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}