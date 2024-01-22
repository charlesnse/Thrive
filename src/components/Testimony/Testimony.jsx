import React from 'react'
import './testimony.css'
import { AiFillStar } from 'react-icons/ai'
import Globe from '../../assets/images/globe.svg'
import { Link } from 'react-router-dom'

function Testimony() {
  return (

    <section class="testimonials style-4 mt-5">
      <div class="container">
        <div class="content">
          <div class="row">

            <div class="col-lg-5 mb-5">

              <div class="section-head style-4">
                <small class="title_small">Testimonials</small>
                <h2 class="mb-30">Loved From <span> Clients </span> </h2>
              </div>

              <p class="text mb-40">
                Thrive MFB loved from thoudsands customer worldwide and get trusted from big companies.
              </p>

              <div class="numbs">

                <div class="num-card">
                  <h2>2.5M+ </h2>
                  <p> Loans Given Out</p>
                </div>

                <div class="num-card">
                  <h2> 1,258 </h2>
                  <p> Happy Clients</p>
                </div>

              </div>

              <div class="d-flex align-items-center mt-50">

                <Link to='/loan/calculator' class="btn rounded-pill bg-blue4 fw-bold text-white me-4">
                  <small> Apply Now </small>
                </Link>

              </div>

            </div>

            <div class="col-lg-7">

              <div class="testi-cards">

                <div class="client_card">

                  <div class="user_img">
                    <img src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                  </div>

                  <div class="inf_content">

                    <div class="stars mb-2">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>

                    <h6> “Thrive MFB is the best ever, very unique, low interest, and instant loan approval”
                    </h6>

                    <p> Mr CJ  <span class="text-muted"> /  Senior Developer </span></p>

                  </div>

                </div>

                <div class="client_card">

                  <div class="user_img">
                    <img src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                  </div>

                  <div class="inf_content">

                    <div class="stars mb-2">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>

                    <h6> “Thrive MFB is the best ever, very unique, low interest, and instant loan approval”
                    </h6>

                    <p> Mr CJ  <span class="text-muted"> /  Senior Developer </span></p>

                  </div>

                </div>

                <div class="client_card">

                  <div class="user_img">
                    <img src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                  </div>

                  <div class="inf_content">

                    <div class="stars mb-2">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>

                    <h6> “Thrive MFB is the best ever, very unique, low interest, and instant loan approval”
                    </h6>

                    <p> Mr CJ  <span class="text-muted"> /  Senior Developer </span></p>

                  </div>

                </div>

                <img src={Globe} alt="" class="testi-globe" />

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  )
}

export default Testimony