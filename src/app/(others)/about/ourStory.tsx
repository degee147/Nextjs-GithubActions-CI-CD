"use client"
import React from 'react';
import Container from "@/components/Container";
import Button from "@/components/Button";
import {images} from "@/assets/images";
import Image from "next/image";
import {motion} from "framer-motion";

interface IProps {
}

function OurStory(props: IProps) {
  return (
    <motion.div
      className="bg-primary-700 bg-[url(/bg1.svg)] bg-no-repeat bg-left-bottom bg-blend-overlay py-20 my-20"
      whileInView="visible"
      initial="hidden"
      variants={{
        hidden: {opacity: 0, translateY: 100},
        visible: {opacity: 1, translateY: 0},
      }}
      transition={{duration: 0.6}}
      viewport={{once: true}}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          <div>
            <motion.h1
              className="font-bold leading-none relative inline-block h2 md:h1"
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: {opacity: 0, translateY: 100},
                visible: {opacity: 1, translateY: 0},
              }}
              transition={{duration: 1}}
              viewport={{once: true}}
            >
              Our Story
              <div className="w-7/12 h-2.5 bg-[#FEA72E]"/>
            </motion.h1>

            <motion.div
              className="mt-10 md:mt-20 mb-10"
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: {opacity: 0, translateY: 100},
                visible: {opacity: 1, translateY: 0},
              }}
              transition={{duration: 1.3}}
              viewport={{once: true}}
            >
              <h6>
                Fagopay is a financial technology company headquartered in Katsina, Nigeria, that
                will provide quasi-banking services for individuals and digital payment solutions
                for businesses and organisations in Nigeria and the rest of Africa. We aim to help
                merchants give customers a seamless payment experience while providing digital
                banking services to the unbanked and underbanked.
              </h6>

              <h6 className="mt-10">
                Fagopay builds the infrastructure that enables physical stores, mobile merchants,
                and other businesses and organisations to accept payments from the different
                channels their clients may need to use all in one place.
              </h6>
            </motion.div>

            <Button variant="GHOST">
              Join FagoPay
            </Button>
          </div>
          <motion.div
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 100},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 1}}
            viewport={{once: true}}
            className="text-black-10">
            <div className="-mb-20 md:-mb-40 translate-y-8">
              <div
                className="bg-white w-full md:w-9/12 mx-auto px-6 py-8 md:px-10 md:py-10 rounded-xl drop-shadow-2xl">
                <Image src={images.biz2} alt={"World"} height={75} className="h-20 mb-8 w-auto"/>
                <h4 className="font-semibold mb-5">Our Mission</h4>
                <p>
                  Developing quality and innovative features
                  across our digital payment software
                  and APIs to drive business growth.
                </p>
                <p className="mt-5">
                  Providing individuals with a digital platform
                  to make and manage payments, among other
                  financial services.
                </p>
              </div>

              <div
                className="bg-white w-full md:w-9/12 mx-auto px-6 py-8 md:px-10 md:py-10 rounded-xl drop-shadow-2xl mt-10">
                <Image src={images.biz2} alt={"World"} height={75} className="h-20 mb-8 w-auto"/>
                <h4 className="font-semibold mb-5">Our Vision</h4>
                <p>
                  To enable businesses and organisations across Africa to become more profitable,
                  productive, and able to accommodate scale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}

export default OurStory;
