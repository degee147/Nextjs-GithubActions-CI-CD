"use client"
import React from 'react';
import {socials} from "@/assets/data/navItems";
import {Icon} from "@iconify/react";

interface IProps {
}

function Socials(props: IProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        socials.map((social, idx) => (
          <a href={social.url} key={idx} target="_blank" rel="noreferrer"
             className="flex items-center justify-center rounded-full h-10 w-10 border border-black-7 hover:bg-black-8 apply-transition">
            <Icon icon={social.icon} width={24} height={24} className="text-black-5"/>
          </a>
        ))
      }
    </div>
  );
}

export default Socials;
