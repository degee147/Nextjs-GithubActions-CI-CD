"use client"
import React, {useEffect, useState} from 'react';
import {Icon} from "@iconify/react";
import {navItems} from "@/assets/data/navItems";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";
interface IProps {
  light?: boolean;
}

function MobileNav({light = false}: IProps) {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  
  useEffect(() => {
    const el = document.querySelector("html");

    if (el) {
      if (isOpen) {
        el.style.overflow = "hidden";
      } else {
        el.style.overflow = "unset";
      }
    }
  }, [isOpen]);

  return (
    <>
      <li className="flex md:hidden items-center h-20">
        <button className="h-20 flex items-center justify-center px-2"
                onClick={() => setOpen(true)}>
          <Icon icon="mingcute:menu-line"
                className={`h5 ${light ? "text-white" : "text-black-10"}`}/>
        </button>
      </li>

      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {opacity: 1},
                hidden: {opacity: 0},
              }}
              transition={{duration: 0.2}}
              className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 bg-black-10 bg-opacity-50">

              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {translateX: 0},
                  hidden: {translateX: 300},
                }}
                transition={{duration: 0.2}}
                className="absolute h-full w-10/12 bg-white right-0 py-5">
                <div className="flex justify-end px-5">
                  <Button size="SMALL" className="h-12 w-12 px-0" onClick={() => setOpen(false)}>
                    <Icon icon="ic:outline-close" width={36} height={36}/>
                  </Button>
                </div>
                {
                  navItems.map((item, idx) => (
                    <>
                      <Link
                        key={`nav-${idx}`}
                        href={item.path}
                        className={`flex items-center px-4 h-16 hover:text-primary-500 apply-transition text-black-12`}
                      >
                        {item.name}
                      </Link>
                      {
                        item.subNav && (
                          <div
                            key={`sub-${idx}`}
                            className="pl-5">
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
                          </div>
                        )
                      }
                    </>
                  ))
                }

                <div className="p-4 mt-10">
                  <a href="https://web.fagopay.africa" rel="noreferrer">
                    <Button size="SMALL" className="w-full" variant={"DEFAULT"}>Sign in</Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
