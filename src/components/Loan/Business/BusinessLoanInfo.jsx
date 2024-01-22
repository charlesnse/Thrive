import React, { useState } from 'react'
import { nigerianStates } from 'nigerian-states-and-lgas';
import { useNavigate } from 'react-router-dom';
import years from '../../../data/year.json'
import months from '../../../data/Months.json'
import states from '../../../data/state.json'
import dobToAge from 'dob-to-age'

function BusinessLoanInfo() {

    const navigate = useNavigate()

    const business = [
        { value: 'Trading in own name', label: 'Trading in own name' },
        { value: 'Registered Sole Proprietorship', label: 'Registered Sole Proprietorship' },
        { value: 'Partnership', label: 'Partnership' },
        { value: 'Limited Liability Company', label: 'Limited Liability Company' },
    ];

    const categories = [
        { value: 'Trading', label: 'Trading' },
        { value: 'Healthcare', label: 'Healthcare' },
        { value: 'Education', label: 'Education' },
        { value: 'Transport and Haulage', label: 'Transport and Haulage ' },
        { value: 'Light Manufacturing and Assembly', label: 'Light Manufacturing and Assembly' },
        { value: 'others', label: 'Others' },
    ]

    // GET VALUE FROM FORM

    const [addressState, setAddressState] = useState('')
    const [localGov, setAddressLGA] = useState('')
    const [businessType, setBusinessType] = useState('')
    const [category, setCategory] = useState('')
    const [income, setIncome] = useState('')
    const [address, setAddress] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const addressLGA = localGov && JSON.parse(localGov)

    // FOUND OBJECT OF ARRAY

    const found = states.find(obj => {
        return obj.name === addressState;
    });

    const lgas = found?.lga

    // SUBMIT FORM

    const disabledBtn = (address == '' || year == '' || month == '' || category == '' || income == '' || localGov == '' || addressState == '')

    const hanleSubmit = (e) => {
        e.preventDefault()

        const data = {
            address, year, month, income, category, addressLGA, businessType, addressState
        }

        const years = `${data.year}-${data.month}-5`

        const dob = dobToAge(years)

        if (data.addressLGA.eligible === false || dob < 21 || dob > 60) {
            localStorage.removeItem('thrive_business')
            return navigate('/calculator/knockout')
        } else {
            localStorage.setItem('thrive_business', JSON.stringify(data));
            return navigate('/calculator/business/loan-calculator')
        }

    }

    return (

        <div className="card shadow p-4 py-5 p-lg-5 border-0 loan_info">

            <form autoComplete='off' onSubmit={hanleSubmit} >

                {/* FIRST ROW */}

                <div className="row">

                    {/* BUSINESS TYPE */}

                    <div className="col-md-6">
                        <div class="mb-4">

                            <label class="form-label fw-bold fs-sm">Business type</label>

                            <select className="form-control" value={businessType} onChange={(e) => setBusinessType(e.target.value)} >
                                <option selected value=""> Select..... </option>
                                {business.map((option) => (
                                    <option key={option.value} value={option.value}> {option.label} </option>
                                ))}
                            </select>

                        </div>

                    </div>

                    {/* BUSINESS CATEGORY */}

                    <div className="col-md-6">
                        <div class="mb-4">

                            <label class="form-label fw-bold fs-sm">What does your business do? </label>

                            <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option selected value=""> Select..... </option>
                                {categories.map((category) => (
                                    <option key={category.value} value={category.value}> {category.label} </option>
                                ))}
                            </select>

                        </div>

                    </div>

                </div>

                {/* SECOND ROW */}

                <div className="row">

                    {/* MONTH */}

                    <label class="form-label fw-bold fs-sm">Since when been in business at current location</label>

                    <div className="col-md-6">
                        <div class="mb-4">

                            <select className="form-control" value={month} onChange={(e) => setMonth(e.target.value)}>
                                <option selected value=""> MM </option>
                                {months.map((month) => (
                                    <option key={month.number} value={month.number}> {month.short} </option>
                                ))}
                            </select>

                        </div>

                    </div>

                    {/* YEAR */}

                    <div className="col-md-6">
                        <div class="mb-4">

                            <select className="form-control" value={year} onChange={(e) => setYear(e.target.value)}>
                                <option value=""> YYYY </option>
                                {years.map((year) => (
                                    <option key={year.year} value={year.year}>{year.year}</option>
                                ))}
                            </select>

                        </div>

                    </div>

                </div>

                {/* THIRD ROW */}

                <div className="row">

                    {/* TURNOVER */}
                    <div class="mb-4">

                        <label class="form-label fw-bold fs-sm">What is your average monthly turnover</label>

                        <input type="number" className="form-control" placeholder='650,000' value={income} onChange={(e) => setIncome(e.target.value)} />

                    </div>

                </div>

                {/* FOURTH ROW */}

                <div className="row">

                    {/* STATE */}
                    <div className="col-md-6">
                        <div class="mb-4">

                            <label class="form-label fw-bold fs-sm">State</label>

                            <select className="form-control" value={addressState} onChange={(e) => setAddressState(e.target.value)} >
                                <option selected value=""> Select..... </option>
                                {states.map((state) => (
                                    <option key={state.name} value={state.name}> {state.name} </option>
                                ))}
                            </select>

                        </div>

                    </div>

                    {/* LOCAL GOVERNMNET */}

                    <div className="col-md-6">
                        <div class="mb-4">

                            <label class="form-label fw-bold fs-sm">Local Government Area  </label>

                            <select className="form-control" value={localGov} onChange={(e) => setAddressLGA(e.target.value)} >
                                <option selected value="" > Select..... </option>
                                {lgas?.map((lga) => (
                                    <option key={lga.name} value={JSON.stringify(lga)}> {lga.name} </option>
                                ))}
                            </select>

                        </div>

                    </div>

                </div>

                <div class="mb-4">
                    <label class="form-label fw-bold fs-sm">Business Address</label>
                    <input type="text" className="form-control" placeholder='Plot 14386, New Lobatse Rd, Gaborone West, P.O.Box 602069 ' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <button type='submit' className="btn btn-primary w-100" disabled={disabledBtn} > Apply now </button>

            </form>

        </div >

    )
}

export default BusinessLoanInfo