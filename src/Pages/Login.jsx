import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [userId, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   const { auth, userLogin } = useContext(AppContext);
  var userData = JSON.parse(localStorage.getItem("signup"));
  console.log(userData);
  const handleSubmit = (e) => {
    //Default
    e.preventDefault();
    console.log("dhdfh");
    console.log(password);
    console.log(userData);
    userData.forEach((user) => {
      if (userData === null) {
        alert("please create an account");
        // window.location.href = "index.html"
      } else if (email === user.email && password === user.password) {
        alert("successfull");
        navigate("/")
        localStorage.setItem("signin", JSON.stringify(userData));
        // window.location.href = "index.html"
      } else {
        alert("user dose not exist");
      }
    });
  };
  //   "eve.holt@reqres.in",
  //   "password": "cityslicka"

  return (
    <>
   
    <Flex m="auto" w="100%">
    <Stack w="50%" align="center" spacing="200px" bg={"#fff8de"}>
      <Heading> Log in to your User Account</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          variant="flushed"
          type="text "
          placeholder="Email"
          value={email}
          onChange={(e) => setUserID(e.target.value)}
        />
        <br />
        <Input
          variant="flushed"
          type="text "
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Heading spacing="200px" align="center" fontSize={20} color={"teal"}>
          forget password
        </Heading>

        <Button w={80} type="submit">
          LOGIN
        </Button>
      </form>
    </Stack>
    <Stack w="50%" paddingBottom="300px" align="center" spacing="200px" bg={"#fff8de"}>
      <Heading> Log in to your Admin Account</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          variant="flushed"
          type="text "
          placeholder="userId"
          value={userId}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          variant="flushed"
          type="text "
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Heading spacing="200px" align="center" fontSize={20} color={"teal"}>
          forget password
        </Heading>

        <Button w={80} type="submit">
          LOGIN
        </Button>
      </form>
    </Stack>
    </Flex>
    </>
  );
}
