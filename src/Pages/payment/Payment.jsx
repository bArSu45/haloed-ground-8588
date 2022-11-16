
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Checkbox, CloseButton, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Payment.module.css'

const Payment = () => {

    // const data =  [
    //     {
    //         "image": "https://images.bewakoof.com/t320/unisex-tie-dye-t-shirt-521176-1659110437-1.jpg",
    //         "name": "Unisex Very Peri Tie & Dye T-shirt",
    //         "price": 560,
    //         "mrp": "₹1099",
    //         "discount": "You saved ₹539!"
    //       },
    //       {
    //         "image": "https://images.bewakoof.com/t320/unisex-tie-dye-t-shirt-521176-1659110437-1.jpg",
    //         "name": "Unisex Very Peri Tie & Dye T-shirt",
    //         "price": 560,
    //         "mrp": "₹1099",
    //         "discount": "You saved ₹539!"
    //       }
    // ]
    const [data,setData] = useState([])
    const [showAlert, setShowAlert] = useState(false)
    var email = JSON.parse(localStorage.getItem("email"))
    const navigate = useNavigate()
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
    const subtotal = data.reduce((a, {discountedPriceText}) => a + discountedPriceText, 0);
    const totalMrp = data.reduce((a, {actualPriceText}) => a + actualPriceText, 0);
    const bagDiscount = data.reduce((a, {discount_price_box}) => a + discount_price_box, 0);
    useEffect(()=>{
      getCartData()
      if(showAlert === true){
      
        setTimeout(()=>{
         navigate("/")
        },2000)
      }
    },[data])
    // console.log(data)

  return (
    <>
 <div className={styles.container}>
    <div>
    <Link to="/">
              <img
                style={{ width: "15%"  }}
                src="https://play-lh.googleusercontent.com/zZ6CalfB1nkHveMXD6iD6he6GJW6IemWjlNDPw1mQoxnx1Yo_qLNcJbhxbT34nYFvkgX"
                alt=""
              />
            </Link>
    </div>
    <div className={styles.user_info}>
        <h6>Signed as</h6>
        <h4>{email}</h4>
    </div>
  </div>
  <hr />
  {showAlert && (
         <Alert status='success' variant='solid' pl='110px'>
         <AlertIcon />
         Order is Placed !  
       </Alert>
      
      )
  
      }      
  <div className={styles.head}>
    <b>Choose your payment method</b>
  </div>
  <div className={styles.payment_component}>
  <div className={styles.payment_component_left}>
    <div className={styles.card_heading}>
        <div className={styles.card_selected}>Debit/Credit Card</div>
        <div className={styles.card_all}>Wallet</div>
        <div className={styles.card_all}>UPI</div>
        <div className={styles.card_all}>Net banking</div>
        <div className={styles.card_all}>Cash On Delivery</div>
        <div className={styles.card_all}></div>
    </div>
    <div className={styles.card_form}>
    <div className={styles.card_header}>
        <img src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg" alt="" />
        <img src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg" alt="" />
        <img src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg" alt="" />
        <img src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg" alt="" />
    </div>
    <div className={styles.input_card_form}>
    <div><input placeholder="Card Number" type="text" /></div>
    <div className={styles.input_card_form_cvv}>
        <div><input placeholder="Valid through(MM/YY)" type="text" /></div>
        <div><input placeholder="CVV" type="text" /></div>
    </div>
    <div><input placeholder="Name On Card" type="text" /></div>
    </div>
   <div className={styles.card_form_checkbox}>
   <input type="checkbox" />
    <label for="scales">Cash on Delivery</label>
   </div>
   <div className={styles.card_form_text}>
    <p>This transaction you make is totally secure. We don't save your CVV number.</p>
   </div>
   <div className={styles.card_form_button}>
    
    <button onClick={()=>setShowAlert(true)}>Pay {subtotal}</button>
    
   </div>
    </div>
  
  </div>
  <div className={styles.payment_component_right}>
    <div className={styles.payment_component_address}>
        <p>Delivering order to <b>Ravindra Kumar Yadav</b></p>
       <p>54, rajiv nagar telibagh, Lucknowlucknow....</p>
    </div>
    <hr className={styles.hr}/>
    <div className={styles.payment_component_address}>
     <h5><b>You are paying for these items</b></h5>
     <div>
{data.map((item)=>{
    return(
        <div className={styles.payment_component_product}>
        <img src={item.productImgTagSrc} alt="" width="50px"/>
       <div>
       <p>{item.clr_shade_4}</p>
        <p>Estimated delivery by <span>24 November 2022</span></p>
       </div>
        </div>
    )
})}
     </div>
     <hr className={styles.hr}/>
     <div className={styles.payment_component_address}>
     <h4><b>Price Summary</b></h4>
     <div className={styles.payment_component_address_flex}>
        <p>Total MRP (Incl. of taxes) </p>
        <p>₹ {totalMrp}</p>
     </div>
     <div className={styles.payment_component_address_flex}>
        <p>Shipping Charges</p>
        <p>₹ 30</p>
     </div>
     <div className={styles.payment_component_address_flex}>
        <p>Discount on MRP </p>
        <p>₹ {bagDiscount}</p>
     </div>
    </div>
    <hr className={styles.hr}/>
    <div className={styles.payment_component_address_flex}>
        <p><b>Final amount </b></p>
        <p><b>₹ {subtotal}</b></p>
     </div>
    </div>
  </div>
  </div>
  
    </>
  )
}

export default Payment