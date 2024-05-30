import { AssetsSection } from "@/components/AssetsSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import Image from "next/image";


export default function Home() {
  return (
    <main className=" w-screen  flex flex-col items-center">
      <HeroSection />
      <div className=' flex flex-col items-center'>
        <p className='my-[46px] text-[24px] font-semibold '>Trusted by 1000+ Podcasters & Content Creators</p>
        <Image src={"/images/hero.svg"} alt='hero image' width={100} height={100} className='w-full' />
      </div>
      <HowItWorks />
      <AssetsSection />
    </main>
  );
}
