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
    <div>
      <Container className="flex flex-col items-center mt-10 md:mt-20">
        <motion.h1
          className="text-center font-semibold md:font-bold w-full md:w-9/12 tracking-tight h3 md:h2 lg:h1"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 50},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          We are building the future of <span
          className="text-primary-500">Africa</span> through <span className="text-primary-500">seamless financial services</span>,
          not only for
          businesses but also for individuals.
        </motion.h1>

        <motion.div
          className="w-full flex justify-center"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1},
          }}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          <Image src={images.phone2} alt={"Devices"} className="w-full md:w-9/12 md:-mt-5"/>
        </motion.div>

        <div className="-mt-5">
          <AppStores className="justify-center md:justify-start"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-11">
          <motion.div
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.7, delay: 0}}
            viewport={{once: true}}>
            <Image src={images.personal1} alt={"World"} height={75} className="h-20 mb-8 w-auto"/>
            <h6>
              FagoPay is paving the way for improved intra-continental business operations and a
              brighter financial future for Africa.
            </h6>
          </motion.div>

          <motion.div
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.7, delay: 0.3}}
            viewport={{once: true}}
          >
            <Image src={images.biz2} alt={"World"} height={75} className="h-20 mb-8 w-auto"/>
            <h6>
              With our user-friendly payments products, businesses and individuals alike can enjoy
              seamless financial management and secure transactions across Africa like never before.
            </h6>
          </motion.div>

          <motion.div
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.7, delay: 2 * 0.3}}
            viewport={{once: true}}
          >
            <Image src={images.biz3} alt={"World"} height={75} className="h-20 mb-8 w-auto"/>
            <h6>
              Join us today and experience the power of FagoPay - the all-in-one payment solution
              for all of Africa!
            </h6>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
