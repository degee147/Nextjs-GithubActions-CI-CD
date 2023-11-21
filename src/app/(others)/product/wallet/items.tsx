"use client"
import React from 'react';
import Container from "@/components/Container";
import {walletContent} from "@/assets/data";
import {motion} from "framer-motion";

interface IProps {
}

function Items(props: IProps) {
  return (
    <Container className="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {
        walletContent.map((m, idx) => (
          <motion.div
            key={idx}
            className="bg-primary-50 rounded-xl px-8 py-12"
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.7, delay: idx * 0.3}}
            viewport={{once: true}}
          >
            <h4 className="text-center text-primary-500 font-semibold">{m.title}</h4>
            <h6 className="text-center mt-4">{m.body}</h6>
          </motion.div>
        ))
      }
    </Container>
  );
}

export default Items;
