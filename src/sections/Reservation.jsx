import ReactDatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from "react-time-picker"
import '../timepicker.css'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { data, variants } from "../utils"
import {FaUsers, FaCalendar, FaClock} from 'react-icons/fa'
import { motion } from "framer-motion"
import { useState } from "react"



const Reservation = () => {

  const {title, subtitle, btnText, modelImg} = data.reservationData
  
  const [startDate, setStartDate] = useState(new Date()) 

  const [value, setValue] = useState('10:00')


  return (
    <section id="book" className=" pt-32 relative top-96 z-30 pb-20 lg:py-[100px]">
      <div className="container mx-auto">

        <motion.div
        variants={variants.staggerContainer}
        initial='hidden'
        whileInView={'show'}
        className="text-center">
          <motion.h2
          variants={variants.fadeIn('up', 'tween', 0.2, 1.6 )}
          className="h2 capitalize">
            {title}
          </motion.h2>
          <motion.p 
          variants={variants.fadeIn('up', 'tween', 0.4, 1.6)}
          className="mb-8 text-dark">
            {subtitle}</motion.p>
            <motion.div 
          variants={variants.fadeIn('up', 'tween', 0.6, 1.6)}
            className="flex justify-center mb-8">
              <img src={modelImg} alt="model" />
            </motion.div>
        </motion.div>

        <motion.form
        variants={variants.fadeIn('up', 'tween', 0.7, 1.6)}
        initial='hidden'
        whileInView={'show'}
        >
          <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8">

         
          <div>
         <div className="flex items-center gap-x-[10px] font-semibold text-dark
         text-base mb-3">
         <FaCalendar />
          <p>Choose Date</p>
         </div>
         <ReactDatePicker  className="input"
         selected={startDate}
         onChange={(date) => setStartDate(date)}
         />
          </div>

        <div>
         <div className="flex items-center gap-x-[10px] font-semibold text-dark
         text-base mb-3">
         <FaClock />
          <p>Choose Time</p>
         </div>
         <TimePicker 
          className="input"
         clearIcon={false}
         clockIcon={false}
         onChange={setValue}
         value={value}
         />
          </div>

          <div>
          <div className="flex items-center gap-x-[10px] font-semibold text-dark
         text-base mb-3">
         <FaUsers />
          <p>Choose Time</p>
          </div>
          <input
          className="input"
          type="text" placeholder="1" />
          </div>
          </div>

         <div className="max-w-[316px] mx-auto flex justify-center ">
          <button className="btn capitalize w-full lg:w-auto">
            {btnText}
          </button>
         </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Reservation