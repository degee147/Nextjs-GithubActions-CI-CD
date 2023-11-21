import {images} from "@/assets/images";

export interface INavItem {
  name: string,
  path: string,
  logo?: any,
  subNav?: INavItem[],
}

export const navItems: INavItem[] = [
  {
    name: "About us",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  },
  {
    name: "Products",
    path: "#",
    subNav: [
      {
        name: "FagoPay Wallet",
        path: "/product/wallet",
        logo: images.personal,
      },
      {
        name: "FagoPay Business Suite",
        path: "/product/business",
        logo: images.business,
      },
    ]
  },
  {
    name: "Pricing",
    path: "/pricing"
  },
]

export const socials = [
  // {
  //   icon: "ic:sharp-facebook",
  //   url: "https://facebook.com/abcd",
  //   name: "Facebook",
  // },
  {
    icon: "basil:instagram-solid",
    url: "https://www.instagram.com/fagopayofficial",
    name: "Instagram",
  },
  {
    icon: "ri:twitter-x-fill",
    url: "https://twitter.com/Fagopayofficial",
    name: "Twitter",
  },
  {
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/company/fagopay",
    name: "LinkedIn",
  },
]