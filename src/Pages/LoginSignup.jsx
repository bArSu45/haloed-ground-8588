import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  LinkBox,
  Spacer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState([]);
  // var userData = JSON.parse(localStorage.getItem("signup"));

  const handleSubmit = (e) => {
    //Default
    e.preventDefault();
    // console.log("dhdfh", mobile);
    // console.log(userData);
    if (data === null || data.length === 0) {
      localStorage.setItem("mobile", JSON.stringify(mobile));
      navigate("/signup");
    }
    data.forEach((user) => {
      if (data === null) {
        alert("please create an account");
        // window.location.href = "index.html"
      } else if (mobile === user.mobile) {
        localStorage.setItem("mobile", JSON.stringify(mobile));
        let otp1 = "";
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }

        for (let i = 0; i < 4; i++) {
          otp1 += getRandomInt(9);
        }

        console.log();
        alert(`OTP -${otp1}`);
        localStorage.setItem("otp", JSON.stringify(otp1));
        navigate("/mobile");

        // window.location.href = "index.html"
      } else {
        localStorage.setItem("mobile", JSON.stringify(mobile));
        navigate("/signup");
        // alert("user dose not exist")
      }
    });
  };

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
    <Box textAlign={"center"}>
      <Navbar />

      <Box className="flex montserrat-bold,sans-serif" mt='50px'>
        <Box w="50%">
          {" "}
          <h1 className="font-bold text-3xl">
            Welcome to the world of Bewakoof!
          </h1>
          <Image
            className=""
            src="https://images.bewakoof.com/web/group-19-1617704502.png"
            alt=""
          />{" "}
        </Box>
        <Box w="50%">
          <Box >
            {" "}
            <h1 class="text-2xl font-bold text-center">
              Log in / Sign up
            </h1>{" "}
          </Box>
         
            {" "}
            <p className="text-1xl text-center ... text-regal-blue">
              for Latest trends, exciting offers and everything Bewakoof!
            </p>{" "}
          

          <Box alignItems="center" >
            {" "}
            <form w="100%"  onSubmit={handleSubmit}>
              <Box display={"flex"} textAlign={"center"}  width={{ lg: '50%', sm: '50%', md: '50%' }}  className="m-auto mt-4   rounded-md border-2 border-regal-blue flex h-14 content-center " >
                <Box className=" text-center p-3 flex"   fontSize={{ base: "10px", md: "14px", lg: "16px" }}>
                  {" "}
                  <span width="10px">
                    <img
                      width="40%"
                      src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                      alt=""
                    />
                  </span>
                  +91
                </Box>
                <Input
                fontSize={{ base: "10px", md: "14px", lg: "16px" }}
                  variant="unstyled"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="text"
                  placeholder="ENTER MOBILE NUMBER"
                  class=" mr-8  border-transparent
               placeholder-font-bold
              focus:outline-none focus:border-none focus:ring-color-#ffffff0d focus:ring-#ffffff0d
             
              
             
            
              
             "
                />{" "}
              </Box>
              <Button
               width={{ lg: '50%', sm: '50%', md: '50%' }}
                textAlign={"center"}
                color="white"
                bg={"#42a2a2"}
                type="submit"
                className="m-auto mt-4"
              >
                CONTINUE
              </Button>{" "}
            </form>
          </Box>

          <Text fontSize={{ base: "4px", md: "8px", lg: "16px" }} className="m-auto mt-4" >OR</Text>

          <Link to='/email'>
          <Button
               width={{ lg: '50%', sm: '50%', md: '50%' }}
                textAlign={"center"}
                color="white"
                bg={"#42a2a2"}
                type="submit"
                className="m-auto mt-4"
              >
                Log In
              </Button>
          </Link>
        
          <Box width={{ lg: '50%', sm: '50%', md: '50%' }} style={{display:"flex",justifyContent:"space-between"}} className="  m-auto mt-4  h-12  ">
            <Box w="40%" p="2%" className=" flex  rounded-md border-2  border-regal-blue ">
              <Image
                width="15%"
                height={"50%"}
                src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                alt=""
              />
              <Text marginLeft={4} fontSize={{ base: "6px", md: "10px", lg: "14px" }}>
                google
              </Text>
            </Box>
            <Box
             w="40%" p="2%"
              className=" flex   rounded-md before:rounded-md border-2 border-regal-blue "
            >
              <Image
                width="15%"
                height={"50%"}
                src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                alt=""
              />
              <Text marginLeft={4} fontSize={{ base: "6px", md: "10px", lg: "14px" }}>
                facebook
              </Text>
            </Box>
          </Box>
          <Text class="  text-center m-auto mt-4 " >
            By creating an account or logging in, you agree with Bewakoof's
            <a
              href="https://www.bewakoof.com/terms-and-conditions"
              target="_blank"
              color={"teal"}
              rel='noreferrer'
            >
              Terms and Conditions{" "}
            </a>
            and
            <LinkBox color={"teal"}>Privacy Policy</LinkBox>.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSignup;