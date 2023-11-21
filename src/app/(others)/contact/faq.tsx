"use client"
import React, {useState} from 'react';
import Container from "@/components/Container";
import Button from "@/components/Button";
import {faq} from "@/assets/data";
import {Icon} from "@iconify/react";
import {motion, AnimatePresence} from "framer-motion"

interface IProps {
}

function Faq(props: IProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-20 bg-brand-grad">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 py-20 text-white">
        <div>
          <h1 className="font-semibold tracking-tight h3 md:h1">Frequently Asked Questions</h1>
          <h6 className="my-5">
            We have carefully curated some of the frequently asked questions from our customers and
            tailored them to answer most of your questions.
          </h6>
          <Button>
            Go to knowledge base
          </Button>
        </div>
        <div>

          <div>
            <hr className="border-0 border-t border-primary-400"/>
            {
              faq.map((f, idx) => (
                <>
                  <div key={idx}>
                    <button
                      className="flex w-full text-left justify-between h6 px-5 py-5 hover:bg-white hover:bg-opacity-10 apply-transition"
                      onClick={() => setActive(idx)}>
                      <span>{f.title}</span>
                      <motion.div
                        initial={false}
                        animate={{transform: active === idx ? "rotate(180deg)" : "rotate(0deg)"}}
                        transition={{duration: 0.3}}
                      >
                        <Icon icon="ion:chevron-down-outline"/>
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
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
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 pt-2 text-primary-100 leading-5">{f.body}</p>
                          </motion.div>
                        )
                      }
                    </AnimatePresence>
                  </div>
                  <hr className="border-0 border-t border-primary-400" key={`hr-${idx}`}/>
                </>
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Faq;
