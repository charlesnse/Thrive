import React from 'react'
import { TbCircleDot } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Business from '../../assets/images/business.png'

function businessLoan() {
    return (

        <section class="about style-4 mt-5">

            <div class="content frs-content">

                <div class="container">

                    <div class="row align-items-center justify-content-between">

                        <div class="col-lg-6">

                            <div class="info">

                                <div class="section-head style-4">
                                    <small class="title_small"> businesses Loan </small>
                                    <h2 class="mb-20"> Businesses <span> Loan </span> </h2>
                                </div>

                                Minimum loan amount is N500,000.00 <br />

                                <h6 className='fw-bold my-2'>Maximum loan amount per borrower is:</h6>

                                <span className="fs-sm mb-2">  The higher of 50% of monthly turnover or N10,000,000.00 for 12months tenor. </span> <br />

                                <span className='fs-sm mb-2'>  The higher of 25% of monthly turnover or N10,000,000.00 for 6months tenor.  </span> <br />

                                <span className="fs-sm mb-2">The higher of 15% of monthly turnover or N10,000,000.00 for 3months tenor</span>

                                <p className='fs-sm mt-2 fw-bold'> All loans below N1,000,000.00 are for a maximum tenor of 6months </p>

                                <p className='fs-sm fw-bold'> Interest rate is 4% monthly on a straight-line basis. Annual percentage rate is 48%.
                                </p>

                                <ul className='mt-4'>

                                    <li class="d-flex align-items-center mb-2">

                                        <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic"> Purchase of loan application at N3,000.00.
                                        </h6>

                                    </li>

                                    <li class="d-flex align-items-center mb-2">

                                        <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic"> Complete and return application form.</h6>

                                    </li>

                                    <li class="d-flex align-items-center mb-2">

                                        <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic"> Must have been in business and at same location for at least 5years </h6>

                                    </li>

                                    <li class="d-flex align-items-center mb-2">

                                        <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic">Must deal in fast moving products or essential services that generates daily cash sales. </h6>

                                    </li>

                                </ul>

                                <Link to='/business/loan' class="btn rounded-pill bg-blue4 fw-bold text-white mt-20">
                                    <small> Apply Now </small>
                                </Link>

                            </div>

                        </div>

                        <div class="col-lg-5">
                            <div class="img mb-30 mb-lg-0">
                                <img src={Business} alt="" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default businessLoan