import { services } from '../data/services'
import { BsCheckLg } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant } from '../utils/motion'
import SectionWrapper from '../components/SectionWrapper'

const Services = () => {
  return (
    <SectionWrapper>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        id="services"
        className="flex flex-col gap-10 sm:gap-60px px-6 py-8 md:p-10 lg:p-52px md:py-20 lg:py-[6.25rem] bg-white border border-solid border-[#E3EBF2] widescreen:section-min-height tallscreen:section-min-height scroll-mt-20"
      >
        <motion.article
          variants={textVariant(1)}
          className="flex flex-col lg:flex-row sm:gap-52px gap-4 w-full"
        >
          <div className="flex flex-col gap-3">
            <span className="uppercase text-blue text-sm leading-[1.10] font-semibold">
              services
            </span>
            <h2 className="heading-size-2">
              e2e engineers offer all services which Data Centers need to.
            </h2>
          </div>
          <p className="self-end">
            We are a dedicated team of professionals with deep expertise in data
            center infrastructure installation. Our main purpose is
            clients&apos; satisfaction.{' '}
          </p>
        </motion.article>
        {/* Service checking */}
        <div className="flex flex-col gap-8 !last:border-b-white">
          {services.map((service) => (
            <motion.div
              variants={textVariant(service.id === 1 ? 1 : service.id - 0.9)}
              key={service.id}
              className="flex sm:pb-6 pb-8 sm:gap-4 gap-5  border-solid border-b border-b-white-primary"
            >
              <div className="p-3 border border-solid border-[#E5EBF5] bg-[#FAFCFF]">
                <BsCheckLg className="w-[24px] h-[24px] text-blue" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.25rem]">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SectionWrapper>
  )
}

export default Services
