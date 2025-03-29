import React from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar/Narbar';

export default function vine() {
  return (
    <>
      <Navbar></Navbar>
      <div className="justify-items-center min-h-[calc(100vh-64px)] p-8 pb-20 gap-16 bg-slate-900">
          <div className={"text-[2.5rem] md:text-5xl font-bold text-center"}>
            VineTech
          </div>
          <div className={"text-1xl font-bold text-center"}>
            2022 023
          </div>
      </div>
    </>
  );
};
