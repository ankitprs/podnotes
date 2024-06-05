import React from 'react'
import { Headline } from './Headline'
import Image from 'next/image'


interface ReviewCardType {
  meessageTitle: string,
  messageDescription: string,
  userIcon: string
}

const ReviewCard = ({ meessageTitle, messageDescription, userIcon }: ReviewCardType) => {
  return (<div className=' w-[342px] p-[30px] text-[16px] bg-white rounded-[16px] border-[#F0F0F0] border-[1px] mx-[8px] my-[8px] tracking-[1px]'>
    <p className='text-[#4A4C52]'>{messageDescription}</p>
    <div className='flex mt-[15px]'>
      <Image className=' rounded-full mr-[15px]' src={userIcon} width={50} height={50} alt='icon' />
      <p className='text-[#121212] font-semibold'>{meessageTitle}</p>
    </div>
  </div>)
}

function TrustedBy() {
  const reviews: ReviewCardType[] = [
    {
      meessageTitle: `"Necessary companion for content creation"`,
      messageDescription: "I've been an early adopter of PodNotes, let's say, from day one! The platform has constantly improved in six months, adding more features such as folders, larger upload-size files, RSS feeds, etc.  ",
      userIcon: "/images/user1.svg"
    },
    {
      meessageTitle: `"The BEST Podcast tool I've used"`,
      messageDescription: "I've been podcasting for a decade, experimenting with every conceivable tool, including expensive ones. Podnotes has effectively replaced all of them, and I am a dedicated user for life.",
      userIcon: "/images/user2.svg"
    },
    {
      meessageTitle: `"I like it 🌮🌮🌮🌮🌮"`,
      messageDescription: "I recently started using PodNotes, and I have to say, I'm impressed. This tool is an excellent alternative to Castmagic, with all the same features and a powerful AI. The UI is minimal, but the functionality is top-notch.",
      userIcon: "/images/user3.svg"
    },
    {
      meessageTitle: `"A productivity booster"`,
      messageDescription: "Podnotes has been a productivity boost for me! Cool points: you can ask the AI chat questions based on the audio it transcribes – that’s really cool",
      userIcon: "/images/user4.svg"
    },
    {
      meessageTitle: `"Already saves me a lot of time"`,
      messageDescription: "After a few days of trying it out, I can say: A simple-looking but clever and very practical tool. I use Podnotes to quickly write show notes and already love it for its good summaries, which I use for social media.",
      userIcon: "/images/user5.svg"
    },
    {
      meessageTitle: `"Awesome To The Max"`,
      messageDescription: "This is incredible - I find it's better than other AI transcribers and content producers because it is designed for the podcast. But we've expanded the use beyond that, training videos transcribed and action lists created etc. We freaking love it.",
      userIcon: "/images/user6.svg"
    },
  ]

  return (
    <div className='w-full bg-[#FDFDFB] flex justify-center pt-[100px]'>
      <div className='max-w-[1120px] my-[80px]'>
        <Headline
          className='flex flex-col items-center'
          headline='Trusted by 2000+ Customers'
          subHeading="Few loving words about us from our loyal customers"
        />
        <div className='grid grid-cols-3  my-[50px]'>
          {
            reviews.map(review => <div key={review.meessageTitle}>
              <ReviewCard meessageTitle={review.meessageTitle} messageDescription={review.messageDescription} userIcon={review.userIcon} />
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export { TrustedBy }