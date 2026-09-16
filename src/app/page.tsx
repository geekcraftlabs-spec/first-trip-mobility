import { TopBar } from "@/components/TopBar";
import { WaypointRail } from "@/components/WaypointRail";
import { MobileDock } from "@/components/MobileDock";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { Operations } from "@/components/Operations";
import { FleetStandard } from "@/components/FleetStandard";
import { Cities } from "@/components/Cities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <WaypointRail />
      <MobileDock />

      <main>
        <Hero />
        <StatsBand />
        <Operations />
        <FleetStandard />
        <Cities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}