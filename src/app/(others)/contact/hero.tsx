"use client"
import React from 'react';
import Container from "@/components/Container";
import {contact} from "@/assets/data";
import Image from "next/image";
import ContactForm from "@/app/(others)/contact/ContactForm";
import {motion} from "framer-motion";

interface IProps {
}

function Hero(props: IProps) {
  return (
    <Container className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 40},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 0.7}}
          viewport={{once: true}}
        >
          <motion.h1 className="text-primary-500 font-bold tracking-tight h3 md:h1">Reach out to us
          </motion.h1>
          <motion.h6>For Partnerships and other business related inquiries</motion.h6>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {
              contact.map((c, idx) => (
                <motion.div
                  key={idx}
                  className="border border-black-4 rounded-xl p-6"
                  whileInView="visible"
                  initial="hidden"
                  variants={{
                    hidden: {opacity: 0, translateY: 40},
                    visible: {opacity: 1, translateY: 0},
                  }}
                  transition={{duration: 0.7, delay: idx * 0.3}}
                  viewport={{once: true}}
                >
                  <Image src={c.icon} alt="" width={400} height={400} className="h-12 w-auto"/>
                  <h5 className="mt-5 mb-2">{c.title}</h5>
                  <p className="text-black-7">{c.description}</p>
                  <p className="mt-10">
                    <a href={c.cta.link} className="text-primary-500 underline">
                      {c.cta.text}
                    </a>
                  </p>
                </motion.div>
              ))
            }
          </div>
        </motion.div>
        <div>
          <ContactForm/>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
