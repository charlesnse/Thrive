import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Nav from '../../components/Header/Nav'
import './style.css'
import AboutImage from '../../assets/images/about.png'
import AboutImage2 from '../../assets/images/about_2.png'
import AboutBlur from '../../assets/images/about-blur.png'
import Teams from '../../components/Teams/Teams'
import Mission from './Mission'

function About() {
    return (

        <>

            {/* TOP NAV */}

            <Nav />

            {/* HEADER */}

            <Header />

            <BreadCrumb title="About Us" text="Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business ." />

            <div class="about about-area about-style-2 my-5 pt-5">
                <div class="container animated-shape">

                    <div class="row">

                        <div class="col-lg-6 mb-5">
                            <div class="about-image-gallery">

                                <div class="about-1-img-wrapper">

                                    <img class="image-1" src={AboutImage} alt="About Images" />

                                    <span class="about-blur"><img src={AboutBlur} alt="About Blur" /></span>

                                </div>

                                <div class="circle-image-wrapper">
                                    <img class="image-2" src={AboutImage2} alt="About Images" />
                                    <div class="circle-image"><span></span></div>
                                </div>

                                <div class="finished-session bg-white text-center">
                                    <div class="inner">
                                        <div class="text"> 20k </div>
                                        <span class="finished-title">
                                            Approved <br />
                                            Loans
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-6 align-self-center">

                            <div class="inner">

                                <div class="section-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <span class="pre-title">About Us</span>
                                </div>

                                <p class="description my-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800"> Thrive MFB formerly existing as NNEW Women’s Microfinance Bank Ltd is a company duly incorporated in Nigeria and licensed as a Unit Microfinance Bank by Central Bank of Nigeria to carry on the business of Microfinance banking in Nigeria. The shareholders as presently constituted are: </p>

                                {/* LISTS */}

                                <span class="line-before mb-1">
                                    Nigeria Employers Consultative Association (NECA)
                                </span>

                                <span class="line-before mb-1">
                                    NECA’s Network of Entrepreneurial Women (NNEW)
                                </span>

                                <span class="line-before mb-1">
                                    Catilas Resources Limited, a leading HR outsourcing company, and
                                </span>

                                <span class="line-before">
                                    Other women and investors
                                </span>

                                {/* END LISTS */}

                                <p class="description my-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800"> The principal activity of the Bank is the provision of microfinance banking services. Such services include funds mobilization and granting of loans and advances to the designated sub-sector.
                                    Our directors and management team is made up of experienced and respected professionals from diverse backgrounds.
                                    As one of Nigeria’s leading microfinance banks, we are distinguished by our fundamental principles, business philosophy, and approach. </p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* MISSION */}
            <Mission />

            <div class="fun-factor-area relative text-light mb-5">
                <div class="half-bg-top-gray"></div>
                <div class="container">
                    <div class="fun-fact-items text-center">

                        <div class="row">

                            <div class="col-lg-3 col-md-6 item mb-4 mb-lg-0">
                                <div class="fun-fact">
                                    <div class="timer">687</div>
                                    <span class="medium"> Approved Loans </span>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 item mb-4 mb-lg-0">
                                <div class="fun-fact">
                                    <div class="timer">655</div>
                                    <span class="medium">Active clients</span>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 item mb-4 mb-lg-0">
                                <div class="fun-fact">
                                    <div class="timer">450</div>
                                    <span class="medium"> Daily Loans </span>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 item">
                                <div class="fun-fact">
                                    <div class="timer">1200</div>
                                    <span class="medium">Happy clients</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Teams />

            <Footer />



        </>

    )
}

export default About