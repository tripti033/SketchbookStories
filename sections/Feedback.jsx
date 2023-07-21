'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} my-20`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[40000px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
      
        <p className=" font-normal sm:text-[23px] text-[18px] sm:leading-[54.6px] leading-[39.6px] text-white">
          “Whoa! Move over famous artists, we've got a new creative genius in town! Your art is so fantastic that even Leonardo da Vinci wishes he could paint like you! Keep up the amazing work, you're the real star of the art world! 🎨😎”
        </p>
        <div>
         
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px]  text-white">
            ~ Mona Lisa
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="\bhoot.jpg"
          alt="planet-09"
          className="w-[455px] lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

       
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
