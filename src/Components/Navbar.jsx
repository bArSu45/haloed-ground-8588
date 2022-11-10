

import React, { useEffect, useState } from 'react'
import b from "./Navbar.module.css"
import "../index.css"
import { Link } from 'react-router-dom'
import { CiMobile2 } from 'react-icons/ci';
import logo from "../Assests/logo1.png"



const Navbar = ()=> {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return <div className={`navbar ${stickyClass}`}>
    <BottomNav/>
  </div>;
    
    

}

const data1={
  url:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/1-icon.svg",
  heading:"Education",
  p:[
     
      "Blog",
      
      "Ebooks ,Guides & More",
      
      "Free Courses & Certifications",
      
      "Inbound Methodology"
  ]
}


const List=({data})=>{
  return(
  <div>
      <div className={b.head}>
          <img src={data.url} alt="hello" />
          <p>{data.heading}</p>
      </div>
      {data.p.map((item)=>(<p  className={b.sub_head}> {item}</p>))}

  </div>


  )
}


const BottomNav=()=> {

  return (
      <>
         <div>
         <div className={b.topcontainer}>
            <div className={b.topmiddle_container}>
                <div className={b.right_container}>
                    <p className={b.content}>Offers</p>
                    <p className={b.content}>Facebook</p>
                    <div style={{display:"flex",gap:"5px"}}><span style={{marginTop:"2px"}}><CiMobile2/></span> <span className={b.content}>Download App</span> </div>
                    
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
                        <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div className={b.second_div}>
                      <div className={b.small_box}>
                          <div className={b.dropdown}>
                              <p>Men</p>
                              {/* <ChevronDownIcon marginTop="5px" /> */}
                              <div>
                                  <div className={b.dropdown_content3}>
                                      <h3>The HubSpot CRM Platform</h3>
                                      <p style={{fontSize:"14px",fontWeight:"lighter",marginTop:"15px"}}>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
                                      <div className={b.para_head}>
                                          {/* <div className={b.para_below}><span>Free HubSpot CRM</span><ArrowForwardIcon/></div> */}
                                          {/* <div className={b.para_below}><span>overview of all products</span><ArrowForwardIcon/></div> */}
                                      </div>
                                      <div className={b.box_list}>
                                          <div className={b.list_box}>
                                              <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                              <div className={b.max}>
                                                  <h4>Marketing Hub</h4>
                                                  <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                  <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                              </div>
                                              

                                          </div>
                                          <div className={b.list_box}>
                                              <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                              <div className={b.max}>
                                                  <h4>Sales Hub</h4>
                                                  <p style={{fontSize:"14px",fontWeight:"lighter"}}>sales  software.</p>
                                                  <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                              </div>
                                              

                                          </div>

                                          <div className={b.list_box}>
                                              <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                              <div className={b.max}>
                                                  <h4>Service Hub</h4>
                                                  <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                  <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                              </div>
                                              

                                          </div>

                                          <div className={b.list_box}>
                                              <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                              <div className={b.max}>
                                                  <h4>CMS Hub</h4>
                                                  <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                  <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                              </div>
                                              

                                          </div>

                                          <div className={b.list_box}>
                                              <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                              <div className={b.max}>
                                                  <h4>Operations Hub</h4>
                                                  <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                  <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                              </div>
                                              

                                          </div>


                                      </div>
                                      <div className={b.bottom}>
                                          <h4>App Marketplace</h4>
                                          <p style={{fontSize:"14px",fontWeight:"lighter",marginTop:"15px"}}>connect your favorite apps to hubspot .see all integration at </p>
                                      </div>
                                      
                                      


                                  </div>



                              </div>

                          </div>
                          <div className={b.dropdown}>
                              <p>Women</p>

                          </div>
                          <div className={b.dropdown}>
                              <p>Mobile Covers</p>
                              {/* <ChevronDownIcon marginTop="5px" /> */}
                              <div>
                                  <div className={b.dropdown_content2}>
                                      <div className={b.haw}>
                                      <div><List data={data1}/></div>
                                      <div><List data={data1}/></div>
                                      <div><List data={data1}/></div>
                                      <div><List data={data1}/></div>
                                      <div><List data={data1}/></div>
                                      </div>
                                      


                                  </div>



                              </div>

                              <div>

                              </div>

                          </div>

                      </div>


                      <div>
                          <div className={b.input}>
                            <div className={b.input1}>
                                <input className={b.input_box} placeholder='search by product,category or collection' type="text" />

                            </div>
                            <div>

                            </div>
                          </div>
                      </div>

                  </div>
              </div>

          </div>
          

      </>
  )
}


        
    
export default Navbar
