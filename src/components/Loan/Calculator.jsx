import React, { useState } from 'react'
import Select from 'react-select';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import CurrencyFormat from '../CurrencyFormat';
import toast from 'react-hot-toast'

function Calculator({ maxLoan }) {

    const options = [
        { value: 'rent', label: 'Rent' },
        { value: 'wedding', label: 'Wedding' },
        { value: 'car Purchase', label: 'Car Purchase' },
        { value: 'medicals', label: 'Medicals' },
        { value: 'school Fees', label: 'School Fees' },
        { value: 'side Hustle', label: 'Side Hustle' },
        { value: 'shopping', label: 'Shopping' },
        { value: 'housing', label: 'Housing' },
    ];

    const [value, setValue] = useState(3)

    const [amount, setAmount] = useState(maxLoan > 2000000 ? 2000000 : maxLoan)

    // PERCENTAGE RESULT

    const percentage = 4 * value + 100
    const percentageTotal = percentage / 100

    // PERCENTAGE RESULT END

    // MONTHLY PAYBACK
    const payback = Math.round(amount * percentageTotal / value)

    // interest
    const intrest = Math.round(4 * value / 100 * amount)

    // MINIMUN LOAN AMOUNT
    const minLoan = 5000

    // CHECK IF REQUESTED LOAN IS GREATER THAN MAX LOAN

    if (amount > maxLoan) {
        toast.error('Requested loan amount cant be greated than max loan amount')
    }

    // SET MAXIMUM LOAN AMOUNT

    const maxLoanAmout = maxLoan > 2000000 ? 2000000 : maxLoan

    // GET FORM INPUTS

    const [selectedOption, setSelectedOption] = useState(null);

    const disableBtn = (amount == '' || selectedOption == null || amount < minLoan)

    return (

        <div className="card shadow p-4 py-5 p-lg-5 border-0">

            <div class="mb-4">

                <label class="form-label fw-bold">How much do you want to borrow?</label>

                <input type="number" class="form-control py-3" value={amount} onChange={(e) => setAmount(e.target.value)} />

                <div className="d-flex align-items-center justify-content-between pt-1">
                    <span className='fw-bold fs-sm'>Min: <CurrencyFormat price={minLoan} /> </span>
                    <div className='fw-bold fs-sm'>Max: <CurrencyFormat price={maxLoanAmout} /></div>
                </div>

            </div>

            <div class="mb-5">

                <div className="d-flex align-items-center justify-content-between pt-1 mb-4">
                    <span className='fw-bold'> For how long? </span>
                    <div className='fw-bold'> {value} Months </div>
                </div>

                <InputRange
                    maxValue={6}
                    minValue={3}
                    value={value}
                    onChange={value => setValue(value)}
                />

            </div>

            <div class="mb-4">
                <label class="form-label fw-bold">Purpose of the loan?</label>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isSearchable={false}
                />
            </div>

            <div className="mb-3 text-center m-auto">
                <span className="fs-sm text-primary">Your monthly repayment</span>
                <h3 className="fw-bold"> <CurrencyFormat price={payback} /> </h3>
            </div>

            <div className="mb-4 text-center m-auto">
                <span className="fs-sm text-primary"> Loan Interest </span>
                <h5 className="fw-bold"> <CurrencyFormat price={intrest} /> </h5>
            </div>

            <button className="btn btn-primary w-100" disabled={disableBtn}> Apply now </button>

        </div>

    )
}

export default Calculator