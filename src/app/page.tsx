'use client';

import Image from "next/image";
import Outline from "@/app/components/layout/Outline/Outline";
import Profile from "./components/layout/Profile/Profile";
import { NextPage } from "next";
import React, { useRef, useEffect } from "react";

const Home = () => {
  const topRef = useRef(null);
  const outlineRef = useRef(null);


  return (
    <div>
      <div className="my-10 flex flex-col items-center gap-20">
        <Outline />
        <Profile />
      </div>
    </div>
  );
}

export default Home;
