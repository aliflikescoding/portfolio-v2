"use client";

import { motion } from "framer-motion";

const FramerMotionWrapper = ({ children, duration = 0.5 }) => {
  const variants = {
    initial: { opacity: 0, y: 60 },
    middle: { opacity: 0.1, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotionWrapper;
