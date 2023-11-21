"use client"
import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {drivers} from "@/assets/data";
import {motion} from "framer-motion";

interface IProps {
}

function Driver(props: IProps) {
  return (
    <Container className="my-24 md:my-48">
      <h2 className="text-center font-bold mb-16 h3 md:h2">Meet our drivers</h2>
      <div className="flex flex-wrap gap-x-10 gap-y-8 items-center justify-center">
        {
          drivers.map((driver, idx) => (
            <motion.div
              className="w-32 md:w-52 text-center" key={idx}
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: {opacity: 0, translateY: 40},
                visible: {opacity: 1, translateY: 0},
              }}
              transition={{duration: 0.7, delay: idx * 0.3}}
              viewport={{once: true}}
            >
              <div
                className="w-full aspect-square bg-black-5 rounded-full drop-shadow-2xl mb-2 overflow-hidden">
                <Image src={driver.image} alt="" className="image-cover" width={500} height={500}/>
              </div>
              <h6 className="text-primary-500 body md:h6">{driver.name}</h6>
              <p className="text-black-8 small md:p">{driver.role}</p>
            </motion.div>
          ))
        }
      </div>
    </Container>
  );
}

export default Driver;
