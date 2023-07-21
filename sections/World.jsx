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
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="\PicsArt_07-20-08.54.16.png"
          alt="get-started"
          className="w-[100%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
       <div className="mt-5"> {/* Added padding to create distance */}
          <TypingText title="| Prepare to be Amazed!" />
          <TitleText title={<>Was I Good from the Start?</>} />
        </div>
        <div className="mt-6">
          <p className="text-lg text-center text-[#bcbdbe]">
          Yes, When I showcased my first masterpiece, even the Mona Lisa blushed with envy. Art historians couldn't decide if my art belonged in a museum or on a spaceship headed to an intergalactic art show.My art teacher wanted to give me a Nobel Prize in Creativity, but they said they hadn't invented it yet! I guess you could say my creativity was out of this world!
          </p>
        </div>
        
      </motion.div>
      
    </motion.div>
  </section>
);
export default WhatsNew;