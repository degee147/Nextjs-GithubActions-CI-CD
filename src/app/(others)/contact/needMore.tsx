import React from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import {images} from "@/assets/images";
import Button from "@/components/Button";

interface IProps {
}

function NeedMore(props: IProps) {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <div>
        <Image src={images.assistant} alt="" className="w-full h-auto max-w-xl"/>
      </div>
      <div className="flex flex-col gap-4 items-start place-self-center">
        <h2 className="font-bold text-primary-500 tracking-tight">Need more?</h2>
        <h6 className="max-w-xl">
          Get quick attention and support from our ever-available customer success team.
        </h6>
        <Button variant="PRIMARY" className="w-auto">Chat with us</Button>
      </div>
    </Container>
  );
}

export default NeedMore;
