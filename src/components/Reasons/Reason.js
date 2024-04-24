import React from 'react'
import './Reason.css'
import image_1 from '../../assets/image1.png'
import image_2 from '../../assets/image2.png'
import image_3 from '../../assets/image3.png'
import image_4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reason = () => {
  return (
    <div className='Reason' id='reason'>
    <div className="daaya1">
        <img src={image_1} alt="" />
        <img src={image_2} alt="" />
        <img src={image_3} alt="" />
        <img src={image_4} alt="" />
    </div>
    <div className="baaya1">
<span>some reasons</span>
<div>
<span className='stroke-text'>why to</span>
<span> choose us?</span>
</div>

<div className='details'>
<div>
<img src={tick} alt=""></img>
<span>140+ Expert Coaches</span>
</div>
<div>
<img src={tick} alt="" />
<span>Train Smarter and Faster than Besfore</span>
</div>
<div>
<img src={tick} alt="" />
<span>Free Program for new Members </span>
</div>
<div>
<img src={tick} alt="" />
<span>Reliable Partner</span>
</div>
</div>
<span style={{color:"var(--gray)",
fontWeight:"normal",}}>OUR PARTNERS</span>
<div className="partners">
    <img src={nb} alt="" />
    <img src={adidas} alt="" />
    <img src={nike} alt="" />
</div>

    </div>
    </div>
  )
}

export default Reason
