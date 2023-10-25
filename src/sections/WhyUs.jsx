import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { cards } from '../data/cards'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { BsCalendarCheck } from 'react-icons/bs'

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
          className="heading-size-2 sm:text-start text-center"
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
          <div
            className="flex flex-col items-center sm:p-14 p-5 text-center gap-3  sm:gap-5  w-full border border-solid border-[#E3EBF2] 
          "
          >
            <BsCalendarCheck className="w-6 h-6 text-primary" />
            <h3 className="heading-size-3">Book your free consultation now</h3>
            <p>
              e2e team is always in line call us and, we answer to all questions
              and give more information{' '}
            </p>
            <a href='#contact' className=' uppercase py-[1.125rem] px-6 bg-primary text-white text-sm font-semibold leading-3 self-center'>get started</a>
          </div>
        </div>
      </motion.section>
    </SectionWrapper>
  )
}

export default WhyUs
