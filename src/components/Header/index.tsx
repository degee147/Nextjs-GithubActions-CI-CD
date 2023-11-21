"use client"
import React from 'react';
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import {images} from "@/assets/images";
import {navItems} from "@/assets/data/navItems";
import Button from "@/components/Button";
import {AnimatePresence, motion} from "framer-motion";
import MobileNav from "@/components/Header/mobileNav";

interface IProps {
  light?: boolean;
}

function Header({light = false}: IProps) {

  return (
    <div>
      <Container>
        <header className="flex items-stretch gap-5 justify-between relative z-50">
          <Link href="/" className="flex items-center h-20">
            <Image
              src={light ? images.fagoPayWhite : images.fagopay}
              alt={"FagoPay"}
              height={70}
              className="h-8 w-auto"
            />
          </Link>

          <ul className="hidden md:flex">
            {
              navItems.map((item, idx) => {
                return (
                  <li key={idx} className="relative group">
                    {
                      !item.subNav ? (
                        <Link
                          href={item.path}
                          className={`flex items-center px-4 h-20 hover:text-primary-500 apply-transition ${light ? "text-black-5" : "text-black-12"}`}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <>
                          <button
                            className={`flex items-center px-4 h-20 hover:text-primary-500 apply-transition ${light ? "text-black-5" : "text-black-12 cursor-pointer"}`}
                          >
                            {item.name}
                          </button>
                          <AnimatePresence>
                            <motion.div
                              animate="visible"
                              initial="hidden"
                              exit="hidden"
                              variants={{
                                visible: {opacity: 1, translateY: 0},
                                hidden: {opacity: 1, translateY: -40},
                              }}
                              transition={{duration: 0.7}}
                              className="hidden group-focus-within:block absolute top-20 w-72 bg-white drop-shadow-2xl rounded-md p-2 border border-black-4">
                              {
                                item.subNav.map((sub, i) => (
                                  <Link
                                    key={`subnav-${i}`}
                                    href={sub.path}
                                    className={`flex items-center px-4 h-12 hover:text-primary-500 apply-transition text-black-12 gap-4`}
                                  >
                                    {
                                      sub.logo && (
                                        <Image
                                          src={sub.logo}
                                          alt=""
                                          width={50} height={50}
                                          className="w-6 h-auto"
                                        />
                                      )
                                    }
                                    <span>{sub.name}</span>
                                  </Link>
                                ))
                              }
                            </motion.div>
                          </AnimatePresence>
                        </>
                      )
                    }
                  </li>
                )
              })
            }
          </ul>

          <ul className="flex">
            <li className="hidden md:flex items-center h-20">
              <a href="https://web.fagopay.africa" target="_blank" rel="noreferrer">
                <Button size="SMALL" variant={light ? "GHOST" : "DEFAULT"}>Sign in</Button>
              </a>
            </li>
            <MobileNav light={light}/>
          </ul>
        </header>
      </Container>
    </div>
  );
}

export default Header;
