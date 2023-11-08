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
    className='fixed w-full nax-w-[1800px] z-50 py-4'>
      <div className="container mx-auto">
        <div>

          <motion.button
          className={`flex flex-col`}
          onClick={() => setShowNav(prev => !prev)}
          >
          
          </motion.button>

          <div>
            <Link>
            <img 
            className={`${header ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'}`}
            src={images.LogoWhite} 
            alt="logo" />
            </Link>
          </div>

          <div>
            <Socials />
          </div>

          <motion.div 
          variants={variants.navVariants}
          initial='hidden'
          animate={showNav ? 'show' : ''}
          className="absolute bg-accent w-[320px] h-[50vh] right-0 lg:left-0
          top-[120px] bottom-0 z-50 rounded-lg shadow-xls">
            <Nav />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header