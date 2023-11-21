import React from 'react';
import Container from "@/components/Container";
import AppStores from "@/components/AppStores";
import Image from "next/image";
import {images} from "@/assets/images";

interface IProps {
}

function FooterCTA(props: IProps) {
  return (
    <Container className="mt-20 -mb-10 relative z-10">
      <div className="bg-black-11 bg-[url(/bg1.svg)] bg-no-repeat bg-left-bottom bg-blend-overlay rounded-xl text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-5">
          <div className="flex flex-col gap-10 py-10 pl-5 pr-5 md:py-16 md:pl-16 relative z-[2]">
            <h1 className="font-semibold h3 md:h1">
              Manage your Business and Personal Finances with FagoPay
            </h1>
            <p className="max-w-lg leading-6">
              Do away with the stress of navigating different apps to manage your finances.
            </p>
            <AppStores/>
          </div>
          <div className="relative">
            <div className="w-[100%] aspect-square rounded-full absolute top-[-25%] right-[-25%] bg-brand-grad"/>
            <Image src={images.phone1} alt="" className="md:absolute relative bottom-0 w-full h-auto md:h-[80%] object-contain object-left z-10"/>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FooterCTA;
