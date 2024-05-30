import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar({ className = "" }) {
  const navigationOptions = [
    { name: "Product", link: "" },
    { name: "Pricing", link: "" },
    { name: "FAQ", link: "" },
    { name: "Blogs", link: "" },
    { name: "Affiliates", link: "" },
  ]
  return (
    <div className={`flex text-white h-[72px] items-center w-full ${className}`}>
      <div className='flex flex-1'>
        <Image src={"/images/logo.svg"} width={40} height={40} alt='icon' />
        <div className='flex flex-col'>
          <p className='text-[18px] font-semibold'>PODNOTES</p>
          <p className='text-[10px] font-extralight'>A Wudpecker partner</p>
        </div>
      </div>
      <div className='flex-1 flex h-[72px] items-center justify-between text-[14px] '>
        {
          navigationOptions.map(option => <Link href={""} key={option.name} className='text-[#ffffff62] hover:text-white'>{option.name}</Link>)
        }
        <Link href={""} className=' border-[#FFFFFF] border-[1px] flex items-center  px-[24px] h-[42px] rounded-[100px] hover:bg-[#60519e]' > Login</Link>
      </div>
    </div>
  )
}

export default Navbar