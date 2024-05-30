import Image from 'next/image'
import React from 'react'
import { CTAButton } from './CTAButton'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <div className='bg-[#7F56D9] w-full flex justify-center'>
      <div className='max-w-[1120px] '>
        <Navbar className='bg-[#7F56D9]' />
        <div className=' bg-[#7F56D9] text-white flex sm:flex-row h-screen  py-[64px] flex-col w-full'>
          <div className='flex flex-1 justify-start w-full'>
            <div className=' flex flex-col mr-[20px] max-w-[600px]'>
              <p className='text-[74px] font-medium leading-[1.28]'>Turn podcasts into <span className='px-[24px] mx-[px] rounded-[100px] bg-[#A68AE6] text-center'>content</span> Powered by AI</p>
              <p className=' my-[30px] text-[16px] max-w-[374px] font-light'>Repurpose content from your podcasts and youtube videos and grow your audience!
              </p>

              <CTAButton />

              <p className='mt-[10px] text-[14px] font-light'>Get 50 Mins of Transcription for Free!
              </p>
            </div>
          </div>

          <div className=' flex justify-start '>
            <div className='flex flex-col items-start  max-w-[400px]'>
              <p className='text-[28px] leading-[44.8px] text-[#ECE6FA]'>Generate Transcripts, Summaries, articles, blog posts, Linkedin Posts, Tweets, Audiograms and 100+ content assets in 19+ languages effortlessly</p>
              <div className='flex my-[40px]'>
                <Image src={"/images/podcasts.svg"} alt='' width={197} height={197} className=' mr-[16px]' />
                <Image src={"/images/users.svg"} alt='' width={197} height={197} className='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroSection }