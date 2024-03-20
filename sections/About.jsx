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
  <span className="font-extrabold text-white">WARNING: </span> Entering Sketchbook Stories may lead to uncontrollable giggling, existential questions about your own artistic skills, and a sudden urge to hoard all the glitter.
  <br/><br/>
  Yes, that's right, I'm a B.Tech student by day, and a slightly sleep-deprived art warrior by night (or whenever those pesky engineering deadlines allow). Here, you'll find a chaotic mix of doodles, sketches, and digital art that's basically my brain on caffeine and way too much inspiration.
  <br/><br/>
  So, join me on this wild ride of self-expression, where I attempt to turn my imagination into something other than a never-ending loop of cat videos. Who knows, maybe my art will actually speak to your heart (or at least make you snort out your coffee). Welcome to <span className="font-extrabold text-white">Sketchbook Stories</span>, where anything goes and the only limit is how many pens I can lose in a single sitting.
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
