import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const instagramId = 'your_instagram_username'; // Replace 'your_instagram_username' with your actual Instagram username

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      {/* Card for Instagram Follow */}
      
       
       

        <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
       <div className="mt-5"> {/* Added padding to create distance */}
       
          <TitleText title={<>Follow Me on Insta!</>} />
        </div>
       
        
      </motion.div>
     

      {/* Instagram Icon */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <a
          href={`https://www.instagram.com/${'notebook._23'}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src="\instagram-Logo-PNG-Transparent-Background-download.png" 
            alt="Instagram Icon"
            className="w-60 h-60 full cursor-pointer"
            whileHover={{ rotate: 5, scale: 1.1 }} // Add the whileHover animation
          />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
