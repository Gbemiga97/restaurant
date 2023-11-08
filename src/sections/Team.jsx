import { data, variants } from "../utils"
import { motion } from "framer-motion"

const Team = () => {

  const {pretitle, title, sub1, sub2, signatureImg, name, occupation, chefImg} = data.teamData

  return (
    <section id="team" className=" pt-32 relative top-96 z-10 lg:top-[480px] min-h-[720px]">
      <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start">

        <motion.div 
        variants={variants.fadeIn('down', 'tween', 0.6, 1.6)}
        initial='hidden'
        whileInView={'show'}
        className="flex-1 text-center lg:text-left lg:pt-16">
          <h5 className="pretitle">
            {pretitle}</h5>
          <h2 className="h2 capitalize">
            {title}</h2>
            <p className="mb-[68px]">{sub1}</p>
            <p>{sub2}</p>
            <div className="my-[26px]">
              <p className="text-2xl capitalize font-semibold text-accent ">
                {name}</p>
              <p className="text-[15px] font-semibold capitalize text-grey/70">
                {occupation}</p>
            </div>
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <img src={signatureImg} alt="signature" />
            </div>
        </motion.div>


          <motion.div 
          variants={variants.fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={'show'}
          className="flex-1">
            <img src={chefImg} alt="chef" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Team