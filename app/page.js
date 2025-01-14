import HomeBenefits from "@/components/About"
import BrandsLogo from "@/components/BrandsLogo";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import HomeFeatures from "@/components/HomeFeatures/HomeFeatures";
import ServiceStats from "@/components/ServiceStats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Hero/>
      <BrandsLogo/>
      <ServiceStats/>
      <HomeBenefits/>
      <HomeFeatures/>
    </main>
  );
}
