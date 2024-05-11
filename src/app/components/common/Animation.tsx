import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1.5
    }
  }
};
