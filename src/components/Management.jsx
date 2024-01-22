import React from 'react'
import Hero1 from '../assets/images/mobs.png'
import Hero2 from '../assets/images/mobs.png'

function Management() {

    return (

        <section class="about mt-60 pt-5">

            <div class="content frs-content">
                <div class="container">

                    <div class="row align-items-center justify-content-between">

                        <div class="col-lg-6">
                            <div class="img mb-30 mb-lg-0">
                                <img src={Hero1} alt="" />
                            </div>
                        </div>

                        <div class="col-lg-5">

                            <div class="info">

                                <div class="section-head style-4">

                                    <h2 class="mb-20">Making Financial Inclusion <span> Count </span> </h2>
                                </div>

                                <p class="text mb-30">

                                    Thrive Microfinance Bank Nigeria offers entrepreneurs the opportunity to easily access loans in a quick, transparent and efficient environment.

                                    Our expertise and international standards assure our clients of quality service and delivery. Loans currently range from N15,000 to N2,000,000; maximum maturity is 12 months

                                </p>

                                {/* <Link to='/' class="btn rounded-pill bg-blue4 fw-bold text-white">
                                    <small> Free Register </small>
                                </Link> */}

                            </div>
                        </div>

                    </div>
                </div>
                <img src="assets/img/about/about_s4_lines.png" alt="" class="lines" />
                <img src="assets/img/about/about_s4_bubble.png" alt="" class="bubble" />
            </div>

            <div class="content sec-content">

                <div class="container">

                    <div class="row align-items-center justify-content-between">

                        <div class="col-lg-5 order-2 order-lg-0">

                            <div class="info">

                                <div class="section-head style-4">
                                    <small class="title_small">Better Note Management</small>
                                    <h2 class="mb-10">Your Notes <span> Security </span> </h2>
                                </div>

                                <p class="text mb-30">
                                    Get a loan to meet daily / monthly / yearly your needs
                                </p>

                                <div class="faq style-3 style-4">

                                    <div class="accordion" id="accordionExample">

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading1">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                    Am I eligible for a loan?
                                                </button>
                                            </h2>
                                            <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    To qualify for a loan, you must be:
                                                    Between 22 – 59 years old <br />
                                                    Have a verifiable source of income <br />
                                                    Live and/or work in cities where we operate <br />
                                                    Have a savings or current bank account with any commercial bank
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading2">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                    How much can I borrow?
                                                </button>
                                            </h2>
                                            <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    You can get up to ₦2,000,000 (two million naira) for up to 12 months
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading3">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                    What documents do I need to apply for a loan?
                                                </button>
                                            </h2>
                                            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    You need your bank statement, a government issued ID card and utility bill  (optional).
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="col-lg-6 order-0 order-lg-2">
                            <div class="img mb-30 mb-lg-0">
                                <img src={Hero2} alt="" />
                            </div>
                        </div>

                    </div>

                </div>

                {/* <img src="assets/img/about/about_s4_bubble2.png" alt="" class="bubble2" /> */}

            </div>

        </section>

    )
}

export default Management