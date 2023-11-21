import React from 'react';
import {Metadata} from "next";
import FooterCTA from "@/components/FooterCTA";
import Hero from "@/app/(others)/contact/hero";
import Faq from "@/app/(others)/contact/faq";
import NeedMore from "@/app/(others)/contact/needMore";

interface IProps {
}

function ContactPage(props: IProps) {
  return (
    <div>
      <Hero/>
      <Faq/>
      <NeedMore/>
      <FooterCTA/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contact us",
  description: 'For Partnerships and other business related inquiries',
}

export default ContactPage;
