import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import {
  SignatureStrip,
  About,
  Highlights,
  Services,
  Academy,
  FAQ,
  ClosingBanner,
} from "@/components/sections";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { EditorialQuotes, SiteMotion } from "@/components/editorial";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        דילוג לתוכן
      </a>
      <Header />
      <SiteMotion />
      <main id="main">
        <Hero />
        <SignatureStrip />
        <Gallery />
        <Highlights />
        <About />
        <Academy />
        <Services />
        <EditorialQuotes />
        <FAQ />
        <ClosingBanner />
      </main>
      <Footer />
    </>
  );
}
