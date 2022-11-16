import React, { useEffect, useState } from "react";
import b from "./Navbar.module.css";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import { CiMobile2, CiSearch } from "react-icons/ci";
import { BsHeart, BsBag } from "react-icons/bs";
import "../App.css"
import './CartPage/nav.css'

import logo from "../Assests/logo1.png";
import { Avatar, AvatarGroup, Box, Heading } from "@chakra-ui/react";
import axios from "axios";

const Navbar = () => {
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
      <BottomNav />
    </div>
  );
};
const data1top = "Top wear";
const data2top = "Bottom wear";
const data3top = "Winter wear";

const data1 = [
  "Printed T-Shirts",
  "Oversized T-shirts",
  "Plain T-Shirts",
  "Fashion T-Shirts",
  "Activewear T-Shirts",
  "Full Sleeve T-Shirts",
  "Half Sleeve T-Shirts",
  "Shirts",
  "Vests",
  "Co-ord Sets",
  "Plain T-Shirts",
  "Fashion T-Shirts",
  "Activewear T-Shirts",
  "Full Sleeve T-Shirts",
  "Half Sleeve T-Shirts",
  "Shirts",
  "Vests",
  "Co-ord Sets",
];
const img = [
  "https://images.bewakoof.com/nav_menu/icon-winter-1665155950.png",
  "https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png",
  "https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png",
  "https://images.bewakoof.com/nav_menu/Circle-Icon-Marvel-Youth-Beat-1653558342.png",
  "https://images.bewakoof.com/nav_menu/pride-icon-circle-1655695905.png",
  "https://images.bewakoof.com/nav_menu/play-1652947970.png",
  "https://images.bewakoof.com/nav_menu/icon-winter-1665155950.png",
  "https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png",
  "https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png",
  "https://images.bewakoof.com/nav_menu/Circle-Icon-Marvel-Youth-Beat-1653558342.png",
  "https://images.bewakoof.com/nav_menu/pride-icon-circle-1655695905.png",
  "https://images.bewakoof.com/nav_menu/play-1652947970.png",
  "https://images.bewakoof.com/nav_menu/icon-winter-1665155950.png",
  "https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png",
  "https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png",
  "https://images.bewakoof.com/nav_menu/Circle-Icon-Marvel-Youth-Beat-1653558342.png",
  "https://images.bewakoof.com/nav_menu/pride-icon-circle-1655695905.png",
  "https://images.bewakoof.com/nav_menu/play-1652947970.png",
  "https://images.bewakoof.com/nav_menu/icon-winter-1665155950.png",
  "https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png",
  "https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png",
  "https://images.bewakoof.com/nav_menu/Circle-Icon-Marvel-Youth-Beat-1653558342.png",
  "https://images.bewakoof.com/nav_menu/pride-icon-circle-1655695905.png",
  "https://images.bewakoof.com/nav_menu/play-1652947970.png",
  "https://images.bewakoof.com/nav_menu/icon-winter-1665155950.png",
  "https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png",
  "https://images.bewakoof.com/nav_menu/urban-collection-1660645934.png",
  "https://images.bewakoof.com/nav_menu/Circle-Icon-Marvel-Youth-Beat-1653558342.png",
  "https://images.bewakoof.com/nav_menu/pride-icon-circle-1655695905.png",
  "https://images.bewakoof.com/nav_menu/play-1652947970.png",
];
const data2 = [
  "Winterwear Store",
  "Winterwear Store",
  "Space Collection",
  "Space Collection ",
  "Pokemon Collection",
  "Colour Splash Collection",
  "Colour Splash Collection",
  "Design Of the Day",
  "Design Of the Day Urban Collection",
  "Urban CollectionUndrdawg by Bewakoof",
  "Undrdawg by BewakoofPride Collection",
  "Pride CollectionMarvel Youth Beat",
  "Winterwear Store",
  "Winterwear Store",
  "Space Collection",
  "Space Collection ",
  "Pokemon Collection",
  "Colour Splash Collection",
  "Colour Splash Collection",
  "Design Of the Day",
  "Design Of the Day Urban Collection",
  "Urban CollectionUndrdawg by Bewakoof",
  "Undrdawg by BewakoofPride Collection",
  "Pride CollectionMarvel Youth Beat",
  "Winterwear Store",
  "Winterwear Store",
  "Space Collection",
  "Space Collection ",
  "Pokemon Collection",
  "Colour Splash Collection",
  "Colour Splash Collection",
  "Design Of the Day",
  "Design Of the Day Urban Collection",
  "Urban CollectionUndrdawg by Bewakoof",
  "Undrdawg by BewakoofPride Collection",
  "Pride CollectionMarvel Youth Beat",
];

