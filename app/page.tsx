
import {HeroSection} from "@/src/components/store/HeroSection";
import ProductGridSection from "@/src/components/store/ProductGridSection";
import {HowToStyleSection} from "@/src/components/store/LifeStyle";
import {Navbar} from "@/src/components/layout/Navbar";
import {Footer} from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Navbar />
        <HeroSection />
        <ProductGridSection/>
        <HowToStyleSection/>
        <Footer/>
      </main>
    </>
  );
}
