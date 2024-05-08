'use client';

import dynamic from "next/dynamic";
import Outline from "@/app/components/layout/Outline/Outline";
import Profile from "./components/layout/Profile/Profile";
import React, { useRef, useEffect } from "react";
import Anchor from "./components/layout/Anchor/Anchor";
const Research = dynamic(() => import("./components/layout/Research/Research"), {
  ssr: false
});
import Activity from "./components/layout/Activity/Activity";
import Top from "./components/layout/Top/Top";
import Contact from "./components/layout/Contact/Contact";
import Image from "next/image";

const Home = () => {
  const topRef = useRef(null);
  const outlineRef = useRef(null);
  const profileRef = useRef(null);
  const researchRef = useRef(null);
  const activityRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-gray-50 text-fuchsia-400 p-10 relative">
      <Anchor />
      <div className="flex flex-col items-center gap-20">
        <Top topRef={topRef}/>
        <Outline outlineRef={outlineRef}/>
        <Profile profileRef={profileRef}/>
        <Research researchRef={researchRef}/>
        <Activity activityRef={activityRef}/>
        <Contact contactRef={contactRef}/>
      </div>
      <Image src='/images/noumiso_sukesuke.png' width={100} height={100} className="absolute right-0 buttom-10" alt=""/>
    </div>
  );
}

export default Home;
