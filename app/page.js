import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import BannerCta from "./components/BannerCta";
import PromoPoints from "./components/PromoPoints";
import Tagline from "./components/Tagline";

export default function Home() {
  return (
    
    <div>
      <main className="">
        <HeroSection/>
        <Services/>
        <BannerCta/>
        <PromoPoints/>
        <Tagline/>
        
      </main>
    </div>
  );
}
