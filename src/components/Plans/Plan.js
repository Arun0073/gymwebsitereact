import React from 'react'
import './Plan.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'

const Plan = () => {
  return (
    <div className='plan-container' id='plans'>
    <div className="blur plan-blur-1"></div>
    <div className="blur plan-blur-2"></div>
      <div className="program-header" style={{gap:'2rem',}}>
        <span className='stroke-text'>Ready to start</span>
        <span>Your journey</span>
        <span className='stroke-text'>now with us</span>
      </div>

      <div className="plans">
        {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature,i)=>(
<div className="feature">
    <img src={whiteTick} alt="" />
    <span key={i}>{feature}</span>
</div>
        ))}
                </div>

                <div><span>See more benefits &#8594; </span></div>
                <button className='btn'>Join Now</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Plan
