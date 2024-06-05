import React from 'react'
import { ArrowIcon } from './icons/ArrowIcon'

export function TryFreeBar() {
  const counter = [1, 2, 3, 4]

  return (
    <div className='w-screen overflow-x-scroll'>

      <div className='w-[2145px] h-[146px] bg-[#7F56D9] flex justify-center items-center overflow-hidden overflow-x-auto'>
        {
          counter.map((cout) => <div key={cout} className='mx-[30px] flex items-center'>
            <p className='text-[76px] font-medium'>Try for Free</p>
            <div className={`ml-[26px] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white  rotate-[-45deg] hover:rotate-[0deg] duration-100 cursor-pointer`}>
              <ArrowIcon color="black" height={36} width={36} />
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
