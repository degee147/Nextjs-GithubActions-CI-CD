"use client"
import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import AppStores from "@/components/AppStores";
import Header from "@/components/Header";
import ReactTyped from "react-typed";
import {motion} from "framer-motion";

interface IProps {
}

function Hero(props: IProps) {
  return (
    <div className="bg-black-12 bg-[url(/bg1.svg)] bg-blend-overlay relative overflow-hidden">
      <Header light/>
      <Container className="md:py-20 py-5 text-white flex flex-col md:flex-row items-center relative z-[5] gap-y-10">
        <motion.div
          className="w-full md:w-6/12 relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
          initial="initial"
          animate="animate"
          variants={{
            initial: {opacity: 0, translateY: 70},
            animate: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 0.8}}
        >
          <div
            className="inline-block px-3 md:px-5 py-2 bg-black-1 bg-opacity-20 rounded-full border border-black-7 mb-3">
            <p className="small md:p">🏆 Trusted by 5,000+ Users & Businesses</p>
          </div>
          <motion.h1
            className="font-semibold md:font-bold tracking-tight h3 md:h1"
            initial="initial"
            animate="animate"
            variants={{
              initial: {opacity: 0, translateY: 70},
              animate: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 1}}
          >
            Innovative Personal and Business Banking solution for Africans
          </motion.h1>

          <h5 className="mt-10 mb-3 h6 md:h5">One app to seamlessly</h5>
          <h4 className="h5 md:h4 h-16 md:h-auto">
            <ReactTyped
              strings={[
                "Manage your personal and business accounts.",
                "Receive and send money super fast.",
                "Send invoices to customers anywhere and get paid.",
                "Budget, manage your finances, and settle bills.",
                "Manage your customers, vendors and suppliers."
              ]}
              typeSpeed={60}
              backDelay={3000}
              loop
            />
          </h4>

          <div className="mt-10">
            <AppStores className="justify-center md:justify-start"/>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-6/12 relative"
          initial="initial"
          animate="animate"
          variants={{
            initial: {opacity: 0, translateY: 70},
            animate: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 0.8}}
        >
          <Image
            src={images.heroPhone}
            width={1500}
            height={1500}
            alt=""
            className="h-[60vh] w-auto md:mx-auto relative z-10 max-w-[unset] left-1/2 -translate-x-1/2"
          />
          <Image src={images.map} alt=""
                 className="absolute max-w-[unset] w-[250%] md:w-[160%] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </motion.div>
      </Container>
      <div className="blur-[200px]">
        <div className="w-[400px] aspect-square rounded-full bg-primary-500 absolute bottom-[-100px] right-[-100px] z=[1]"/>
        <div className="w-[400px] aspect-square rounded-full bg-[#5348C8] absolute bottom-[300px] right-[-300px] z=[1]"/>
        <div className="w-[200px] aspect-square rounded-full bg-[#FEB958] absolute bottom-[-100px] right-[300px] z=[1]"/>
        <div className="w-[400px] aspect-square rounded-full bg-[#FEB958] absolute top-[-300px] left-[-400px] z=[1]"/>
      </div>
      <div className="absolute bg-[url(/ash.png)] w-full h-full top-0 left-0 bottom-0 right-0 mix-blend-overlay z-[2]"/>
      <Image src={images.curve} alt="" height={148} width={1278} className="w-full h-auto relative z-30"/>
    </div>
  );
}

export default Hero;
