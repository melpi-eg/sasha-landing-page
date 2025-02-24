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
    <div className="">
      <Banner />
      <Navbar />
      <Hero />
      <KeyFeatures />
      <TabsSection />
      <Benfits />
      <CTA />
      <Faq />
      <div className="h-[200px]"></div>
      <Footer />
    </div>
  );
}
