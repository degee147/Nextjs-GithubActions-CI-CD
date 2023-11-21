"use client"
import React from 'react';
import Container from "@/components/Container";
import FooterCTA from "@/components/FooterCTA";
import {pricing} from "@/assets/data";
import Button from "@/components/Button";
import {motion} from "framer-motion";

interface IProps {
}

function PricingPage(props: IProps) {
  return (
    <div>
      <Container className="flex flex-col items-center">
        <motion.h1
          className="text-center font-semibold md:font-bold max-w-4xl tracking-tight mt-10 md:mt-20 h3 md:h1"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 80},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 0.7}}
          viewport={{once: true}}
        >
          Enjoy <span className="text-primary-500">top-notch</span> midefinancial services at <span
          className="text-primary-500">affordable</span> prices
        </motion.h1>
        <motion.h6
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 40},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 0.7}}
          viewport={{once: true}}
          className="max-w-3xl mt-5 text-black-8 text-center">
          We offer the best financial service at affordable charges.
        </motion.h6>

        <div className="relative">
          <motion.div
            className="max-w-2xl w-full bg-white p-5 pt-12  md:p-12 rounded-xl drop-shadow-2xl mt-10 relative z-10"
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: {opacity: 0, translateY: 40},
              visible: {opacity: 1, translateY: 0},
            }}
            transition={{duration: 0.7}}
            viewport={{once: true}}
          >
            <h5 className="font-semibold text-center">Transfers to Nigerian Banks</h5>

            <div className="mt-10">
              {
                pricing.map((price, idx) => (
                  <>
                    <div key={idx} className="flex gap-5 py-5">
                      <div className="w-6 h-6 rounded-full bg-primary-500"/>
                      <h6 className="flex-1 p md:h6">{price.title}</h6>
                      <h4
                        className="font-bold text-primary-500 tracking-tight h6 md:h4">{price.price}</h4>
                    </div>
                    {
                      idx !== pricing.length - 1 && (
                        <hr key={`hr-${idx}`} className="border-0 border-t border-black-4 my-4"/>
                      )
                    }
                  </>
                ))
              }
            </div>

            <Button className="w-full mt-10" variant="PRIMARY">
              Join FagoPay
            </Button>
          </motion.div>
          <div
            className="absolute z-[8] w-screen h-[60%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-50 -skew-y-12"/>
        </div>
      </Container>

      <FooterCTA/>
    </div>
  );
}

export default PricingPage;
