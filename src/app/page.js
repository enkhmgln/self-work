"use client";

import Benefit from "@/components/Benefit";
import Hero from "@/components/Hero";
import hero from "@/assets/images/ws.jpg";
import WelcomeSection from "@/components/WelcomeSection";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";


export default function Home() {

  return (
      <>
          <div>
              <Hero img={hero} text={'Discover '} text2={'PURE LUXURY'}  />
              <WelcomeSection/>
              {/*<Intro/>*/}
              <Benefit    />
              <Gallery/>
          </div>
      </>

  );
}
