import { motion } from "framer-motion"
import { useState } from "react"
import { images, variants } from "../utils"
import { useEffect } from "react"
import { Nav, Socials } from "../components"
import { Link } from "react-scroll"

const Header = () => {

  const [header, setHeader] = useState(false)

  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })

  return (
    <motion.header 
    variants={variants.headerVariants}
    initial='hidden'
    animate={header ? 'show' : ''}
    className='fixed w-full max-w-[1800px] z-50 py-4'>
      <motion.div 
      variants={variants.staggerContainer(0.3, 1)}
      initial='hidden'
      animate={'show'}
      className="container mx-auto">
        <div className='flex justify-between items-center px-4 lg:px-0 relative text-white'>

          <motion.button
          variants={variants.fadeIn('down', 'tween', 1, 1.4)}
          className={`${showNav ? 'gap-y-0' : 'gap-y-2'}
          flex flex-col  items-center justify-center w-12 h-12
          p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
          onClick={() => setShowNav(prev => !prev)}
          >
          <motion.div
          initial={{
            rotate: 0,
          }} 
          animate={{
            rotate: showNav ? -45 : 0, 
            translateY: showNav ? 2 : 0
          }}
          className="w-full h-[2px] bg-white"
          />

           <motion.div
          initial={{
            rotate: 0,
          }} 
          animate={{
            rotate: showNav ? 45 : 0
          }}
          className="w-full h-[2px] bg-white"
          />


          </motion.button>

          <motion.div
          variants={variants.fadeIn('down', 'tween', 1.2, 1.4)}
          >
            <Link
            to="/"
            spy={true}
            className="cursor-pointer"
            onClick={() => setShowNav(false)}
            >
            <img 
            className={`${header ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'}`}
            src={images.LogoWhite} 
            alt="logo" />
            </Link>
          </motion.div>

          <motion.div
          variants={variants.fadeIn('down', 'tween', 1.4, 1.4)}
          className="hidden lg:flex">
            <Socials />
          </motion.div>

          <motion.div 
          variants={variants.navVariants}
          initial='hidden'
          animate={showNav ? 'show' : ''}
          className="absolute bg-accent w-[320px] h-[50vh] right-0 lg:left-0
          top-[120px] bottom-0 z-50 rounded-lg shadow-xls">
            <Nav setShowNav={setShowNav} />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header