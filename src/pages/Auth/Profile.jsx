import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Nav from '../../components/Header/Nav'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import UpdatePassword from './UpdatePassword'
import UserProfile from './UserProfile'
import Dropzone from '../../components/Dropzone'
import './auth.css'
import BGimage from '../../assets/images/bgImage.jpg'

function Profile() {

    return (

        <div className='profile'>

            <Nav />

            <Header />

            <BreadCrumb title="Profile" text="Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business ." />

            <div className='container my-5'>

                <div className='row gap-'>

                    <div className='col-lg-4 mb-5'>

                        <div class="card border-0 ">

                            <img src={BGimage} alt="placeholder" class="card-img-top" />

                            <div class="row justify-content-center">

                                <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                                    <Dropzone />
                                </div>

                            </div>

                            <div class="card-body pt-0 pb-4">

                                <div class="text-center mt-3">
                                    <h5 className='fw-bold'> John Doe </h5>
                                    <p className="tex-sm"> johndoe@gmail.com </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='col-lg-8 card  border-0 py-4 rounded'>

                        <div class="px-3 mb-4">
                            <p class="mb-0 fw-bold">Edit Profile</p>
                        </div>


                        <div class="card-body">

                            <p class="text-uppercase text-sm mb-3">User Information</p>

                            {/* USER INFO */}

                            <UserProfile />

                            {/* USER INFO END */}

                            <hr class="horizontal dark" />

                            {/* PASSWORD */}

                            <p class="text-uppercase text-sm my-3">Password</p>

                            <UpdatePassword />

                            {/* PASSWORD END */}

                        </div>
                    </div>

                </div>

            </div>

            <Footer />

        </div>

    )
}

export default Profile