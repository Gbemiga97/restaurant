import { motion } from "framer-motion"
import { data, variants } from "../utils"

const About = () => {

  const {pretitle, title, subtitle, btnText, image} = data.aboutData

  return (
    <section id="about"  className="pt-32 lg:pt-0 min-h-[620px]">
      <div  className="container mx-auto min-h-[620px]">
        <motion.div 
        variants={variants.staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="min-h-[620px] flex flex-col lg:flex-row items-center">

          <motion.div 
          variants={variants.fadeIn('right', 'tween', 0.2, 1.8)}
          className="flex-1 text-center lg:text-left">
            <p className="pretitle">
              {pretitle}</p>
            <h2 className="h2 capitalize">
              {title}
            </h2>
            <p className="mb-8 max-w-[560px]">
              {subtitle}</p>
              <button className="btn capitalize mx-auto lg:mx-0">
                {btnText}
              </button>
          </motion.div>

          <motion.div 
          variants={variants.plateVariants}
          className="-mb-[300px] -mr-[186px] z-10">
            <img src={image} alt="dish" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About