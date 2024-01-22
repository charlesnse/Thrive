import { Form, Formik } from 'formik';
import React from 'react'
import { contactSchema } from '../schemas';
import CustomInput from './FormElements/CustomInput';
import TextArea from './FormElements/TextArea';

function ContactFrom() {

    return (

        <div id="contact" class="contact-area default-padding pt-5 mt-5">
            <div class="container">
                <div class="contact-content">

                    <div class="row">

                        <div class="col-lg-4 info mb-lg-0 mb-5">
                            <div class="content">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-envelope-open-text"></i>
                                        </div>
                                        <div class="info">
                                            <h5>Our Email</h5>
                                            <a href="mailto:info@thrivebank.ng">info@thrivebank.ng</a>
                                        </div>
                                    </li>
                                </ul>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="info">
                                        <h5>Address</h5>
                                        <p>
                                            57, Isheri-Ogunnusi Road, Oja Bus Stop,
                                            Aguda, Ogba, Lagos, Nigeria
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-headphones-alt"></i>
                                    </div>
                                    <div class="info">
                                        <h5>Phone</h5>
                                        <a href="tel:+2348150608627">+234 (0) 815 060 8627</a>
                                    </div>
                                </li>
                            </div>
                        </div>


                        <div class="col-lg-8 contact-form-box">
                            <div class="form-box">

                                <h2 className='mb-3'>Let's talk?</h2>

                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        phone: '',
                                        message: ''
                                    }}
                                    validationSchema={contactSchema}
                                    onSubmit={(values, actions) => {
                                        console.log(values);
                                    }}
                                >

                                    {(props) => (

                                        <Form autoComplete='off'>

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <CustomInput name="name" type="text" placeholder="Name" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">

                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <CustomInput name="email" type="email" placeholder="Email Address" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <CustomInput name="phone" type="tel" placeholder="Phone" />
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group comments">
                                                        <TextArea name="message" placeholder="Message" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-4">
                                                <div class="col-lg-12">
                                                    <button className='text-light' type="submit" name="submit" id="submit">
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 alert-notification">
                                                <div id="message" class="alert-msg"></div>
                                            </div>

                                        </Form>

                                    )}

                                </Formik>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >

    )
}

export default ContactFrom