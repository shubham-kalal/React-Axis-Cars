import React from 'react'
import '../Style/Collection.css'


const Collection = () => {
  return (
   <>
      <div className="car-collection">
        <div className="container">
            <div className="inner-main">
                <h2>Your Ultimate Driving Experience <br />
                Begins Here</h2>
                <p> where each vehicle is meticulously crafted to elevate your driving experience <br />
                to unparalleled levels of luxury and performance.</p>

                <div className="scroll-collection">
                    <div className="car-scroll">
                        <img src="./scroll image1.gif" alt="" />
                        <img src="./scroll image2.gif" alt="" />
                        <img src="./scroll image3.gif" alt="" />
                        <img src="./scroll image1.gif" alt="" />
                    </div>
                    

                    <div className="scroll-text">
                        <h4>Convertible Elegance</h4>
                        <h5>Top-down luxury, combining style with exhilarating open-air experiences.</h5>

                        <h4>Convertible Elegance</h4>
                        <h5>Top-down luxury, combining style with exhilarating open-air experiences.</h5>

                        <h4>Convertible Elegance</h4>
                        <h5>Top-down luxury, combining style with exhilarating open-air experiences.</h5>

                        <h4>Convertible Elegance</h4>
                        <h5>Top-down luxury, combining style with exhilarating open-air experiences.</h5>

                    </div>

                </div>
            </div>
        </div>
      </div>
   </>
  )
}

export default Collection