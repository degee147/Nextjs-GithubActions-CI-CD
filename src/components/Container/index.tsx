import React, {HTMLAttributes} from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
}

function Container({children, className}: IProps) {
  return (
    <div className={`w-full md:w-10/12 max-w-[1420px] mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
