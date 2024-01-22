import React, { useState } from 'react'
import { nigerianStates } from 'nigerian-states-and-lgas';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, } from 'formik'
import CustomInput from '../../components/FormElements/CustomInput'
import { LoanInfoSchema } from '../../schemas';
import CustomSelect from '../FormElements/CustomSelect';
import dobToAge from 'dob-to-age'

function LoanInfo() {

    const navigate = useNavigate()

    const options = [
        { value: 'employed', label: 'Employed' },
        { value: 'self-employed', label: 'Self Employed' },
    ];

    // const [state, setState] = useState(null);

    // const states = nigerianStates.all()

    const lgas = nigerianStates.lgas('Lagos')

    return (

        <div className="card shadow p-4 py-5 p-lg-5 border-0 loan_info">

            <Formik
                initialValues={{
                    employmentStatus: '',
                    income: '',
                    dob: '',
                    lga: '',
                    state: '',
                }}
                validationSchema={LoanInfoSchema}
                onSubmit={(values, actions) => {

                    const date = dobToAge(values.dob)

                    if (date < 26 || date > 55 ) {
                        localStorage.removeItem('thrive_lcd');
                        return navigate('/calculator/knockout')
                    } else {
                        localStorage.setItem('thrive_lcd', JSON.stringify(values));
                        return navigate('/calculator/pl/loan-calculator')
                    }

                }}
            >

                {(props) => (

                    <Form autoComplete='off'>

                        <div class="mb-4">
                            <label class="form-label fw-bold fs-sm">What's your employment status?</label>

                            <CustomSelect name='employmentStatus'>
                                <option selected value=""> Select..... </option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}> {option.label} </option>
                                ))}
                            </CustomSelect>

                        </div>

                        <div class="mb-4">
                            <label class="form-label fw-bold fs-sm">What's your monthly income?</label>
                            <CustomInput name="income" type="number" />
                        </div>

                        <div className='row'>

                            <div className='col-lg-6 col-sm-6'>

                                <div class=''>

                                    <label class="form-label fw-bold fs-sm">What state do you live in?</label>

                                    <CustomSelect name='state'>
                                        <option selected value=""> Select..... </option>
                                        <option selected value="Lagos"> Lagos </option>
                                    </CustomSelect>

                                    {/* <select className="form-control" defaultValue='Lagos' value={state} onChange={(e) => setState(e.target.value)}>
                                        <option selected value=""> Select..... </option>

                                    </select> */}

                                    {/* <span className="text-danger fs-sm pt-1">{!state && 'State is required'}</span> */}

                                </div>

                            </div>

                            <div className='col-lg-6 col-sm-6'>
                                <div class="mb-4">

                                    <label class="form-label fw-bold fs-sm">Where is your LGA?</label>

                                    <CustomSelect name='lga'>
                                        <option selected value=""> Select..... </option>
                                        {lgas.map((lga) => (
                                            <option key={lga} value={lga}> {lga} </option>
                                        ))}
                                    </CustomSelect>

                                </div>
                            </div>

                        </div>

                        <div className='row'>

                            <label class="form-label fw-bold fs-sm">Tell us your date of birth</label>

                            <div class="mb-4">
                                <CustomInput name="dob" type="date" />
                            </div>

                        </div>

                        <button type='submit' className="btn btn-primary w-100"> Apply now </button>

                    </Form>

                )}

            </Formik>

        </div >

    )
}

export default LoanInfo