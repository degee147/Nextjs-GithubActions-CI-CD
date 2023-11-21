import React from 'react';
import Header from "@/components/Header";

interface IProps {
  children: React.ReactNode;
}

function Layout({children}: IProps) {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}

export default Layout;
