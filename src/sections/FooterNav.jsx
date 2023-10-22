import { BsLinkedin, BsFacebook } from 'react-icons/bs'
const date = new Date().getFullYear()
const FooterNav = () => {
  return (
    <section
      id="footer"
      className="flex flex-col justify-center items-center gap-5 sm:px-9 p-5 bg-[#232127] text-white/60 text-lg "
    >
      <nav className="flex sm:flex-row flex-col justify-center items-center w-[90%]">
        <div className="flex sm:flex-row flex-col w-full justify-between items-center px-10">
          <div className="text-3xl font-bold text-white">e2e</div>
          <a
            href="#about"
            className="px-5 py-2 font-bold hover:text-white transition"
          >
            About
          </a>
          <a
            href="#services"
            className="px-5 py-2 font-bold hover:text-white transition"
          >
            Services
          </a>
          <a
            href="#whyus"
            className="px-5 py-2 font-bold hover:text-white transition"
          >
            Why Us
          </a>
          <a
            href="#contact"
            className="px-5 py-2 font-bold hover:text-white transition"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-white transition"
          >
            <BsLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-white transition"
          >
            <BsFacebook />
          </a>
        </div>
      </nav>
      <hr className="w-[90%] " />
      <div className='text-sm sm:w-[78vw] w-[95vw] mx-auto mb-2 sm:text-left text-center'>
        &copy;{date} | e2e Group{' '}
      </div>
    </section>
  )
}

export default FooterNav
