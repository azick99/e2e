import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { cards } from '../data/cards'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'

const WhyUs = () => {
  return (
    <SectionWrapper>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        id="whyus"
        className="flex flex-col sm:gap-11 gap-6 widescreen:section-min-height tallscreen:section-min-height scroll-mt-28"
      >
        <motion.span
          variants={textVariant()}
          className="uppercase text-blue text-sm leading-[1.10] font-semibold "
        >
          Why Us
        </motion.span>
        <div className="flex flex-col gap-10">
          <div className="flex sm:flex-row flex-col gap-10">
            {cards.map((card) => (
              <motion.div
                variants={fadeIn('up', 0.3, 0.2)}
                className=" relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-lg bg-clip-border"
                key={card.id}
              >
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-56 rounded-lg bg-clip-border">
                  <span className="absolute top-3 left-3 z-10 text-white ">
                    {card.icon}
                  </span>
                  <img
                    src={card.image}
                    alt="data-base"
                    className="object-cover w-full h-full"
                  />
                </div>
                <article className="p-6 flex flex-col gap-2 sm:text-start text-center">
                  <h3 className="heading-size-3">{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </SectionWrapper>
  )
}

export default WhyUs
