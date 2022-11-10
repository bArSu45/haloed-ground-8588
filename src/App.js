
import './App.css';
import CartPage from './Pages/CartPage/CartPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginSignup from './Pages/LoginSignup';
import Login from './Pages/Login'
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <CartPage/>
      {/* <HomePage/>
      <LoginSignup/>
      <Login/> */}
    </>
  );
}

export default App;
