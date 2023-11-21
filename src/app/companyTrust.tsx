"use client"
import React from 'react';
import Container from "@/components/Container";
import {trustedCompanies} from "@/assets/data";
import Image from "next/image";
import {motion} from "framer-motion";

interface IProps {
}

function CompanyTrust(props: IProps) {
  return (
    <Container className="text-center my-20">
      <motion.h2
        className="font-semibold md:font-bold tracking-tight h3 md:h2"
        whileInView="visible"
        initial="hidden"
        variants={{
          hidden: {opacity: 0, translateY: 100},
          visible: {opacity: 1, translateY: 0},
        }}
        transition={{duration: 0.7}}
        viewport={{once: true}}
      >
        Top companies trust <span className="text-primary-500">FagoPay</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {
          trustedCompanies.map((c, idx) => (
            <motion.div
              key={idx}
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: {opacity: 0, translateY: 20},
                visible: {opacity: 1, translateY: 0},
              }}
              transition={{duration: 0.7, delay: idx * 0.2}}
              viewport={{once: true}}
            >
              <Image src={c.logo} alt={c.name} width={800} height={350}
                     className="h-10 md:h-20 w-auto"/>
            </motion.div>
          ))
        }
      </div>
    </Container>
  );
}

export default CompanyTrust;
