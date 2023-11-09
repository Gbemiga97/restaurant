import { motion } from "framer-motion"
import { data, variants } from "../utils"
import { Copyright, NewsLetter, Socials } from "../components"



const Footer = () => {

  const {contact, hours, social} = data.footerData

  return (
    <footer id="contact" className="relative top-96 bg-dark lg:bg-transparent lg:min-h-[620px]
    lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        <motion.div 
        variants={variants.staggerContainer}
        initial='hidden'
        whileInView={'show'}
        className="h-full flex flex-col gap-y-4">

        <motion.div 
        variants={variants.fadeIn('up', 'tween', 0.4, 1.6 )}
        >
          <NewsLetter />
        </motion.div>

        <motion.div 
        variants={variants.fadeIn('up', 'tween', 0.6, 1.6 )}
        className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12">
          
          <div className="flex-1 lg:max-w-[170px]">
            <h5 className="capitalize text-[20px] lg:text-[22px] font-normal text-white 
            font-primary mb-[22px]">
              {contact.title}</h5>
            <p className="capitalize">{contact.address}</p>
            <p className="capitalize">{contact.phone}</p>
          </div>

          <div className="flex-1">
            <h5 className="capitalize text-[20px] lg:text-[22px] font-normal text-white 
            font-primary mb-[22px]">
              {hours.title}</h5>
            <div className="flex gap-x-[46px]">
              {
                hours.program.map(({days, hours}, i) => (
                  <div key={i} 
                  className="capitalize">
                    <div>
                      <p>{days}</p>
                      <p className="text-[20px] text-accent">
                        {hours}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="flex-1 lg:max-w-[288px] mb-12">
            <h5 className="capitalize text-[20px] lg:text-[22px] font-normal text-white 
            font-primary mb-[22px]">
              {social.title}
            </h5>
            <Socials />
          </div>
        </motion.div>

      <Copyright />
      </motion.div>
      </div>
    </footer>
  )
}

export default Footer