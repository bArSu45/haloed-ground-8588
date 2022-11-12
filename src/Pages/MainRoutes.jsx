import React from 'react'
import { Route, Routes } from 'react-router'
import AdminPage from './AdminPage/AdminPage'
import CartPage from './CartPage/CartPage'
import HomePage from './HomePage/HomePage'
import Login from './Login'
import LoginSignup from './LoginSignup'
import Otp from './Otp'
import Payment from './payment/Payment'
import MensPage from './ProductPage/MensPage'
import Womens from './ProductPage/Womens'
import WomensPage from './ProductPage/WomensPage'
import Signup from './Signup'

const MainRoutes = () => {
  return (
    <Routes>
       
            <Route path="/" element={<HomePage />} />
            <Route path="//login" element={<LoginSignup />} />
            <Route path="/email" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/mobile" element={<Otp />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/womens" element={<WomensPage />} />
            <Route path="/mens" element={<MensPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/cart" element={<CartPage />} />

        </Routes>
  )
}

export default MainRoutes
