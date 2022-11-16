import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import axios from "axios";

function PasswordInput({ value, onChange,name }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        variant="flushed"
        pr="4.5rem"
        type={show ? "text" : "password"}
        name={name}
        value={value}
        placeholder="Password"
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default function Signup() {
  const navigate = useNavigate();
const [ls, setLs] = useState(false);
  var mobilesign = JSON.parse(localStorage.getItem("mobile"));
  const dispatch = useDispatch();
  // const [name, setName] = useState("");
  const [mobile, setMobile] = useState(mobilesign);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState({
    name: "",
    mobile: mobilesign,
    email: "",
    password: "",
status:true,
    id: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    axios
      .post(`https://clickandbuy-json-server.onrender.com/userdata`, userdata)
      .then((res) => {
        // setProduct(res.data)
        // getMensData()
        console.log("datddddd", res.data);
        setLs(true)
        localStorage.setItem("sts", JSON.stringify(true));
        localStorage.setItem("email", JSON.stringify(userdata.email));
        navigate("/")
      })
      .catch((e) => {
        console.log(e);
      });

    // navigate("/")
  };
 
  return (
    <div >
      <Navbar sts={ls} />

      <Flex display={{ lg: 'flex',md:"flex" }} id="signup" m={"auto"} w="100%" bg={"#fff8de"}>
        <Box  width={{ lg: '50%', sm: '50%', md: '75%' }}>
          <Image
            width="100%"
           p={{ lg: '100px', sm: '50px', md: '75px' }}
            src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"
          ></Image>
        </Box>
        <Box width={{ lg: '50%', sm: '50%', md: '25%' }} m="89px 89px 89px 0px">
          <Box pl={{lg: '80px', sm: '50px', md: '50px' }}pr={{lg: '80px', sm: '50px', md: '50px' }} bg="white">
            <Heading>Sign Up</Heading>
            <Text
              fontSize="18px"
              color={"black"}
              fontFamily="montserrat-bold,sans-serif"
            >
              Hi new buddy, let's get you started with the bewakoofi!
            </Text>
            <VStack  spacing={10}>
              {/* <form  onSubmit={handleChange}> */}
                <Input
                  variant="flushed"
                  placeholder="Name"
                  value={userdata.name}
                  name={userdata.name}
                  onChange={(e) =>
                    setUserdata({ ...userdata, name: e.target.value })
                  }
                />
                <Input
                  variant="flushed"
                  placeholder="Mobile"
                  value={mobile}
                  name={userdata.mobile}
                  onChange={(e) =>
                    setUserdata({ ...userdata, mobile: e.target.value })
                  }
                />

                <Input
                  variant="flushed"
                  placeholder="Email Id"
                  value={userdata.email}
                  name={userdata.email}
                  onChange={(e) =>
                    setUserdata({ ...userdata, email: e.target.value })
                  }
                />
                {/* <Input  variant='flushed' placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)} /> */}
                <PasswordInput
                  value={userdata.password}
                  name={userdata.password}
                  onChange={(e) =>
                    setUserdata({ ...userdata, password: e.target.value })
                  }
                />
                <Checkbox colorScheme="teal" defaultChecked>
                  I want to receive order updates on Whatsapp
                </Checkbox>
                <Button
                 onClick={handleChange}
                  marginTop={20}
                  type="submit"
                  bg={"#989898"}
                  w="120px"
                  color={"white"}
                >
                  {" "}
                  PROCEED
                </Button>
              {/* </form> */}
            </VStack>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
