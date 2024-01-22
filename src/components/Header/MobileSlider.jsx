import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiFillCloseCircle } from 'react-icons/ai'
import Logo from '../../assets/images/logo/logo.png'

function MobileSlider() {

    const [user] = useState(false)

    return (

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">

                <Link to='/' >
                    <img src={Logo} alt="Logo" width={100} />
                </Link>

                <span style={{ fontSize: '26px', color: '#000' }} data-bs-dismiss="offcanvas" aria-label="Close" > <AiFillCloseCircle /> </span>

            </div>

            <div class="offcanvas-body mt-5">

                <div className="navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase fs-sm fw-bold">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/loan'>
                                Loan
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link" to='/calculator'>
                                Loan Calculator
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>
                                contact
                            </Link>
                        </li>

                    </ul>

                    <div className="nav-side">

                        {!user ? (

                            <div className="d-flex align-items-center">

                                <Link to='/login' className="search-icon me-4">
                                    <span style={{ fontSize: '23px' }}>  <AiOutlineUser /> </span> <span style={{ fontSize: '13px' }} className='px-2 fw-bold fs-sm'> Login </span>
                                </Link>

                                <Link to='/register' className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold">
                                    <span> Register  <i className="bi bi-arrow-right ms-1"></i> </span>
                                </Link>

                            </div>

                        ) : (

                            <div className="d-flex align-items-center mt-5">

                                <Link to='/profile' className="search-icon me-4">
                                    <span style={{ fontSize: '25px' }}>  <AiOutlineUser /> </span> <span style={{ fontSize: '13px' }} className='px-2 fw-bold fs-sm'> Profile </span>
                                </Link>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>

    )
}

export default MobileSlider