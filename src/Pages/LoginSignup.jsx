import React from "react";

const LoginSignup = () => {
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

        <div className="h-6 grid grid-cols-1 gap-4 content-center ..">
          {" "}
          <div className="rounded-md border-2 border-regal-blue flex  ">
            <div>+91</div>
            <input
              type="text" value="" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            
              
             "
            />{" "}
          </div>
          <div className="bg-#42a2a2 text-white text-center rounded-md font-bold">
            <button>CONTINUE</button>{" "}
          </div>
        </div>
        <div>OR</div>
        <div className="rounded-md border-2 border-regal-blue flex  ">
          continue with EMAIL
        </div>
        <div className="flex">
          <div className="rounded-md border-2 border-regal-blue ">google</div>
          <div className="rounded-md border-2 border-regal-blue ">facebook</div>
        </div>
        <p class="termsAndConditions">
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
  );
};

export default LoginSignup;
