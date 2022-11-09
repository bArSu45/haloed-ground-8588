import React from 'react'
import CartProduct from '../../Components/CartPage/CartProduct'
import styles from './CartPage.module.css'

const CartPage = () => {
    const data =  [
        {
            "image": "https://images.bewakoof.com/t320/unisex-tie-dye-t-shirt-521176-1659110437-1.jpg",
            "name": "Unisex Very Peri Tie & Dye T-shirt",
            "price": 560,
            "mrp": "₹1099",
            "discount": "You saved ₹539!"
          },
          {
            "image": "https://images.bewakoof.com/t320/unisex-tie-dye-t-shirt-521176-1659110437-1.jpg",
            "name": "Unisex Very Peri Tie & Dye T-shirt",
            "price": 560,
            "mrp": "₹1099",
            "discount": "You saved ₹539!"
          }
    ]
  return (
    <>
  <div className={styles.container}>
    <div>
     <img src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="" />
    </div>
    <div className={styles.user_info}>
        <h6>Signed as</h6>
        <h4>ravindra111223@gmail.com</h4>
    </div>
  </div>
  <hr />
  <div className={styles.cart_head}>
<span><b>My Bag</b> 3 item(s)</span>
</div>
 <div className={styles.cart_container}>
<div className={styles.cart_products}>
    <div className={styles.product_text}>
<p>Yay! You get FREE delivery on this order</p>
    </div>
    <div className={styles.product_item}>
    {data.map((item)=>(
        <CartProduct key={item.id} {...item}/>
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
       <p>₹ 4097</p>
        </div>
        <div className={styles.price_summary_component}>
       <p>Shipping Charges </p>
       <p>FREE</p>
        </div>
        <div className={styles.price_summary_component}>
       <p>Bag Discount </p>
       <p>₹ 4097</p>
        </div>
        <div className={styles.price_summary_component}>
       <p>Subtotal </p>
       <p>₹ 4097</p>
        </div>
        <hr />
        <div className={styles.total}>
       <div>
        <p>Total</p>
        <span>₹ 2352</span>
        </div>
       <button>CONTINUE</button>
        </div>
    </div>
</div>
 </div>
    </>
  )
}

export default CartPage