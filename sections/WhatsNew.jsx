import { motion } from 'framer-motion';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >  
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
       <div className="mt-5"> {/* Added padding to create distance */}
          <TypingText title="| Brushstrokes of Wonder!" />
          <TitleText title={<>Is My Art Self-Taught or Self-Thought?</>} />
        </div>
        <div className="mt-6">
          <p className="text-lg text-center text-[#bcbdbe]">
            As a self-taught artist, drawing inspiration from Pinterest, Instagram, and Google ignites a creative journey filled with diverse ideas. Armed with simple paper or digital tools, I sketch and create, giving life to unique expressions of art. It's a dance of curiosity, discovery, and dedication that empowers me to share the magic of my self-taught art with the world.
          </p>
        </div>
        
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="\confuseboi (2).png"
          alt="get-started"
          className="w-[90%] h-[80%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);
export default WhatsNew;