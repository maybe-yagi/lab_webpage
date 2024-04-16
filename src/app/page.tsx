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
import Inquire from "./components/layout/Inquire/Inquire";

const Home = () => {
  const topRef = useRef(null);
  const outlineRef = useRef(null);
  const profileRef = useRef(null);
  const researchRef = useRef(null);
  const activityRef = useRef(null);
  const inquireRef = useRef(null);

  return (
    <div>
      <Anchor />
      <div className="my-10 flex flex-col items-center gap-20">
        <Top topRef={topRef}/>
        <Outline outlineRef={outlineRef}/>
        <Profile profileRef={profileRef}/>
        <Research researchRef={researchRef}/>
        <Activity activityRef={activityRef}/>
        <Inquire inquireRef={inquireRef}/>
      </div>
    </div>
  );
}

export default Home;
