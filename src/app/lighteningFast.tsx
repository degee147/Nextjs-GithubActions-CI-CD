"use client"
import React, {useMemo, useRef} from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import {motion, useScroll, useTransform} from "framer-motion";

interface IProps {
}

function LighteningFast(props: IProps) {
  const ref = useRef(null);

  const width = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.screen.width;
    }
    return 460;
  }, []);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const p1 = useTransform(scrollYProgress, [0, 1], [width * -1, 0]);

  const ref2 = useRef(null);
  const {scrollYProgress: sp} = useScroll({
    target: ref2,
    offset: ["start end", "start start"],
  });
  const p2 = useTransform(sp, [0, 1], [0, width * -1]);

  return (
    <div className="w-full bg-brand-grad mt-20 mb-60">
      <div className="overflow-hidden w-full">
        <motion.div
          ref={ref}
          className="border-t-[20px] border-dashed border-white w-[200vw]"
          style={{translateX: p1}}
        />
      </div>
      <Container className="pt-20 pb-10 text-white">
        <motion.h1
          className="w-full max-w-lg font-bold tracking-tight h2 md:h1"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 100},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 0.7}}
          viewport={{once: true}}
        >
          Lightening-fast transactions.
        </motion.h1>
        <motion.h6
          className="mt-5 w-full max-w-3xl"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: {opacity: 0, translateY: 100},
            visible: {opacity: 1, translateY: 0},
          }}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          Experience rapid transactions that match your pace. Swiftly send and receive money across
          all accounts, including free transfers to fellow FagoPay users.
        </motion.h6>
      </Container>
      <div
        className="w-[90vw] md:w-[80vw] h-40 md:h-72 bg-primary-50 rounded-r-3xl translate-y-10 relative z-10">
        <Image src={images.rocket} alt=""
               className="h-[calc(120%_+_128px)] w-auto bottom-[98px] relative"/>
      </div>
      <div className="overflow-hidden w-full">
        <motion.div
          ref={ref2}
          className="border-t-[20px] border-dashed border-white w-[200vw] z-[5]"
          style={{translateX: p2}}
        />
      </div>
    </div>
  );
}

export default LighteningFast;
