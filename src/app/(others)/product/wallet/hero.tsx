"use client"
import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import AppStores from "@/components/AppStores";
import {motion} from "framer-motion";

interface IProps {
}

function Hero(props: IProps) {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="md:self-center">
        <div className="mt-10 md:mt-20">
          <motion.p
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 20},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.3}}
            viewport={{once: true}}
            className="small tracking-[1rem] uppercase"
          >
            Product
          </motion.p>
          <motion.h1
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.7}}
            viewport={{once: true}}
            className="font-bold tracking-tight mb-4 h2 md:h1"
          ><span className="text-primary-500">FagoPay</span> Wallet
          </motion.h1>
          <motion.h4
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="h5 md:h4">(For Individuals)
          </motion.h4>

          <hr className="w-56 border-0 border-t-2 border-black-6 my-5 md:my-10"/>

          <motion.div
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.5}}
            viewport={{once: true}}
          >
            <h6 className="max-w-lg mb-10">
              Make payments and manage your finances easily with Fagopay Wallet.
            </h6>

            <AppStores/>
          </motion.div>
        </div>
      </div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: {opacity: 0, translateX: 40},
          visible: {opacity: 1, translateX: 0},
        }}
        transition={{duration: 0.7}}
        viewport={{once: true}}
      >
        <Image src={images.walletMan} alt="" width={800} height={1400}
               className="w-full max-w-xl h-auto"/>
      </motion.div>
    </Container>
  );
}

export default Hero;
