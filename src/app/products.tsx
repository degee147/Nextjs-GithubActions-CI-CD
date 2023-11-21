"use client"
import React, {useState} from 'react';
import Container from "@/components/Container";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {images} from "@/assets/images";
import Button from "@/components/Button";
import {businessTips, personalTips} from "@/assets/data";
import Link from "next/link";

interface IProps {
}

function Products(props: IProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="border-y-[100px] py-20 border-black-4">
      <Container>
        <p className="tracking-[0.8rem] uppercase">Products</p>
        <div className="flex gap-6 md:gap-10 mb-10 mt-4">
          <button className="hover:text-primary-500 apply-transition" onClick={() => setActive(0)}>
            <h5 className="h6 md:h5">Personal Wallet</h5>
            <div
              className={`h-2 w-1/2 mt-2 apply-transition ${active === 0 ? "bg-primary-500" : "bg-black-5"}`}/>
          </button>
          <button className="hover:text-primary-500 apply-transition" onClick={() => setActive(1)}>
            <h5 className="h6 md:h5">Business Suite</h5>
            <div
              className={`h-2 w-1/2 mt-2 apply-transition ${active === 1 ? "bg-primary-500" : "bg-black-5"}`}/>
          </button>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {
              active === 1 ? (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {opacity: 1, translateX: 0},
                    collapsed: {opacity: 0, translateX: 200},
                  }}
                  transition={{duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}}
                  key="business"
                  className="flex flex-col md:flex-row gap-10 items-center"
                >
                  <div className="w-full md:w-5/12">
                    <Image src={images.business} alt="" width={100} height={100}
                           className="h-28 md:h-32 w-auto"/>

                    <motion.h1
                      className="font-semibold md:font-bold tracking-tight mt-5 md:mt-10 h2 md:h1"
                      whileInView="visible"
                      initial="hidden"
                      variants={{
                        hidden: {opacity: 0, translateY: 40},
                        visible: {opacity: 1, translateY: 0},
                      }}
                      transition={{duration: 0.4}}
                      viewport={{once: true}}
                    >
                      <motion.span
                        className="text-primary-500"
                      >
                        FagoPay
                      </motion.span>
                      <br/>Business Suite
                    </motion.h1>
                    <motion.h6
                      whileInView="visible"
                      initial="hidden"
                      variants={{
                        hidden: {opacity: 0, translateY: 60},
                        visible: {opacity: 1, translateY: 0},
                      }}
                      transition={{duration: 0.5}}
                      viewport={{once: true}}
                    >
                      Effortless transactions for enhanced business growth.
                    </motion.h6>
                    <Link href="/product/business">
                      <Button variant="SECONDARY" className="mt-5">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                      {
                        businessTips.map((t, idx) => (
                          <motion.div
                            key={idx}
                            className="border border-black-5 rounded-xl p-8 hover:drop-shadow-2xl bg-white apply-transition"
                            whileInView="visible"
                            initial="hidden"
                            variants={{
                              hidden: {opacity: 0},
                              visible: {opacity: 1},
                            }}
                            transition={{duration: 0.5, delay: idx * 0.2}}
                            viewport={{once: true}}
                          >
                            <Image src={t.image} alt={t.text} height={100} width={100}
                                   className="h-24 w-auto"/>
                            <h6 className="mt-4">
                              {t.text}
                            </h6>
                          </motion.div>
                        ))
                      }
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {opacity: 1, translateX: 0},
                    collapsed: {opacity: 0, translateX: -200},
                  }}
                  transition={{duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}}
                  key="personal"
                  className="flex flex-col md:flex-row gap-10 items-center"
                >
                  <div className="w-full md:w-5/12">
                    <Image src={images.personal} alt="" width={100} height={100}
                           className="h-28 md:h-32 w-auto"/>

                    <motion.h1
                      className="font-semibold md:font-bold tracking-tight mt-5 md:mt-10 h2 md:h1"
                      whileInView="visible"
                      initial="hidden"
                      variants={{
                        hidden: {opacity: 0, translateY: 40},
                        visible: {opacity: 1, translateY: 0},
                      }}
                      transition={{duration: 0.4}}
                      viewport={{once: true}}
                    >
                      <span className="text-primary-500">FagoPay</span><br/>Personal Wallet
                    </motion.h1>
                    <motion.h6
                      whileInView="visible"
                      initial="hidden"
                      variants={{
                        hidden: {opacity: 0, translateY: 60},
                        visible: {opacity: 1, translateY: 0},
                      }}
                      transition={{duration: 0.5}}
                      viewport={{once: true}}
                    >
                      We are building the future of Africa’s financial services, not only for
                      businesses
                      but
                      also for individuals.
                    </motion.h6>
                    <Link href="/product/wallet">
                      <Button variant="SECONDARY" className="mt-5">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                      {
                        personalTips.map((t, idx) => (
                          <motion.div
                            key={idx}
                            className="border border-black-5 rounded-xl p-8 hover:drop-shadow-2xl bg-white apply-transition"
                            whileInView="visible"
                            initial="hidden"
                            variants={{
                              hidden: {opacity: 0},
                              visible: {opacity: 1},
                            }}
                            transition={{duration: 0.5, delay: idx * 0.2}}
                            viewport={{once: true}}
                          >
                            <Image src={t.image} alt={t.text} height={100} width={100}
                                   className="h-24 w-auto"/>
                            <h6 className="mt-4">
                              {t.text}
                            </h6>
                          </motion.div>
                        ))
                      }
                    </div>
                  </div>
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}

export default Products;
