'use client';

import { AnchorProps } from "@/types/Anchor.types";
import { motion, useScroll } from "framer-motion";

const Anchor: React.FC<AnchorProps> = ({
  topRef,
  outlineRef,
  profileRef,
  researchRef,
  activityRef,
  inquireRef,
}: AnchorProps) => {
  const { scrollYProgress: topScrollYProgress } = useScroll({
    target: topRef,
    offset: ['start', 'start'],
  })
  const { scrollYProgress: outlineScrollYProgress } = useScroll({
    target: outlineRef,
    offset: ['end end', 'end center'],
  })
  const { scrollYProgress: profileScrollYProgress } = useScroll({
    target: profileRef,
    offset: ['start center', 'end center'],
  })
  const { scrollYProgress: researchScrollYProgress } = useScroll({
    target: researchRef,
    offset: ['start end', 'end center'],
  })
  const { scrollYProgress: activityScrollYProgress } = useScroll({
    target: activityRef,
    offset: ['start end', 'end center'],
  })
  const { scrollYProgress: contactScrollYProgress } = useScroll({
    target: inquireRef,
    offset: ['start end', 'end'],
  })

  return (
    <div>
      <div className="fixed left-24 -z-10 my-40 flex flex-col gap-10 text-2xl font-bold text-fuchsia-400 lg:z-10">
        <a href="#top" className="flex item-center">
          <div className="flex flex-row justify-center">
            <svg width="30" height="30" viewBox="0 0 100 100" className="mx-3">
              <motion.polygon
                points="0,100 0,0 100,50"
                fill="none"
                style={{
                  strokeWidth: "10",
                  pathLength: topScrollYProgress,
                }}
                className="triangle"
              />
            </svg>
            <span>top</span>
          </div>
        </a>
        <a href="#outline" className="flex item-center">
          <div className="flex flex-row justify-center">
            <svg width="30" height="30" viewBox="0 0 100 100" className="mx-3">
                <motion.polygon
                  points="0,100 0,0 100,50"
                  fill="none"
                  style={{
                    strokeWidth: "10",
                    pathLength: outlineScrollYProgress,
                  }}
                  className="triangle"
                />
            </svg>
            <span>outline</span>
          </div>   
        </a>
        <a href="#profile" className="flex item-center">
          <div className="flex flex-row justify-center">
            <svg width="30" height="30" viewBox="0 0 100 100" className="mx-3">
                <motion.polygon
                  points="0,100 0,0 100,50"
                  fill="none"
                  style={{
                    strokeWidth: "10",
                    pathLength: profileScrollYProgress,
                  }}
                  className="triangle"
                />
              </svg>
            <span>profile</span>
          </div>
        </a>
        <a href="#research" className="flex item-center">
          <div className="flex flex-row justify-center">
            <svg width="30" height="30" viewBox="0 0 100 100" className="mx-3">
                <motion.polygon
                  points="0,100 0,0 100,50"
                  fill="none"
                  style={{
                    strokeWidth: "10",
                    pathLength: researchScrollYProgress,
                  }}
                  className="triangle"
                />
            </svg>
            <span>research</span>
          </div>
        </a>
        <a href="#activity" className="flex item-center">
          <div className="flex flex-row justify-center">
            <svg width="30" height="30" viewBox="0 0 100 100" className="mx-3">
                  <motion.polygon
                    points="0,100 0,0 100,50"
                    fill="none"
                    style={{
                      strokeWidth: "10",
                      pathLength: activityScrollYProgress,
                    }}
                    className="triangle"
                  />
            </svg>
            <span>activity</span>
          </div>
        </a>
        <a href="#contact" className="flex item-center">
          <div className="flex flex-row justify-center">
            <svg width="30" height="30" viewBox="0 0 100 100" className="mx-3">
                    <motion.polygon
                      points="0,100 0,0 100,50"
                      fill="none"
                      style={{
                        strokeWidth: "10",
                        pathLength: contactScrollYProgress,
                      }}
                      className="triangle"
                    />
            </svg>
            <span>contact</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Anchor;