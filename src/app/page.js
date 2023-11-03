"use client";
import BeTheBest from "@/components/BeTheBest";
import Hero from "@/components/Hero";
import MeetApp from "@/components/MeetApp";
import OpenVacancies from "@/components/OpenVacancies";
import SelfImprovement from "@/components/SelfImprovement";
import SoundFamiliar from "@/components/SoundFamiliar";

export default function Home() {
  return (
    <main className="px-2 sm:px-3 md:px-5 pt-[63px] sm:pt-[91px]">
     <Hero />
     <SoundFamiliar />
     <MeetApp />
     <SelfImprovement />
     <BeTheBest />
     <OpenVacancies />
    </main>
  )
}
