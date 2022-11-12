import CartPage from "./Pages/CartPage/CartPage";
import Payment from "./Pages/payment/Payment";


import React from 'react'
import MainRoutes from './Pages/MainRoutes'

const App = () => {
  return (
    <div>
     <MainRoutes /> 
    </div>
  )
}

export default App



import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

 const App = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Footer/>

    
    </div>
  )
}
export default App
