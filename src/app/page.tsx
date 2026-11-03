import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TechExpertise } from "@/components/sections/TechExpertise";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutTeaser />
      <TechExpertise />
      <ClosingCTA />
    </>
  );
}
