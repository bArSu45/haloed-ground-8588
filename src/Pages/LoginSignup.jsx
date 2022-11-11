import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  var userData = JSON.parse(localStorage.getItem("signup"));

  const handleSubmit = (e) => {
    //Default
    e.preventDefault();
    console.log("dhdfh", mobile);
    console.log(userData);
    if (userData === null || userData.length === 0) {
      localStorage.setItem("mobile", JSON.stringify(mobile));
      navigate("/signup");
    }
    userData.forEach((user) => {
      if (userData === null) {
        alert("please create an account");
        // window.location.href = "index.html"
      } else if (mobile === user.mobile) {
        localStorage.setItem("mobile", JSON.stringify(mobile));
        let otp1 = ''
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
      
        for (let i = 0; i < 4; i++) {
            otp1 += getRandomInt(9)
        }
      
        console.log();
        alert(`OTP -${otp1}`)
        localStorage.setItem("otp", JSON.stringify(otp1));
        navigate("/mobile");

        // window.location.href = "index.html"
      } else {
        navigate("/signup");
        // alert("user dose not exist")
      }
    });
  };
  //   let otp1 = ''
  //   function getRandomInt(max) {
  //     return Math.floor(Math.random() * max);
  // }

  // for (let i = 0; i < 6; i++) {
  //     otp1 += getRandomInt(9)
  // }

  // console.log();
  // alert(`OTP -${otp1}`)
  return (
    <div>
      <Navbar/>
   
    <div className="flex montserrat-bold,sans-serif m-auto">

      <div className="w-200 m-10">
        {" "}
        <h1 className="font-bold text-3xl">
          Welcome to the world of Bewakoof!
        </h1>
        <img
          className=""
          src="https://images.bewakoof.com/web/group-19-1617704502.png"
          alt=""
        />{" "}
      </div>
      <div className="m-10 h-86 grid grid-cols-1 gap-10 content-center ...">
        <div className="m-auto">
          {" "}
          <h1 class="text-2xl font-bold text-center">Log in / sign up</h1>{" "}
        </div>
        <div>
          {" "}
          <p className="text-1xl text-center ... text-regal-blue">
            for Latest trends, exciting offers and everything Bewakoof!
          </p>{" "}
        </div>

        <div className="h-14 grid grid-cols-1 gap-4 content-center ..">
          {" "}
          <form onSubmit={handleSubmit}>
            <div className=" mt-28 mb-10 ml-28 mr-28  w-13 rounded-md border-2 border-regal-blue flex h-14 content-center ">
              <div className=" text-center p-3 flex"> <span width="10px"><img width="40%" src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" /></span>+91</div>
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                placeholder="ENTER MOBILE NUMBER"
                class=" mr-8  border-transparent
               placeholder-font-bold
              focus:outline-none focus:border-none focus:ring-color-#ffffff0d focus:ring-#ffffff0d
             
              
             
            
              
             "
              />{" "}
            </div>
            <div className="ml-28 mr-28  w-13 bg-#42a2a2 h-14 text-white text-center rounded-md font-bold">
              <button type="submit" className="m-auto mt-4">
                CONTINUE
              </button>{" "}
            </div>
          </form>
        </div>

        <div className=" pl-28 ml-48 mt-20 h-1  ">OR</div>

        <div className=" text-center content-center ml-28 mr-28  w-13 h-12 rounded-md border-2 border-regal-blue  ">
          <Link className="text-center w-3" to="/email">
            {" "}
           <img width="5%" src="https://images.bewakoof.com/web/carbon-email-1620039620.png" alt="" />  CONTINUE WITH EMAIL
          </Link>
        </div>
        <div className="flex ml-28 mr-30">
          <div className=" flex   mr-2 h-10 w-15 pl-20 pr-20 rounded-md border-2 border-regal-blue ">
          <span> <img width="40%"  src="https://images.bewakoof.com/web/group-3-2x-1558356035.png" alt="" /></span><span>google</span>
          </div>
          <div className=" flex  h-10  w-15 pl-20 pr-20  rounded-md before:rounded-md border-2 border-regal-blue ">
            <span> <img width="40%"  src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png" alt="" /></span><span>facebook</span> 
          </div>
        </div>
        <p class="termsAndConditions text-center">
          By creating an account or logging in, you agree with Bewakoof's
          <a
            href="https://www.bewakoof.com/terms-and-conditions"
            target="_blank"
          >
            Terms and Conditions{" "}
          </a>
          and
          <a
            href="https://www.bewakoof.com/privacy-policy-and-disclaimer"
            target="_blank"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginSignup;
