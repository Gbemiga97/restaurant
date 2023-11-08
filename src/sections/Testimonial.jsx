import { motion } from "framer-motion"
import { data, variants } from "../utils"
import { TestimonialCarousel } from "../components"




const Testimonial = () => {

  const {title, subtitle, modelImg, slider} = data.testimonialData

  return (
    <section id="testimonials" className="relative top-[340px] lg:top-[390px] z-10 h-[800px]
    bg-testimonial bg-cover bg-no-repeat pt-[60px] md:pt-[120px]">
      <div className="container mx-auto">

        <motion.div 
        variants={variants.fadeIn('up', 'tween', 0.2, 1.6)}
        initial='hidden'
        whileInView={'show'}
        className="text-center capitalize flex flex-col items-center">
          <h2 className="h2 text-white">
            {title}</h2>
          <p className="text-white/70 capitalize mb-8">
            {subtitle}</p>
          <div className="mb-12">
            <img src={modelImg} alt="model" />
          </div>
        </motion.div>

        <motion.div 
         variants={variants.fadeIn('up', 'tween', 0.4, 1.6)}
         initial='hidden'
         whileInView={'show'}
        className="flex justify-center items-center">
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial