"use client"
import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import {motion} from "framer-motion";

interface IProps {
}

function Versatile(props: IProps) {
  return (
    <Container className="flex flex-col md:flex-row gap-10 items-center mb-20 md:mb-40">
      <motion.div
        className="w-full md:w-5/12"
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: {opacity: 0, translateY: 100},
          visible: {opacity: 1, translateY: 0},
        }}
        transition={{duration: 0.7}}
        viewport={{once: true}}
      >
        <h1 className="font-semibold md:font-bold tracking-tight mb-5 h2 md:h1">
          <span className="text-primary-500">Versatile</span> Payment Options.
        </h1>
        <h6>
          From electronic transfers to QR codes, unique payment links to USSD and secure debit card
          payments, choose your preferred way to pay and get paid.
        </h6>
      </motion.div>
      <motion.div
        className="w-full md:w-7/12"
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: {opacity: 0, translateY: 100},
          visible: {opacity: 1, translateY: 0},
        }}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <Image src={images.versatile} alt="" width={1200} height={400} className="w-full h-auto"/>
      </motion.div>
    </Container>
  );
}

export default Versatile;
