import React, { useEffect, useState } from "react";
import n from "./Nav.module.css";
import "../index.css";
import {AiOutlineMenu} from "react-icons/ai"
import {TbLetterC} from "react-icons/tb"
import {FiShoppingBag,FiHeart,FiSearch} from "react-icons/fi"

import "../App.css"




 export const Navbar1 = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <div className={`navbar ${stickyClass}`}>
      <Nav/>
    </div>
  );
};

const Nav=()=>{
    return(
        <>
        <div className={n.container} >
            <div className={n.first_div}>
                <AiOutlineMenu/>
                <TbLetterC/>
            </div>
            <div className={n.first_div}>
                <FiSearch/>

                
                <FiHeart/>
                <FiShoppingBag/>


            </div>

        </div>
        </>
    )
}