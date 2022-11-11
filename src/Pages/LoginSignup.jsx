import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginSignup = () => {
  const [mobile, setMobile] = useState("");
  var userData = JSON.parse(localStorage.getItem("signup"))
console.log(userData)
  const handleSubmit = (e) => {
    //Default
    e.preventDefault();
console.log("dhdfh")
    userData.forEach((user)=>{
      if (userData === null) {
        alert("please create an account")
            // window.location.href = "index.html"
    } else if (mobile === user.mobile) {
      let otp1 = ''
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    for (let i = 0; i < 6; i++) {
        otp1 += getRandomInt(9)
    }
    
    console.log();
    alert(`OTP -${otp1}`)
        Navigate("/opt")
        localStorage.setItem("signin", JSON.stringify(userData))
        // window.location.href = "index.html"
    } else {
      Navigate("/signup")
        alert("user dose not exist")
    }
    
    })
   
  };
  let otp1 = ''
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 6; i++) {
    otp1 += getRandomInt(9)
}

console.log();
alert(`OTP -${otp1}`)
  return (
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
          <div className=" mt-28 ml-28 mr-28  w-13 rounded-md border-2 border-regal-blue flex h-14 content-center ">
          
            <div className=" text-center p-3">+91</div>

            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="text" placeholder="ENTER MOBILE NUMBER"  class="  border-transparent
               placeholder-font-bold
              focus:outline-none focus:border-none focus:ring-color-#ffffff0d focus:ring-#ffffff0d
             
              
             
            
              
             "
            />{" "}
          </div>
          <div className="ml-28 mr-28  w-13 bg-#42a2a2 h-14 text-white text-center rounded-md font-bold">
            <button type="submit" className="m-auto mt-4">CONTINUE</button>{" "}
          </div>
          </form>
        </div>
       
        <div className=" pl-28 ml-48 mt-20 h-1  "> 
        OR
         </div>
        
        <div className=" content-center ml-28 mr-28  w-13 h-12 rounded-md border-2 border-regal-blue flex  ">
          <span className=" m-auto"> CONTINUE WITH EMAIL</span>
        </div>
        <div className="flex ml-28 mr-30">
          <div className="   mr-2 h-10 w-15 pl-20 pr-20 rounded-md border-2 border-regal-blue ">google</div>
          <div className="  h-10  w-15 pl-20 pr-20  rounded-md before:rounded-md border-2 border-regal-blue ">facebook</div>
        </div>
        <p class="termsAndConditions text-center">
          By creating an account or logging in, you agree with Bewakoof's
          <a
            href="https://www.bewakoof.com/terms-and-conditions"
            target="_blank">
            Terms and Conditions{" "}
          </a>
          and
          <a href="https://www.bewakoof.com/privacy-policy-and-disclaimer" target="_blank">Privacy Policy</a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
