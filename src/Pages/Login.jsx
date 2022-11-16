import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import {
  Box,
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
import axios from "axios";

export default function Login() {
  const dispatch = useDispatch();
  const [userData, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   const { auth, userLogin } = useContext(AppContext);
  // var userData = JSON.parse(localStorage.getItem("signup"));
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
        localStorage.setItem("sts", JSON.stringify(true));
        localStorage.setItem("email", JSON.stringify(user.email));
        localStorage.setItem("name", JSON.stringify(user.name));
        navigate("/")
        localStorage.setItem("signin", JSON.stringify(userData));
        // window.location.href = "index.html"
      } 
    });
  };
//  user/login
  const handleSubmitU = (e) => {
    //Default
    e.preventDefault();
   
    
      if (userId === "click@gmail.com" && userpassword === "clicknbuy") {
        alert("successfull");
        navigate("/admin")
        localStorage.setItem("username", JSON.stringify(name));
        // window.location.href = "index.html"
      } else {
        alert("user dose not exist");
      }
    }
    useEffect(() => {
      axios
        .get("https://clickandbuy-json-server.onrender.com/userdata")
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);
  return (
    <Box bg={"#fff8de"}>
   <Navbar/>
    <Flex mt="auto"  w={{ lg: '100%', sm: '50%', md: '75%' }} display={{ lg: 'flex',md:"flex" }} >
    <Stack w="50%" align="center" p="5%" m="5%" spacing="120px" bg={"white"}>
      <Heading> Log in to your User Account</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          variant="flushed"
          type="text "
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
        spacing={5}
          variant="flushed"
          type="text "
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Heading m={5} align="center" fontSize={20} color={"teal"}>
          forgot password
        </Heading>

        <Button w={80} m={5} type="submit">
          LOGIN
        </Button>
      </form>
    </Stack>
    <Stack w="50%" paddingBottom="300px" p="5%" m="5%" align="center" spacing="120px" bg={"white"}>
      <Heading> Log in to your Admin Account</Heading>
      <form onSubmit={handleSubmitU}>
      <Input
          variant="flushed"
          type="text "
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Input
          variant="flushed"
          type="text "
          placeholder="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <Input
          variant="flushed"
          type="text "
          placeholder="password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        />

        <Heading m={5} align="center" fontSize={20} color={"teal"}>
          forgot password
        </Heading>

        <Button m={5}  w={80} type="submit">
          LOGIN
        </Button>
      </form>
    </Stack>
    </Flex>
    </Box>
  );
}