import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { CgMenuLeft } from 'react-icons/cg'
import MobileSlider from './MobileSlider'
import Logo from '../../assets/images/logo/logo.png'

function Header() {

    const [fiexed, setFixed] = useState(false)

    const [user] = useState(false)


    const fixed = () => {
        if (window.scrollY >= 90) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    window.addEventListener('scroll', fixed)

    return (

        <>

            <nav className={`navbar navbar-expand-lg navbar-light style-4 ${fiexed && 'nav-scroll'}`}>
                <div className="container">

                    <Link to='/' className="navbar-brand" >
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <button className="navbar-toggler" >

                        <span style={{ fontSize: '25px' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" ><CgMenuLeft /></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">

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
                                        <AiOutlineUser />
                                    </Link>

                                    <Link to='/register' className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold">
                                        <span> Register  <i className="bi bi-arrow-right ms-1"></i> </span>
                                    </Link>

                                </div>

                            ) : (

                                <div className="d-flex align-items-center">

                                    <Link to='/profile' className="search-icon me-4">
                                        <AiOutlineUser />
                                    </Link>

                                </div>

                            )}

                        </div>

                    </div>

                </div>
            </nav>

            <MobileSlider />

        </>

    )
}

export default Header