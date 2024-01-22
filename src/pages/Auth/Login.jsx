import React from 'react'
import './auth.css'
import Logo from '../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik';
import { LoginSchema } from '../../schemas';
import CustomInput from '../../components/FormElements/CustomInput'
import CustomPassword from '../../components/FormElements/CustomPassword'

function Login() {

    return (

        <div class="main-wrapper log-wrap">

            <div class="row">

                <div class="col-md-6 login-bg d-flex align-items-center">

                    <div className="welcome-login text-white">

                        <h4 className='mb-4'> Welcome Back to Thrive MFB . </h4>

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

                            <h1>Sign In</h1>

                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={(values, actions) => {
                                    console.log(values);
                                }}
                            >

                                {(props) => (

                                    <Form autoComplete='off'>

                                        <div class="form-group">
                                            <label class="form-control-label">Email</label>
                                            <CustomInput name="email" type="email" placeholder="Email address" />
                                        </div>

                                        <div class="form-group">
                                            <label class="form-control-label">Password</label>
                                            <CustomPassword name="password" placeholder="Password" />
                                        </div>

                                        <div class="d-grid mt-4">
                                            <button class="btn btn-sm btn-primary fw-light fs-sm" type="submit"> Sign In </button>
                                        </div>

                                    </Form>

                                )}

                            </Formik>

                        </div>

                        <div class="google-bg text-center">

                            <p class="mb-2">Forgot your Password? <Link className="fw-bold" to="/forgotPassword">  Reset Password </Link></p>
                            
                            <p class="mb-0">I don't have an account? <Link className="fw-bold" to="/register">Sign Up</Link></p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Login