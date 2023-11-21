"use client"
import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import {motion} from "framer-motion";

interface IProps {
}

function CardSecurity(props: IProps) {
  return (
    <Container className="flex flex-col-reverse md:flex-row md:gap-20 py-20 my-10">
      <motion.div
        className="flex flex-col gap-5 w-full md:w-6/12"
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: {opacity: 0, translateY: 100},
          visible: {opacity: 1, translateY: 0},
        }}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <h1 className="font-semibold md:font-bold tracking-tight h2 md:h1">
          Your money security is <span className="text-primary-500">guaranteed</span>.
        </h1>
        <h6>
          Our multigrade anti-theft security measures use passwords, 2FA, passcodes, and device
          tracking to ensure your money is safe.
        </h6>

        <h6>
          We also provide 256-bit AES bank-level encryption for all application traffic to keep
          personal and transactional details private.
        </h6>
      </motion.div>
      <motion.div
        className="w-full md:w-6/12"
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: {opacity: 0, translateX: 100},
          visible: {opacity: 1, translateX: 0},
        }}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <Image src={images.cardSecurity} alt="" height={500} width={1000}
               className="w-full h-auto"/>
      </motion.div>
    </Container>
  );
}

export default CardSecurity;
