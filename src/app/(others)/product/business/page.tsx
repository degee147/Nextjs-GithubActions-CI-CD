import React from 'react';
import {Metadata} from "next";
import FooterCTA from "@/components/FooterCTA";
import Hero from "@/app/(others)/product/business/hero";
import Items from "@/app/(others)/product/business/items";

interface IProps {
}

function WalletPage(props: IProps) {
  return (
    <div>
      <Hero/>
      <Items/>
      <FooterCTA/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "FagoPay Business Suite",
  description: 'Business transactions made easy!',
}

export default WalletPage;
