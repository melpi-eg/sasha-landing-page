import {
  Banner,
  Navbar,
  Hero,
  KeyFeatures,
  TabsSection,
  Benfits,
  CTA,
  Faq,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <Navbar />
      <Hero />
      <KeyFeatures />
      <TabsSection />
      <Benfits />
      <CTA />
      <Faq />
      {/* <div className="h-[200px]"></div> */}
      <Footer />
    </div>
  );
}
