import React, { useState } from 'react'
import "../Style/Slider.css"

const Slider = () => {
  return (
   <>
   <div className="main-slider">
    <div className="container">
        <div className="slider">
            <h2>A World of <br />
            Automotive Excellence</h2>
            <p>  where each vehicle is meticulously crafted to elevate your driving experience  <br />
            to unparalleled levels of luxury and performance.</p>

            <div className="slider-image">
                <img src="./Gallery image1.png" alt="" />
                <img src="./Gallery image2.png" alt="" />
                <img src="./Gallery image3.png" alt="" />
                <img src="./Gallery image4.png" alt="" />
            </div>
        </div>
    </div>

   
   </div>
   
   </>
  )
}




export default Slider