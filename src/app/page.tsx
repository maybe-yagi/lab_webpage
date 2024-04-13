'use client';

import Outline from "@/app/components/layout/Outline/Outline";
import Profile from "./components/layout/Profile/Profile";
import React, { useRef, useEffect } from "react";
import Anchor from "./components/layout/Anchor/Anchor";
import Research from "./components/layout/Research/Research";
import Activity from "./components/layout/Activity/Activity";
import Top from "./components/layout/Top/Top";
import Inquire from "./components/layout/Inquire/Inquire";

const Home = () => {
  const outlineRef = useRef(null);
  const profileRef = useRef(null);

  return (
    <div>
      <Anchor />
      <div className="my-10 flex flex-col items-center gap-20">
        <Top />
        <Outline />
        <Profile />
        <Research />
        <Activity />
        <Inquire />
      </div>
    </div>
  );
}

export default Home;
