'use client'
import React, { useState } from 'react'
import { Headline } from './Headline'
import Image from 'next/image'





function OtherFeatures() {
  const [isShareable, setIsShareable] = useState(0)
  const imageUrl = ["/images/organise_tag.svg", "/images/shareable.svg"]


  const ButtonAndFeaturePreview = ({ buttonText, isShareableVal, icon }: { buttonText: string, isShareableVal: number, icon: string }) => {
    return (
      <div className={` flex border-[1.5px] p-[12px] cursor-pointer rounded-[12px] mx-[10px] text-[16px]  ${isShareable == isShareableVal ? "border-white bg-[#865FDB]" : "border-[#8767D5] "}`} onClick={() => setIsShareable(isShareableVal)}>
        <Image className='mr-[10px]' src={icon} alt='icon' width={24} height={24} />
        {buttonText}
      </div>
    )
  }

  return (
    <div className='bg-[#7F56D9] w-full flex justify-center text-white'>
      <div className='justify-between my-[100px] w-full max-w-[1120px] flex flex-col items-center'>
        <Headline
          className='flex flex-col items-center max-w-[567px] text-center'
          headline='Other features from Podnotes'
          subHeading="Explore the features that make us your favorite"
          classNameSubText="text-[#C5B2EF]"
        />
        <div className='flex my-[50px] justify-center text-[16px]'>
          <ButtonAndFeaturePreview buttonText='Organise & Tag' isShareableVal={0} icon={"/images/tag_icon.svg"} />
          <ButtonAndFeaturePreview buttonText='Shareable Podcast Page' isShareableVal={1} icon={"/images/shareable_icon.svg"} />
        </div>
        <Image className='w-full max-w-[757px]' src={imageUrl[isShareable]} alt='icon' width={600} height={300} />
      </div>
    </div>
  )
}

export { OtherFeatures }