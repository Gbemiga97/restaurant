import { data, variants } from "../utils"
import { motion } from "framer-motion"

const Hero = () => {

  const {pretitle, title, subtitle, btnText} = data.heroData


  return (
   <section className="min-h-[980px] bg-hero bg-cover bg-right">
    <div className="container mx-auto min-h-[980px] flex justify-center items-center">

      <motion.div 
      variants={variants.staggerContainer(0.3, 1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true}}
      className="text-center flex flex-col items-center">

        <motion.p 
        variants={variants.fadeIn('down', 'tween', 0.2, 1.1)}
        className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1">
          {pretitle}</motion.p>

        <motion.h1 
        variants={variants.fadeIn('down', 'tween', 0.3, 1.1)}
        className="h1 mb-5">
          {title}</motion.h1>

        <motion.p
        variants={variants.fadeIn('down', 'tween', 0.4, 1.1)}
        className="text-white max-w-[540px] mb-8">
          {subtitle}</motion.p>

        <motion.div 
      variants={variants.fadeIn('down', 'tween', 0.6, 1.1)}
        className="btn">
          <button>
          {btnText}
          </button>
          </motion.div>
      </motion.div>
    </div>
   </section>
  )
}

export default Hero