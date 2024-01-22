import React, { useState } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import CurrencyFormat from '../../CurrencyFormat';
import toast from 'react-hot-toast'

function BusinessCalculator() {

    const [value, setValue] = useState(3)

    const [amount, setAmount] = useState()

        // GET MAXIMM AMOUNT USER CAN BORROW PER TURNOVER

        let turnover

        if( value === 3 ){
            turnover = 0.15*amount
        } else if(value === 6){
            turnover = 0.25*amount
        } else{
            turnover = 0.5*amount
        }
    

    // MAXIMUM LOAN AMOUNT
    const maxLoan = 10000000

    // MINIMUN LOAN AMOUNT
    const minLoan = 1000000

    // PERCENTAGE RESULT

    const percentage = 4 * value + 100
    const percentageTotal = percentage / 100

    // PERCENTAGE RESULT END

    // MONTHLY PAYBACK
    const payback = Math.round(turnover * percentageTotal / value)

    // interest
    const intrest = Math.round(4 * value / 100 * turnover)

    

    // CHECK IF REQUESTED LOAN IS GREATER THAN MAX LOAN

    // if (amount > maxLoan) {
    //     toast.error('Requested loan amount cant be greated than max loan amount')
    // }

    // if (amount < minLoan) {
    //     toast.error('Requested loan amount cant be less than min loan amount')
    // }

    // SET MAXIMUM LOAN AMOUNT

    const maxLoanAmout = maxLoan

    // DISABLE FORM BUTTON

    const disableBtn = (turnover == '' || turnover < minLoan)

    return (

        <div className="card shadow p-4 py-5 p-lg-5 border-0">

            <div class="mb-4">

                <label class="form-label fw-bold"> What is your average monthly turnover? </label>

                <input type="number" class="form-control py-3" value={amount} onChange={(e) => setAmount(e.target.value)} />

                <div className="d-flex align-items-center justify-content-between pt-1">
                    <span className='fw-bold fs-sm'>Min: <CurrencyFormat price={minLoan} /> </span>
                    <div className='fw-bold fs-sm'>Max: <CurrencyFormat price={maxLoanAmout} /></div>
                </div>

            </div>

            <div class="mb-4">

                <label class="form-label fw-bold"> What is your average monthly turnover? </label>

                <input type="number" class="form-control py-3" value={turnover} disabled />

            </div>

            <div class="mb-5">

                <div className="d-flex align-items-center justify-content-between pt-1 mb-4">
                    <span className='fw-bold'> For how long? </span>
                    <div className='fw-bold'> {value} Months </div>
                </div>

                <InputRange
                    maxValue={12}
                    minValue={3}
                    value={value}
                    onChange={value => setValue(value)}
                    step={3}
                />

            </div>

            <div className="mb-3 text-center m-auto">
                <span className="fs-sm text-primary">Your monthly repayment</span>
                <h3 className="fw-bold"> <CurrencyFormat price={payback} /> </h3>
            </div>

            {/* <div className="mb-4 text-center m-auto">
                <span className="fs-sm text-primary"> Loan Interest </span>
                <h5 className="fw-bold"> <CurrencyFormat price={intrest} /> </h5>
            </div> */}

            <button className="btn btn-primary w-100" disabled={disableBtn}> Apply now </button>

        </div>

    )
}

export default BusinessCalculator