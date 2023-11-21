import React from 'react';
import Image from "next/image";
import {images} from "@/assets/images";

interface IProps {
  className?: string;
}

function AppStores({className}: IProps) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-2 ${className ?? ""}`}>
      <a
        href="https://play.google.com/store/apps/details?id=net.fagopay.fagopay&pcampaignid=web_share"
        target="_blank" rel="noreferrer">
        <Image src={images.playStore} alt={"Play Store"} height={80} className="h-12 w-auto"/>
      </a>

      <a href="https://apps.apple.com/ng/app/fagopay/id6449773373" rel="noreferrer" target="_blank">
        <Image src={images.appStore} alt={"Play Store"} height={80} className="h-12 w-auto"/>
      </a>

     <a href="https://web.fagopay.africa" rel="noreferrer" target="_blank">
        <Image src={images.webApp} alt={"Web app"} height={80} className="h-12 w-auto"/>
      </a>
    </div>
  );
}

export default AppStores;
