import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 400,
          }}
          className='bg-tertiary py-5 px-12 min-h-[280px] flex 
             justify-evenly items-center flex-col rounded-[20px] '>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold mt-4 text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.heroHeadText}>Overview</h2>

      </motion.div>
      <motion.p

        variants={fadeIn("", "", 0.1, 1)}

        className='mt-4 text-secondary text-[18px] max-w-3xl
      leading-[30px] '>
        I'm a skilled SOftware developer With
        experience in TypeScript and
        javaScript, and expertise in frameworks
        like React, Node.js, and
        three.js. I'm a quick learner and
        collaborate closely with clients to
        create efficient, scalable, and
        user-friendly solutions that solve
        real-world problems. Let's work together
        to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");