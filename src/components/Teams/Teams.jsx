import React from 'react'
import teams from './data.json'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import Modal from './Modal'

function Teams() {

    return (

        <section class="team section-padding style-6 mb-5">
            <div class="content">
                <div class="container">

                    <div class="section-head text-center style-4">

                        <small class="title_small"> The Team </small>

                        <h2 class="mb-4"> Board of <span> Directors </span> </h2>

                    </div>

                    <div class="row">

                        {teams.map((team) => (

                            <>

                                <div key={team.id} class="col-lg-3 col-md-6">

                                    <div class="team-card mb-30 mb-lg-0 style-6">

                                        <div class="img img-cover">

                                            <img src={team.image} alt="" />

                                            <div class="social-icons">

                                                <a class="mx-1" href={team.facebook} target='_blank' rel='noreferrer'>
                                                    <BsFacebook />
                                                </a>

                                                <a class="mx-1" href={team.instagram} target='_blank' rel='noreferrer'>
                                                    <BsInstagram />
                                                </a>

                                                <a class="mx-1" href={team.twitter} target='_blank' rel='noreferrer'>
                                                    <BsTwitter />
                                                </a>

                                            </div>

                                        </div>

                                        <div style={{ cursor: 'pointer' }} class="info" data-bs-toggle="modal" data-bs-target={team.modal_id}>
                                            <span class="d-block"><h6> {team.name} </h6></span>
                                            <small> {team.role} </small>
                                        </div>

                                    </div>

                                </div>

                                <Modal id={team.key} name={team.name} details={team.details} />

                            </>

                        ))}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Teams