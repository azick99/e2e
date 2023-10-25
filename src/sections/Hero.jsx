import whiteTech from '../assets/white-tech.jpg'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <motion.section
      id="about"
      className={`pb-[100px] pt-[80px] flex justify-center relative ease-out scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={whiteTech}
        alt="white tech"
        className="absolute w-full sm:h-[98%] h-full object-cover top-0 -z-10"
      />
      <motion.article
        className="flex flex-col gap-5 md:w-[60vw] w-[90vw] text-center items-center ease-out"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
      >
        <span className="uppercase text-blue text-sm font-semibold">
          e2e provides a complete{' '}
        </span>
        <h1>
          Package of network installation and maintenance services for your
          network infrastructure, all under one roof.
        </h1>
        <p className="md:w-[60%] w-[100%] ">
          Our solutions include efficient management of your network
          infrastructure, ensuring smooth connectivity and optimal performance.
        </p>
      </motion.article>
    </motion.section>
  )
}

export default Hero
