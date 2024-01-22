import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function BreadCrumb({ title, text }) {
    return (

        <div class="breadcrumbs overlay mb-5 py-5">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-md-7 col-sm-9">

                        <div class="breadcrumbs-content">

                            <h1 class="page-title"> { title } </h1>

                            <p class='fw-light'> { text } </p>

                        </div>

                        <ul class="breadcrumb-nav">
                            <li><Link to='/'>Home</Link></li>
                            <li> { title } </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default BreadCrumb