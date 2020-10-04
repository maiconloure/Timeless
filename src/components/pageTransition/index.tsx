import { motion } from 'framer-motion';
import React from 'react';

interface AuxProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<AuxProps> = (props) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}>
      {props.children}
    </motion.div>
  );
};

export default PageTransition;
