import React from 'react'
import './../Banner/style.css'

// IMAGES 
import One from '../../assets/images/icons/1.png'
import Two from '../../assets/images/icons/2.png'
import Three from '../../assets/images/icons/3.png'

// SHAPES IMAGES
import Shape1 from '../../assets/images/shapes/6.png'
import Shape2 from '../../assets/images/shapes/8.png'
import Shape3 from '../../assets/images/shapes/7.png'
import Shape4 from '../../assets/images/shapes/3.png'
import Shape5 from '../../assets/images/shapes/4.png'
import Shape6 from '../../assets/images/shapes/11.png'
import Shape7 from '../../assets/images/shapes/12.png'
import Shape8 from '../../assets/images/shapes/13.png'
import Shape9 from '../../assets/images/shapes/1.png'
import Shape10 from '../../assets/images/shapes/2.png'

function Feature() {
  return (

    <section className="feature-area-2 mt-5" id="feature">

      <div className="container">

        <div className="feature">

          <div className="row gy-lg-0 gy-4">

            <div className="col-lg-4 col-md-6">
              <div className="feature-widget-2 align-items-center wow fadeInRight feature-1" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' }}>

                <div className="shapes">
                  <img src={Shape1} alt="shape" />
                  <img src={Shape2} alt="shape" />
                  <img src={Shape4} alt="shape" />
                  <img src={Shape5} alt="shape" />
                  <img src={Shape3} alt="shape" />
                </div>

                <div className="feature-img">
                  <img src={One} alt="" />
                </div>
                <div className="feature-content">
                  <p>UP TO ₦10,00,000</p>
                  <h6>High Range Loan</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-widget-2 align-items-center wow fadeInRight feature-2" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' }}>
                <div className="shapes">
                  <img src={Shape6} alt="shape" />
                  <img src={Shape7} alt="shape" />
                  <img src={Shape8} alt="shape" />
                  <img src={Shape5} alt="shape" />
                  <img src={Shape3} alt="shape" />
                </div>
                <div className="feature-img">
                  <img src={Two} alt="" />
                </div>
                <div className="feature-content">
                  <p>FROM 4.0%</p>
                  <h6>Offer Low Interest</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-widget-2 align-items-center wow fadeInRight feature-3" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
                <div className="shapes">
                  <img src={Shape9} alt="shape" />
                  <img src={Shape10} alt="shape" />
                  <img src={Shape1} alt="shape" />
                  <img src={Shape5} alt="shape" />
                  <img src={Shape3} alt="shape" />
                </div>

                <div className="feature-img">
                  <img src={Three} alt="" />
                </div>

                <div className="feature-content">
                  <p>24 HOURS PROCESS</p>
                  <h6>Fast &amp; Easy Process</h6>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
      
    </section>

  )
}

export default Feature