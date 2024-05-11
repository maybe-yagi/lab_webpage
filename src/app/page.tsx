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
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const topRef = useRef(null);
  const outlineRef = useRef(null);
  const profileRef = useRef(null);
  const researchRef = useRef(null);
  const activityRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="bg-gray-50 text-fuchsia-400 p-10 relative">
        <Anchor topRef={topRef} outlineRef={outlineRef} profileRef={profileRef} researchRef={researchRef} activityRef={activityRef} inquireRef={contactRef}/>
        <div className="flex flex-col items-center gap-24">
          <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
          <Top topRef={topRef}/>
          <Outline outlineRef={outlineRef}/>
          <Profile profileRef={profileRef}/>
          <Research researchRef={researchRef}/>
          <Activity activityRef={activityRef}/>
          <Contact contactRef={contactRef}/>
        </div>
      </div>
    </>
  );
}

export default Home;
