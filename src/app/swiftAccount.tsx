"use client"
import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import {motion} from "framer-motion";

interface IProps {
}

function SwiftAccount(props: IProps) {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: {opacity: 0, translateX: -100},
          visible: {opacity: 1, translateX: 0},
        }}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <Image
          src={images.swift}
          width={800}
          height={800}
          className="w-full max-w-lg h-auto mx-auto"
          alt=""
        />
      </motion.div>
      <div className="flex flex-col justify-center">
        <motion.h1
          className="font-bold tracking-tight mb-5 h2 md:h1"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 100},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 0.7}}
          viewport={{once: true}}
        >
          Swift Account Setup, <span className="text-primary-500">Hassle-Free Transactions.</span>
        </motion.h1>
        <motion.h6
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 100},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          Get your personal or business account in 5 minutes and enjoy seamless transactions.
        </motion.h6>
      </div>
    </Container>
  );
}

export default SwiftAccount;
