import React from 'react'
import './preloader.css'
import Logo from './../../assets/images/logo/logo.png'

function Preloader() {
    
    return (

        <div id="preloader">

            <div id="ctn-preloader" class="ctn-preloader">

                <div class="round_spinner">

                    <div class="spinner"></div>

                    <div class="text">
                        <img width={120} src={Logo} alt="" />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Preloader