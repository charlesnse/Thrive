import React from 'react'
import { TbCircleDot } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Individual from '../../assets/images/individual.png'

function IndividulaLoan() {
    return (


        <section class="about style-4">

            <div class="integration px-3">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-head text-center style-4">

                            <small class="title_small">About Our Loans</small>

                            <h2 class="mb-20">Convenient Personal & Micro- business Loans</h2>

                            <p>Apply for a convenient loan to meet needs like growing your small business, renovating your home, buying a new car, paying rent, school fees, medical bills, etc.</p>

                            <p className='my-3'>We’re proud of the incredibly competitive rates we offer our customers on consumer credit, quick cash, salary advance, and more. We offer flexible, revolving lines of credit so you always have the funds you need available at your fingertips.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="content frs-content">

                <div class="container">

                    <div class="row align-items-center justify-content-between">

                        <div class="col-lg-5">
                            <div class="img mb-30 mb-lg-0">
                                <img src={Individual} alt="" />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="info">

                                <div class="section-head style-4">
                                    <small class="title_small"> Individual Loan </small>
                                    <h2 class="mb-20"> Individual Salaried <span> Employees </span> </h2>
                                </div>

                                <p class="mb-2">
                                    Our maximum loan amount is higher of 120% of net monthly salary or N2million
                                </p>

                                <p>
                                    Maximum loan tenor is 6months
                                    Interest is 4% monthly on a straight-line basis. Annual Percentage Rate is 48%
                                </p>

                                <ul className='mt-4'>

                                    <li class="d-flex align-items-center mb-2">

                                        <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic">Steady employment at same company for at least 4years </h6>

                                    </li>

                                    <li class="d-flex align-items-center mb-2">

                                        <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic">No outstanding loan outside of loan from employer </h6>

                                    </li>

                                    <li class="d-flex align-items-center mb-2">

                                        <small style={{ width: '45px', height: '30px' }} class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic">At least one guarantor in steady employment for at least 5Years whose net monthly income is at least 5times the loan amount </h6>

                                    </li>

                                    <li class="d-flex align-items-center mb-2">

                                        <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <TbCircleDot />
                                        </small>

                                        <h6 class="fs-sm italic">Remitta deduction</h6>

                                    </li>

                                </ul>

                                <Link to='/loan/calculator' class="btn rounded-pill bg-blue4 fw-bold text-white mt-20">
                                    <small> Apply Now </small>
                                </Link>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default IndividulaLoan