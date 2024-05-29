import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex text-white h-[72px] items-center w-full'>
      <div className='flex flex-1'>
        <Image src={"/images/logo.svg"} width={40} height={40} alt='icon' />
        <div className='flex flex-col'>
          <p className='text-[18px] font-semibold'>PODNOTES</p>
          <p className='text-[10px] font-extralight'>A Wudpecker partner</p>
        </div>
      </div>
      <div className='flex-1 flex h-[72px] items-center justify-between text-[14px] '>
        <Link href={""} className='text-[#ffffff62] hover:text-white'>Product</Link>
        <Link href={""} className='text-[#ffffff62] hover:text-white'>Pricing</Link>
        <Link href={""} className='text-[#ffffff62] hover:text-white'>FAQ</Link>
        <Link href={""} className='text-[#ffffff62] hover:text-white'>Blogs</Link>
        <Link href={""} className='text-[#ffffff62] hover:text-white'>Affiliates</Link>
        <Link href={""} className=' border-[#FFFFFF] border-[1px] py-[12px] px-[24px] rounded-[100px] hover:bg-[#60519e]' > Login</Link>
      </div>
    </div>
  )
}

export default Navbar