'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import {  TitleText, TypingText } from '../components';
import { staggerContainer, slideIn } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 relative`}
    >
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
        {/* Image Container */}
        <div className="relative">
          {/* Image */}
          <img
            src="\Screenshot 2023-07-21 at 23-16-11 Tripti (@notebook._23) Instagram.png"
            alt="hero_cover"
            className="w-full sm:h-[400px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 ">
            <TitleText title="'Every artist was first an amateur.'"  />
            <TypingText title="- Ralph Waldo Emerson" />
            
          </div>
        </div>

       
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;