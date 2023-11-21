"use client"
import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import AppStores from "@/components/AppStores";
import {trustedCompanies} from "@/assets/data";
import {motion} from "framer-motion";

interface IProps {
}

function Hero(props: IProps) {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
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
            className="small tracking-[1rem] uppercase">Product
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
            className="font-bold tracking-tight mb-4 h2 md:h1"><span
            className="text-primary-500">FagoPay</span><br/>Business Suite
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
            className="h5 md:h4">(For Businesses)
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
              Business transactions made easy!
            </h6>

            <AppStores/>

            {/*<div className="mt-10">*/}
            {/*  <p>Trusted By 5,000+ Businesses</p>*/}

            {/*  <div className="flex flex-wrap gap-5 mt-5">*/}
            {/*    {*/}
            {/*      trustedCompanies.map((c, idx) => (*/}
            {/*        <Image key={idx} src={c.logo} alt={c.name} title={c.name} width={700}*/}
            {/*               height={200} className="h-7 w-auto"/>*/}
            {/*      ))*/}
            {/*    }*/}
            {/*  </div>*/}
            {/*</div>*/}
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
        <Image src={images.woman} alt="" width={800} height={1400}
               className="w-full max-w-xl h-auto"/>
      </motion.div>
    </Container>
  );
}

export default Hero;
