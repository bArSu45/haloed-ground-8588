import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../../Components/CartPage/CartProduct'
import styles from './CartPage.module.css'


const CartPage = () => {
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
    const [qty,setQty] = useState(1)
    const [user,setUser] = useState([])
    var email = JSON.parse(localStorage.getItem("email"))
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
    console.log(user)
    // console.log(data)
    const subtotal = data.reduce((a, {discountedPriceText}) => a + (discountedPriceText * qty), 0);
    const totalMrp = data.reduce((a, {actualPriceText}) => a + (actualPriceText * qty), 0);
    const bagDiscount = data.reduce((a, {discount_price_box}) => a + (discount_price_box * qty), 0);
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
  <div className={styles.cart_head}>
<span><b>My Bag</b> {data.length} item(s)</span>
</div>
 <div className={styles.cart_container}>
<div className={styles.cart_products}>
    <div className={styles.product_text}>
<p>Yay! You get FREE delivery on this order</p>
    </div>
    <div className={styles.product_item}>
    {data.map((item)=>(
        <CartProduct key={item.id} id={item.id} discountedPriceText = {item.discountedPriceText}
        qty={qty} setQty={setQty}
        actualPriceText={item.actualPriceText} discount_price_box={item.discount_price_box}
        clr_shade_4={item.clr_shade_4} productImgTagSrc={item.productImgTagSrc} setData={setData} getCartData={getCartData}/>

    )
    )}
    </div>
   
</div>
<div className={styles.cart_summary}>
<div className={styles.summary_text}>
<p>Save extra ₹195 with TriBe</p>
    </div>
    <div className={styles.coupen}>
        <h4>Wohoo! Get a free gift worth Rs.129 on all prepaid orders Use Coupon Code- GETFREEGIFT.</h4>
    </div>
    <div className={styles.coupen}>
        <h4>Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200</h4>
    </div>
    <div className={styles.coupen}>
        <h4>Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!</h4>
    </div>
    <div className={styles.redeem}>
      <div className={styles.redeem_item}>
      <p>
        Have a Coupon / Referral / Gift Card ?
        </p>
        <p>
         <b>Redeem</b>   
        </p>
      </div>
    </div>
    <div className={styles.price_summary}>
        <div className={styles.price_summary_title}>
            <b>PRICE SUMMARY</b>
        </div>
        <div className={styles.price_summary_component}>
       <p>Total MRP (Incl. of taxes) </p>
       <p>₹ {totalMrp}</p>
        </div>
        <div className={styles.price_summary_component}>
       <p>Shipping Charges </p>
       <p>FREE</p>
        </div>
        <div className={styles.price_summary_component}>
       <p>Bag Discount </p>
       <p>₹ {bagDiscount}</p>
        </div>
        <div className={styles.price_summary_component}>
       <p>Subtotal </p>
       <p>₹ {subtotal}</p>
        </div>
        <hr />
        <div className={styles.total}>
       <div>
        <p>Total</p>
        <span>₹ {subtotal}</span>
        </div>
       <button><Link to ="/payment" >CONTINUE</Link></button>
        </div>
    </div>
</div>
 </div>
    </>
  )
}

export default CartPage