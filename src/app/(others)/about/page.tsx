import React from 'react';
import Hero from "@/app/(others)/about/hero";
import FooterCTA from "@/components/FooterCTA";
import OurStory from "@/app/(others)/about/ourStory";
import Driver from "@/app/(others)/about/driver";

interface IProps {
}

function AboutPage(props: IProps) {
  return (
    <div>
      <Hero/>
      <OurStory/>
      <Driver/>
      <FooterCTA/>
    </div>
  );
}

export default AboutPage;
