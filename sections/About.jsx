'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

  <motion.p
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
>
  <span className="font-extrabold text-white">WARNING: </span> Entering Sketchbook Stories may cause an unexpected desire to code less and create more.
  <br/><br/>
  Hi! I'm a B.Tech student specializing in AI and a digital artist who somehow finds time between debugging and deadlines to draw. Sketchbook Stories is my creative outlet—a blend of doodles, digital experiments, and visual thoughts that escape while my IDE updates.
  <br/><br/>
  Think of it as a sketch-dump with a soul: part caffeine, part chaos, and a whole lot of color. Sometimes it's expressive, sometimes experimental—and occasionally, it's just what my brain needed after writing one too many backend APIs.
  <br/><br/>
  Welcome to <span className="font-extrabold text-white">Sketchbook Stories</span>, where art meets algorithms, and inspiration doesn’t wait for the weekend.
</motion.p>



      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
