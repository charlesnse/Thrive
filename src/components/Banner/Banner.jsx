import React from 'react'
import Hero from './../../assets/images/loan.svg'
import { Link } from 'react-router-dom'
import { TbRefresh } from 'react-icons/tb'
import { BsCreditCardFill } from 'react-icons/bs'
import { BiLoaderCircle } from 'react-icons/bi'

function Banner({ Bubble }) {

    return (

        <header className="style-4 mb-5">
            <div className="content">
                <div className="container">
                    <div className="row gx-0">

                        <div className="col-lg-6">

                            <div className="info">

                                <small className="mb-5 title_small">What would you like to do?</small>

                                <h1 className="mb-30">Flexible loans for the Human lifestyle.</h1>

                                <p className="text">Thrive is the one you can rely that will support you all <br /> the way by offering Home Loan facilities. </p>

                                <div className="d-flex align-items-center flex-wrap mt-5">

                                    <Link to="/loan/calculator" className="btn rounded-pill bg-blue4 fw-bold text-white me-4 mb-3 mb-md-0" >
                                        <small> <BiLoaderCircle /> <i className="fab fa-apple me-2 pe-2 border-end"></i> Individual Loan </small>
                                    </Link>

                                    <Link to="/business/loan" className="btn rounded-pill bg-blue4 fw-bold text-white me-4 mb-3 mb-md-0" >
                                        <small> <BiLoaderCircle /> <i className="fab fa-apple me-2 pe-2 border-end"></i> Business Loan </small>
                                    </Link>

                                </div>

                                <span className="me-5 mt-2">
                                    <small
                                        className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-1">
                                        <TbRefresh />
                                    </small>
                                    <small className="text-uppercase"> Easy Loan Application </small>
                                </span>
                                
                                <span className="mt-5">
                                    <small
                                        className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-1">
                                        <BsCreditCardFill />
                                    </small>
                                    <small className="text-uppercase">Fast payment</small>
                                </span>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="img">
                                <img src={Hero} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <img src={Bubble} alt="" className="bubble" />
                
            </div>

        </header>

    )
}

export default Banner