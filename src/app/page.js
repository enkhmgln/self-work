"use client";

import Benefit from "@/components/Benefit";
import Hero from "@/components/Hero";
import hero from "@/assets/images/ashiglajmgdgui2.jpg";
import WelcomeSection from "@/components/WelcomeSection";
import Intro from "@/components/Intro";
import RoomCardWrapper from "@/components/RoomCardWrapper/RoomCardWrapper";

export default function Home() {
  return (
    <>
      <div>
        <Hero hero={hero} text={"Discover "} text2={"PURE LUXURY"} />
        <RoomCardWrapper />
        <WelcomeSection />
        <Intro />
        <Benefit />
      </div>
    </>
  );
}
