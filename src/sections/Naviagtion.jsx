import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      className="bg-white border border-solid border-[#E3EBF2] p-4 w-full fixed z-50 top-0"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeIn(0.3, 0.5)}
        className="container mx-auto flex justify-between items-center"
      >
        <a href="#about">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-[42px] h-[42px] rounded-[10px] mr-5"
          />
        </a>
        <button type="button" onClick={toggleMenu} className="sm:hidden">
          {isOpen ? (
            <FaTimes className="h-5 w-5 text-secondary" />
          ) : (
            <FaBars className="h-5 w-5 text-secondary" />
          )}
        </button>
        <div
          className={`sm:flex items-center sm:static absolute top-14 z-10 sm:w-full w-[90%] sm:bg-white bg-slate-100 rounded-xl ${
            isOpen ? 'block scale-up-tr' : 'hidden'
          }`}
        >
          <ul className="sm:flex gap-3 w-full items-center text-sm transition-all">
            <li className="text-center sm:p-0 py-3 mt-3 sm:mt-0 text-primary/80 hover:text-primary ">
              <a href="#about" className="p-2 sm:w-full">
                About
              </a>
            </li>
            <li className="text-center sm:p-0 py-3 text-primary/80 hover:text-primary ">
              <a href="#services" className="p-2 sm:w-full">
                Services
              </a>
            </li>
            <li className="sm:w-20 text-center sm:p-0 py-3 text-primary/80 hover:text-primary ">
              <a href="#whyus" className="py-2 sm:w-full">
                Why Us
              </a>
            </li>
            <div className="flex flex-col sm:flex-row gap-x-6 justify-end items-center sm:w-full">
              <li className="text-center">
                <a href="#contact" className="p-2 sm:w-full">
                  <Button type="button" buttonType="contact">
                    Contact
                  </Button>
                </a>
              </li>
              {/* <li className="text-center sm:mb-0 mb-4">
                <a href="#services" className="p-2 sm:w-full">
                  <Button type="button" buttonType="getStartWhite">
                    Get Started
                  </Button>
                </a>
              </li> */}
            </div>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation
