import React from 'react';
import PricingPageComponent from "@/app/(others)/pricing/pricingPageComponent";
import {Metadata} from "next";

interface IProps {
}

function PricingPage(props: IProps) {
  return (
    <PricingPageComponent/>
  );
}


export const metadata: Metadata = {
  title: "Pricing",
  description: 'We offer the best financial service at affordable charges.',
}

export default PricingPage;
