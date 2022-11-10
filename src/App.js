
// import Router from 'json-server/lib/server/router';

import './App.css';
import Login from './Pages/Login';
import LoginSigup from "./Pages/LoginSignup"
import Otp from './Pages/Otp';
import Signup from './Pages/Signup';
function App(){
return(
<> 

    
     {/* <Otp />        */}
<LoginSigup/>      
<Login />
<Signup/>

</>)
}


export default App;