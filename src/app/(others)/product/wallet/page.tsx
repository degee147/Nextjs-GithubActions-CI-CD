import React from 'react';
import {Metadata} from "next";
import Hero from "@/app/(others)/product/wallet/hero";
import Items from "@/app/(others)/product/wallet/items";
import FooterCTA from "@/components/FooterCTA";

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
  title: "FagoPay Wallet",
  description: 'Make payments and manage your finances easily with Fagopay Wallet.',
}

export default WalletPage;
