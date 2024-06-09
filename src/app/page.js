"use client";
import BeTheBest from "@/components/BeTheBest";
import BeforeStarted from "@/components/BeforeStarted";
import EverWonder from "@/components/EverWonder";
import Hero from "@/components/Hero";
import MeetApp from "@/components/MeetApp";
import OpenVacancies from "@/components/OpenVacancies";
import SelfImprovement from "@/components/SelfImprovement";
import SoundFamiliar from "@/components/SoundFamiliar";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <main className="px-2 sm:px-3 md:px-5 pt-[63px] sm:pt-[91px] snap-mandatory">
     <Hero />
     <SoundFamiliar />
     <MeetApp />
     <SelfImprovement />
     <BeTheBest />
     <EverWonder />
     <BeforeStarted />
     <WorkWithUs />
     <OpenVacancies />
    </main>
  )
}
