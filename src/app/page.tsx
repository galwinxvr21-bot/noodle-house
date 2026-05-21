import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuCategories } from "@/components/sections/MenuCategories";
import { Reviews } from "@/components/sections/Reviews";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <MenuCategories />
        <Reviews />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingOrderButton />
      <MobileBottomNav />
    </>
  );
}
