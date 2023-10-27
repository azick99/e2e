import whiteTech from '../assets/white-tech.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      id="about"
      className="pb-[100px] pt-[80px] flex justify-center relative ease-out scroll-mt-40 widescreen:section-min-height  tallscreen:section-min-height "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={whiteTech}
        alt="white tech"
        className="absolute w-full sm:h-[95%] h-full object-cover top-0 -z-10"
      />
      <motion.article
        className="flex flex-col gap-5 md:w-[60vw] w-[90vw] text-center items-center ease-out"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
      >
        <span className="uppercase text-blue text-sm font-semibold">
          WELCOME TO E2E
        </span>
        <h1>
          Remote hands services Network infrastructure support Warsaw based EU
          coverage
        </h1>
        <p className="md:w-[90%] w-[100%] ">
          e2e is data center services firm. We manage clients&apos; critical
          network infrustrucure and build new networks.
        </p>
      </motion.article>
    </motion.section>
  )
}

export default Hero
