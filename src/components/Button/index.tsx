"use client"
import React, {ButtonHTMLAttributes, useMemo} from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "DEFAULT" | "PRIMARY" | "SECONDARY" | "GHOST",
  size?: "DEFAULT" | "SMALL" | "LARGE",
}

function Button({children, variant = "DEFAULT", size = "DEFAULT", className, ...props}: IProps) {

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "PRIMARY":
        return "bg-primary-500 hover:bg-primary-700 text-black-1";

      case "SECONDARY":
        return "bg-black-11 hover:bg-black-9 text-black-1";

      case "GHOST":
        return "bg-black-1 bg-opacity-20 hover:bg-black-1 hover:bg-opacity-30 text-black-1";

      case "DEFAULT":
        return "bg-black-4 hover:bg-black-5 text-black-12";
    }
  }, [variant]);

  const sizeStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return "h-12 px-7";

      case "LARGE":
        return "h-20 px-7";

      case "DEFAULT":
        return "h-16 px-7";
    }
  }, [size]);

  return (
    <button
      className={`${variantStyle} ${sizeStyle} rounded-lg justify-center items-center gap-2.5 inline-flex apply-transition ${className}`}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
