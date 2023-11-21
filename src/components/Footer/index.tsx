import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import AppStores from "@/components/AppStores";
import Link from "next/link";
import {INavItem} from "@/assets/data/navItems";
import Socials from "@/components/Footer/Socials";

interface IProps {
}

function Footer(props: IProps) {
  return (
    <div className="bg-black-12">
      <Container className="pb-20 pt-24 text-white">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div className="flex-1">
            <p><Image src={images.fagoPayWhite} alt="Logo" height={80} className="h-10 w-auto"/></p>
            <h6 className="mt-5 max-w-lg">
              Innovative Personal and Business Banking solution for Africans. DG
            </h6>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
            <div>
              <small className="uppercase mb-4 block">Company</small>
              <ul>
                <FooterLink name="Blog" path="/"/>
                <FooterLink name="Careers" path="/"/>
                <FooterLink name="Pricing" path="/pricing"/>
                <FooterLink name="Terms & Condition" path="/terms"/>
                <FooterLink name="Privacy Policy" path="/privacy-policy"/>
              </ul>
            </div>

            <div>
              <small className="uppercase mb-4 block">Products</small>
              <ul>
                <FooterLink name="Business Suite" path="/product/business"/>
                <FooterLink name="Personal Wallet" path="/product/wallet"/>
              </ul>
            </div>

            <div>
              <small className="uppercase mb-4 block">Get the app</small>
              <div className="w-40">
                <AppStores/>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-0 border-t border-black-9 my-10"/>

        <div className="flex justify-between items-center">
          <p><small>(c) FagoPay, {new Date().getFullYear()}</small></p>
          <Socials/>
        </div>
      </Container>
    </div>
  );
}

function FooterLink({path, name}: INavItem) {
  return (
    <li>
      <Link href={path} className="my-2 block hover:underline">
        {name}
      </Link>
    </li>
  )
}

export default Footer;