const List = ({ data1, data1top }) => {
  return (
    <>
      <p className={b.heading}>{data1top}</p>
      <ul>
        {data1.map((item) => (
          <li className={b.listitem}>{item}</li>
        ))}
      </ul>
    </>
  );
};
const List2 = () => {
  return (
    <>
      <p className={b.heading}>Special</p>
      <ul>
        {data2.map((item) => (
          <li className={b.listitem}>{item}</li>
        ))}
      </ul>
    </>
  );
};
const List3 = () => {
  return (
    <>
      <p className={b.heading}>Special</p>
      <ul>
        {img.map((item) => (
          <li className={b.listitem}>
            <img height="80px" width="80px" src={item} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};
const brand1 = "Xiaomi";
const brand2 = "Samsung";
const brand3 = "Apple";
const brand4 = "Realmi";
const brand5 = "One Plus";

const brand1data = [" Mi 12 Pro 5G ", "Redmi 9 Power", "Redmi 10A"];
const brand2data = [
  "SamsungSamsung Galaxy Note 10 lite ",
  "Samsung Galaxy Note 10 Plus",
  "Samsung Galaxy Note 10",
];
const brand3data = [" OnePlus 9R", "OnePlus 9RT", "OnePlus 9"];

const BottomNav = () => {
  var sts  = JSON.parse(localStorage.getItem("sts"));
  const [data,setData] = useState([])
  const getCartData = () =>{
    axios.get("https://clickandbuy-json-server.onrender.com/cartdata")
    .then((res)=>{
      setData(res.data)
      // console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
      setData(data)
    })
  }
  useEffect(()=>{
    getCartData()
  },[])
  return (
    <>
      <div>
        <div className={b.topcontainer}>
          <div className={b.topmiddle_container}>
            <div className={b.right_container}>
              <p className={b.content}>Offers</p>
              <p className={b.content}>Facebook</p>
              <div style={{ display: "flex", gap: "5px" }}>
                <span style={{ marginTop: "2px" }}>
                  <CiMobile2 />
                </span>{" "}
                <span className={b.content}>Download App</span>{" "}
              </div>

              <p className={b.content}>Tribe Membership</p>
            </div>
            <div className={b.left_container}>
              <p className={b.content}>Contact Us</p>
              <p className={b.content}>Track Order</p>
            </div>
          </div>
        </div>
      </div>
      <div className={b.container}>
        <div className={b.sub_container}>
          <div className={b.first_div}>
            <Link to="/">
              <img
                style={{ width: "20%" ,marginTop: "53px" }}
                src="https://play-lh.googleusercontent.com/zZ6CalfB1nkHveMXD6iD6he6GJW6IemWjlNDPw1mQoxnx1Yo_qLNcJbhxbT34nYFvkgX"
                alt=""
              />
            </Link>
          </div>
          <div className={b.second_div}>
            <div className={b.small_box}>
              <div className={b.dropdown}>
                <p> <Link to="/mens"> Men</Link> </p>

                <div>
                  <div className={b.dropdown_content3}>
                    <div className={b.hover_container}>
                      <div>
                        <List data1={data1} data1top={data1top} />
                      </div>
                      <div>
                        <List data1={data1} data1top={data2top} />
                      </div>
                      <div>
                        <List data1={data1} data1top={data3top} />
                      </div>
                      <div className={b.line}></div>
                      <div>
                        {" "}
                        <List3 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={b.dropdown}>
                <p> <Link to="/womens">Women</Link> </p>

                <div>
                  <div className={b.dropdown_content33}>
                    <div className={b.hover_container}>
                      <div>
                        <List data1={data1} data1top={data1top} />
                      </div>
                      <div>
                        <List data1={data1} data1top={data2top} />
                      </div>
                      <div>
                        <List data1={data1} data1top={data3top} />
                      </div>
                      <div className={b.line}></div>
                      <div>
                        {" "}
                        <List3 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={b.dropdown}>
                <p>Mobile Covers</p>

                <div>
                  <div className={b.dropdown_content333}>
                    <p>Popular Brands</p>
                    <div className={b.hover_container}>
                      <div>
                        <List data1={brand1data} data1top={brand1} />
                        <List data1={brand3data} data1top={brand3} />
                      </div>
                      <div>
                        <List data1={brand2data} data1top={brand2} />
                        <List data1={brand2data} data1top={brand4} />
                      </div>
                      <div>
                        <List data1={brand3data} data1top={brand5} />
                      </div>
                      <div className={b.line}></div>
                      <div>
                        <p>Oth  er Brands</p>
                        <ul>
                          <li className={b.listitem}>Oppo</li>
                          <li className={b.listitem}>Huawei</li>
                          <li className={b.listitem}>Moto</li>
                        </ul>
                        <Link to="/">See all devices</Link>
                      </div>
                      <div>
                        <img
                          height="350px"
                          width="200px"
                          src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={b.input}>
                <div className={b.input1}>
                  <span style={{ height: "18px", width: "18px" }}>
                    <CiSearch />
                  </span>
                  <input
                    className={b.input_box}
                    placeholder="search by product,category or collection"
                    type="text"
                  />
                </div>
                <div className={b.login}>
                  <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                    I
                  </span>
                  <Link to="/login">
                    {" "}
                    <span>{sts?
                    <Box disabled={true} fontSize="12px" className="drop">
                    <Heading fontSize="12px">
                      <AvatarGroup spacing='1rem'>
                    <Avatar boxSize={8} bg='teal.500' />
                   </AvatarGroup>
                    </Heading>
                    <Box className="dropmenu" bg="white"  p="30px">
                      {" "}
                      <Heading mt='30px'fontSize="12px">Hi</Heading>
                      <Heading  mt='30px' fontSize="12px">my Account</Heading>
                      <Heading  mt='30px' fontSize="12px">My Wishlist</Heading>
                      <Heading  mt='30px' fontSize="12px">My Orders</Heading>
                      <Heading  mt='30px' fontSize="12px">My wallet</Heading>
                      <Heading  onClick={()=>{
                        localStorage.setItem("sts", JSON.stringify(false));
                      }} mt='30px' fontSize="12px">Logout</Heading>{" "}
                    </Box>{" "}
                  </Box>
                     
                    :"Login"}</span>
                  </Link>
                  <span className={b.icon}>
                    <BsHeart />
                  </span>
               
                  
                 <Link to="/cart"> <span className={b.icon}>
                 <span><BsBag /></span><span style={{fontSize:"12px",borderRadius:"10px",padding:"3px 2px",marginLeft:"-15px",height:"5px"}}>{data.length}</span>
                  
                  </span>
                  </Link>
                  <span>
                    <img
                      height="40px"
                      width="40px"
                      src="https://illustoon.com/photo/910.png"
                      alt=""
                    />
                  </span>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
