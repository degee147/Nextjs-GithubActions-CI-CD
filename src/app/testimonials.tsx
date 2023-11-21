"use client"
import React, {useState} from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import Button from "@/components/Button";
import {testimonials} from "@/assets/data";
import {AnimatePresence, motion} from "framer-motion";

interface IProps {
}

function Testimonials(props: IProps) {
  const [active, setActive] = useState(0);

  return (
    <Container className="flex flex-col-reverse md:flex-row items-start md:items-center gap-10">
      <div className="w-full md:w-1/2">
        <div className="relative px-5 grid grid-cols-1 gap-4">
          <div
            className="absolute w-full bg-brand-grad h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"/>
          {
            testimonials.map((t, idx) => (
              <motion.button
                key={idx}
                className="bg-white rounded-xl w-full relative drop-shadow-md hover:drop-shadow-2xl apply-transition p-4 md:p-7 block text-left border border-black-4"
                onClick={() => setActive(idx)}
              >
                <div className="flex gap-4 items-center">
                  <div>
                    <div className="h-12 md:h-16 aspect-square rounded-full overflow-hidden">
                      <Image src={t.image} alt={t.name} width={100} height={100}
                             className="image-cover"/>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h6 className="body md:h6">{t.name}</h6>
                    <p className="text-black-7 small md:body">{t.title}</p>
                  </div>
                </div>
                <AnimatePresence>
                  {
                    active === idx && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: {opacity: 1, height: "auto"},
                          collapsed: {opacity: 0, height: 0}
                        }}
                        transition={{duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}}
                        className="flex gap-2 flex-col overflow-hidden"
                      >
                        {t.text.map((c, idx) => (
                          <p key={idx} className={`leading-[1.45rem] ${idx === 0 ? "pt-4" : ""}`}>
                            {c}
                          </p>
                        ))}
                      </motion.div>
                    )
                  }
                </AnimatePresence>
              </motion.button>
            ))
          }
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <motion.div
          className="max-w-xl mx-auto"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 100},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          <Image src={images.testimonial} alt="" width={100} height={100}
                 className="h-32 md:h-48 w-auto"/>
          <h2 className="font-semibold md:font-bold tracking-tight my-5 h3 md:h2">
            See what people are saying about <span className="text-primary-500">FagoPay</span>
          </h2>
          <Button variant="PRIMARY">
            Join FagoPay
          </Button>
        </motion.div>
      </div>
    </Container>
  );
}

export default Testimonials;
