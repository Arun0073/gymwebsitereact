import React, { useState } from 'react'
import './Testimonial.css';
import {testimonialsData} from '../../data/testimonialsData'
import daayaArrow from '../../assets/leftArrow.png'
import baayaArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonial = () => {
  const transition={type:'spring', duration: 3}
const length=testimonialsData.length;
  const[selected,setSelected]=useState(0);

  return (
    <div className='Testimonial' id='testimonial'>
      <div className="daaya2">
        <span>Testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={transition}>
        {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{color:"var(--orange)"}}>
            {testimonialsData[selected].name}
          </span> {" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="baaya2">
      <motion.div
        initial={{opacity:0, x:-100}}
whileInView={{opacity:1, x:0}}
        transition={{...transition, duration:2}}

      ></motion.div>

      <motion.div
        initial={{opacity:0, x:100}}
whileInView={{opacity:1, x:0}}
        transition={{...transition, duration:2}}
      ></motion.div>

        <motion.img
        key={selected}
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={transition}
        
         src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img onClick={()=>{
            selected===0?setSelected(length-1):
            setSelected((prev)=>prev-1)
          }} src={daayaArrow} alt="" />
          <img
          onClick={()=>{
            selected===length-1?setSelected(0):
            setSelected((prev)=>prev+1)
          }} src={baayaArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
