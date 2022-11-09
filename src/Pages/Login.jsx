import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch=useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const { auth, userLogin } = useContext(AppContext);

  const handleSubmit = (e) => {
    //Default
    e.preventDefault();
    if(email&&password){
        dispatch(login({email,password}));
        setEmail("");
        setPassword("");
        navigate("/vmvmmv")
    }else{
        navigate("/ssss") 
    }

  };
//   "eve.holt@reqres.in",
//   "password": "cityslicka"

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Login