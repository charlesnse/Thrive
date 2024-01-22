import React from 'react'
import './auth.css'
import Logo from '../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik';
import { RegistrationSchema } from '../../schemas';
import CustomInput from '../../components/FormElements/CustomInput'
import CustomPassword from '../../components/FormElements/CustomPassword'
import CustomCheckbox from '../../components/FormElements/CustomCheckbox';

function Register() {
    return (

        <div class="main-wrapper log-wrap">

            <div class="row">

                <div class="col-md-6 login-bg d-flex align-items-center">

                    <div className="welcome-login text-white">

                        <h4 className='mb-4'> Welcome to Thrive MFB . </h4>

                        <p className='fs-sm fw-light'> Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business .</p>

                    </div>

                </div>

                <div class="col-md-6 login-wrap-bg">

                    <div class="login-wrapper">

                        <div class="loginbox">

                            <div class="img-logo">

                                <img src={Logo} class="img-fluid" alt="Logo" />

                                <div class="back-home">
                                    <Link to="/">Back to Home</Link>
                                </div>

                            </div>

                            <h1>Sign up</h1>

                            <Formik
                                initialValues={{
                                    accept: false,
                                    firstname: '',
                                    lastname: '',
                                    email: '',
                                    phone: '',
                                    password: '',
                                    confirmPassword: '',
                                }}
                                validationSchema={RegistrationSchema}
                                onSubmit={(values, actions) => {
                                    console.log(values);
                                }}
                            >

                                {(props) => (

                                    <Form autoComplete='off'>

                                        <div className='row'>

                                            <div className='col-lg-6'>

                                                <div class="form-group">
                                                    <label class="form-control-label">First Name</label>
                                                    <CustomInput name="firstname" type="text" placeholder="First name" />
                                                </div>

                                            </div>

                                            <div className='col-lg-6'>

                                                <div class="form-group">
                                                    <label class="form-control-label">Last Name</label>
                                                    <CustomInput name="lastname" type="text" placeholder="Last name" />
                                                </div>

                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label class="form-control-label">Email</label>
                                            <CustomInput name="email" type="email" placeholder="Email address" />
                                        </div>

                                        <div class="form-group">
                                            <label class="form-control-label">Phone</label>
                                            <CustomInput name="phone" type="tel" placeholder="Phone number" />
                                        </div>

                                        <div class="form-group">
                                            <label class="form-control-label">Password</label>
                                            <CustomPassword name="password" placeholder="Password" />
                                        </div>

                                        <div class="form-group">
                                            <label class="form-control-label">Confirm Password</label>
                                            <CustomPassword name="confirmPassword" placeholder="Confirm Password" />
                                        </div>

                                        <div class="form-check remember-me">
                                            <CustomCheckbox name='accept' type="checkbox" />
                                        </div>

                                        <div class="d-grid">
                                            <button class="btn btn-sm btn-primary fw-light fs-sm" type="submit">Create Account</button>
                                        </div>

                                    </Form>

                                )}

                            </Formik>

                        </div>

                        <div class="google-bg text-center">
                            <p class="mb-0">Already have an account? <Link className="fw-bold" to="/login">Sign in</Link></p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Register