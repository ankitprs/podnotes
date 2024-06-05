import React from 'react'
import { Headline } from './Headline'
import { CTAButton } from './CTAButton'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'
import { TickIcon } from './icons/TickIcon'

interface PricingCardType {
  planName: string
  planPrice: number
  planLinkUrl: string
  duration: number,
  isHighlighted: boolean
}

const PricingCard = ({ planName, planLinkUrl, planPrice, duration, isHighlighted }: PricingCardType) => {
  const features = [`${duration} mins/mo`, "Unlimited Content", "Unlimited Audiograms", "Magic Chat"]

  return (<div className={`rounded-[15px] w-[315px] ${isHighlighted ? "bg-[#7F56D9] text-white" : "bg-[#F4F4EE]"} mx-[15px]`}>
    <div className='flex justify-end'>
      <div className={`bg-[#60519E] rounded-tr-[15px] rounded-bl-[5px] text-[12px] px-[15px] py-[7px] w-fit ${isHighlighted ? "block" : "hidden"}`}>Most Popular</div>
    </div>
    <div className='px-[25px] py-[20px]'>
      <div className=''>
        {planName}
        <div className='text-[54px]'>${planPrice} <span className='text-[17px]'>month</span></div>
      </div>
      <div className='flex flex-col my-[24px]'>
        {
          features.map(feature => <div key={feature} className='my-[5px] flex items-center'>
            <TickIcon color={isHighlighted ? "white" : "#121212"} />
            <p className='ml-[10px]'>{feature}</p>
          </div>)
        }
      </div>
      <CTAButton linkUrl={planLinkUrl} className={`w-full items-center justify-center ${isHighlighted ? "bg-white text-black" : "bg-[#60519e] text-white"}`} classNameForIcon={isHighlighted ? "" : "bg-white"} iconColor={isHighlighted ? undefined : "black"} />
    </div>
  </div>)
}

function Pricing() {
  const plans: PricingCardType[] = [
    { planName: "Starter", planPrice: 19, planLinkUrl: "https://dashboard.podnotes.app/", duration: 200, isHighlighted: false },
    { planName: "Pro", planPrice: 29, planLinkUrl: "https://dashboard.podnotes.app/", duration: 600, isHighlighted: true },
    { planName: "Agency", planPrice: 49, planLinkUrl: "https://dashboard.podnotes.app/", duration: 1200, isHighlighted: false }
  ]
  return (
    <div className='flex flex-col items-center mb-[15px] mt-[100px]'>
      <Headline className='flex flex-col items-center justify-center'
        headline='Pricing Plans'
        subHeading='You can sign up for free and get 50 min of transcription free to try out the app' />

      <div className='flex item-center my-[40px]'>
        <p>Monthly</p>
        <Switch id="airplane-mode" className='mx-[8px]' />
        <p>Yearly</p>
      </div>


      <div className='flex items-end'>
        {
          plans.map(plan => <div key={plan.planName}>
            <PricingCard planName={plan.planName} planLinkUrl={plan.planLinkUrl} planPrice={plan.planPrice} duration={plan.duration} isHighlighted={plan.isHighlighted} />
          </div>)
        }
      </div>

      <div className='flex flex-col items-center mt-[53px]'>
        <p className='text-[26px] font-semibold mb-[12px]'>{`Have a custom request? Let's chat`}</p>
        <Link className=' border-[1px] px-[22px] py-[12px] rounded-full border-black' href={""}>{`Let's  connect`}</Link>
      </div>

    </div>
  )
}

export { Pricing }