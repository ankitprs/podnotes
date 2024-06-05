import Image from "next/image";
import { AssetsSection } from "@/components/AssetsSection";
import { FAQs } from "@/components/FAQs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { OtherFeatures } from "@/components/OtherFeatures";
import { Pricing } from "@/components/Pricing";
import { TrustedBy } from "@/components/TrustedBy";
import { TryFreeBar } from "@/components/TryFreeBar";


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
      <Features />
      <OtherFeatures />
      <Pricing />
      <TrustedBy />
      <FAQs />
      <TryFreeBar />
      <Footer />
    </main>
  );
}
