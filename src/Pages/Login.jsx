import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { Button, Heading, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";

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
    <Stack align="center" spacing="200px" bg={"#fff8de"}>
      <Heading> Log in to your account</Heading>
      <form onSubmit={handleSubmit}>
        <Input spacing={20}variant='flushed'
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <PasswordInput
          spacing={20}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Heading spacing="200px" align="center" fontSize={20} color={"teal"}>forget password</Heading>
        <br />
        <Button  w={80} type="submit" >LOGIN</Button>
      </form>
    </Stack>
  );
};
export default Login
function PasswordInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input 
      variant='flushed'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}