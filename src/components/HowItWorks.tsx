import Image from 'next/image'
import React from 'react'


interface StepItemType { icon: string, stepNumber: number, title: string, description: string }

const StepItem = ({ icon, stepNumber, title, description }: StepItemType) => {
  return (
    <div className='flex flex-col text-white w-[340px]'>
      <div className='flex w-fit rounded-[40px] p-[6px] bg-[#60519e] items-center'>
        <Image src={icon} alt='icon' width={32} height={32} className=' rounded-full' />
        <p className=' mx-[6px] font-light tracking-[0.2em] text-[14px]'>Step {stepNumber}</p>
      </div>
      <p className=' text-[24px] mb-[6px] mt-[15px] '>{title}</p>
      <p className=' text-[15px] font-light'>{description}</p>
    </div>
  )
}

export function HowItWorks() {
  const steps: StepItemType[] = [
    { icon: "/images/step1.svg", stepNumber: 1, title: "Import", description: "Upload Files, Fetch RSS Feeds, Use Youtube Video Links or Paste Transcripts to import your podcasts" },
    { icon: "/images/step2.svg", stepNumber: 2, title: "Transcribe & Summarize", description: "Set Output Language, Set Output Style to Transcribe and Summarize in 19+ Langauges (see supported Languages here" },
    { icon: "/images/step3.svg", stepNumber: 3, title: "AI Content", description: "Generate Show Notes, Titles, Notes, Chapters, Social Media Posts, Nlog Posts, Newsletters and Audiograms using AI" },
  ]
  return (
    <div className='bg-[#7F56D9] w-full flex justify-center'>
      <div className='flex flex-col  justify-between my-[100px] w-full max-w-[1120px]'>
        <p className=' text-[60px] text-white font-medium'>How it works?</p>
        <div className='flex  justify-between mt-[60px] w-full max-w-[1120px]'>
          {
            steps.map(step => <div key={step.stepNumber}>
              <StepItem icon={step.icon} title={step.title} stepNumber={step.stepNumber} description={step.description} />
            </div>)
          }
        </div>
      </div >
    </div>

  )
}
