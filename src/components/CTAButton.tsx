"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowIcon } from './icons/ArrowIcon'

function CTAButton() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link href={""} className='flex bg-white text-black hover h-[#58] w-fit px-[20px] py-[12px] hover:text-white hover:bg-[#60519e] rounded-[100px] items-center' onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      <p className='mr-[10px]'>Try for free</p>
      <div className={`w-[32px] h-[32px] rounded-[100px] flex items-center justify-center ${isHovered ? "bg-white rotate-[-45deg]" : "bg-[#8D75E6]"}`}>
        <ArrowIcon color={isHovered ? "black" : 'white'} />
      </div>
    </Link>
  )
}

export { CTAButton }