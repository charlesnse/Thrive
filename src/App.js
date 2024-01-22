import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ForgotPasswordAuth from './pages/Auth/Forgot';
import Reset from './pages/Auth/Reset';
import Profile from './pages/Auth/Profile';
import LoanCalculator from './pages/Loan/LoanCalculator';
import LoanStep from './pages/Loan/LoanStep';
import Preloader from './components/Preloader/Preloader'
import Loan from './pages/Loan/Loan'
import LoanError from './pages/Loan/LoanError';
import BusinessLoan from './pages/Loan/BusinessLoan/BusinessLoan';
import BusinessLoanCalculator from './pages/Loan/BusinessLoan/BusinessLoanCalculator'

function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000);

  return (

    <>

      {loading && (<Preloader />)}

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/loan' element={<Loan />} />

        {/* INDIVIDUAL LOAN */}

        <Route path='/calculator/pl/loan-calculator' element={<LoanCalculator />} />
        <Route path='/calculator/knockout' element={<LoanError />} />
        <Route path='/loan/calculator' element={<LoanStep />} />

        {/* INDIVIDUAL LOAN */}

        <Route path='/business/loan' element={<BusinessLoan />} />
        <Route path='/calculator/business/loan-calculator' element={<BusinessLoanCalculator />} />



        {/* AUTH */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotPassword' element={<ForgotPasswordAuth />} />
        <Route path='/resetPassword' element={<Reset />} />

        {/* 404 */}

        <Route path='*' element={<ErrorPage />} />

      </Routes>

      {/* TOAST ALERTS */}

      <Toaster position="top-right" reverseOrder={false} />

    </>

  )
}

export default App