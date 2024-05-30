import React from 'react'
import { Headline } from './Headline'
import Image from 'next/image'


interface AssetItemType {
  icon: string, title: string, subTitle: string
}

const AssetCard = ({ icon, title, subTitle }: AssetItemType) => {
  return (
    <div className='flex flex-col my-[30px] max-w-[283px]'>
      <div className='bg-[#60519e] flex items-center justify-center h-[40px] w-[40px] rounded-[6px]'>
        <Image src={icon} alt='icon' width={24} height={24} />
      </div>
      <p className='text-[20px] font-semibold mt-[20px] mb-[8px]'>{title}</p>
      <p className='text-[#4A4C52] font-light text-[17px]'>{subTitle}</p>
    </div>
  )
}


function AssetsSection() {
  const assets: AssetItemType[] = [
    { icon: "/images/transcript.svg", title: "Transcript", subTitle: "Get transcript for your podcast and even edit your transcripts" },
    { icon: "/images/summaries.svg", title: "Summaries", subTitle: "Generated Customizable Summaries for your podcasts and youtube videos" },
    { icon: "/images/note.svg", title: "Show Notes", subTitle: "Well-written show notes created for you to improve SEO presence of your podcast" },
    { icon: "/images/title_headline.svg", title: "Titles, Headlines & Chapters", subTitle: "Generate Tiles, Headlines, Descriptions and Chapters for your Podcasts & Videos" },
    { icon: "/images/social.svg", title: "Social Media Content", subTitle: "Generate High Quality Blogs, Articles, Tweets, Newsletters and grow your podcast across social media channels" },
    { icon: "/images/blogs.svg", title: "Blogs & Newsletters", subTitle: "Stay ahead of competitors by leveraging data-driven insights." },
  ]
  return (
    <div className='max-w-[1120px] my-[80px]'>
      <Headline
        className='flex flex-col items-start'
        headline='100+ Assets within mins using AI'
        subHeading='Generate 100s of High-Quality  Content Assets from your Podcasts and Youtube Videos within seconds powered by the best AI Models '
      />
      <div className='grid grid-cols-3 my-[50px]'>
        {
          assets.map(asset => <div key={asset.title}>
            <AssetCard icon={asset.icon} title={asset.title} subTitle={asset.subTitle} />
          </div>)
        }
      </div>
    </div>
  )
}

export { AssetsSection }