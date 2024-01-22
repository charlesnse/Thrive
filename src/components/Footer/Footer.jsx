import React from 'react'
import { Link } from 'react-router-dom'
// import Wave from './../../assets/images/footer_wave.png'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Logo from '../../assets/images/logo/logo.png'

function Footer() {

    const date = new Date().getFullYear()

    return (

        <footer className="style-4">
            <div className="container">

                {/* <div className="section-head text-center style-4">
                <h2 className="mb-10"> Ready To <span> Download </span> </h2>
                <p>Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.</p>

                <div className="d-flex align-items-center justify-content-center mt-50">

                    <Link to="/" className="btn rounded-pill bg-blue4 fw-bold text-white me-4">
                        <small> <i className="fab fa-apple me-2 pe-2 border-end"></i> Download On App Store </small>
                    </Link>

                    <Link to="/" className="btn rounded-pill bg-blue4 fw-bold text-white me-4">
                        <small> <i className="fab fa-apple me-2 pe-2 border-end"></i> Download On App Store </small>
                    </Link>

                </div>

            </div> */}

                <div className="foot ">

                    <div className="row align-items-center">

                        <div className="col-lg-2">
                            <div className="logo">
                                <img src={Logo} width={100} alt="Logo" />
                            </div>
                        </div>

                        <div className="col-lg-8">

                            <ul className="links">

                                <li>
                                    <Link to='/' className="active">Home</Link>
                                </li>

                                <li>
                                    <Link to='/about'>About</Link>
                                </li>

                                <li>
                                    <Link to='/loan'> Loan </Link>
                                </li>

                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>

                            </ul>

                        </div>

                        <div className="col-lg-2">

                            <div className="d-flex align-items-center">

                                <span className="mx-2">  <BsFacebook /> </span>
                                <span className="mx-2">  <BsInstagram /> </span>
                                <span className="mx-2">  <BsTwitter /> </span>
                                <span className="mx-2">  <BsLinkedin /> </span>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="copywrite text-center">
                    <small className="small">
                        © {date} Copyrights by Thrive MFB . All Rights Reserved.
                    </small>
                </div>

            </div>

            {/* <img src={Wave} alt="wave" className="wave" /> */}

        </footer>

    )
}

export default Footer