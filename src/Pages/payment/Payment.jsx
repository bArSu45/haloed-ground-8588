
import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import styles from './Payment.module.css'

const Payment = () => {
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
    <label for="scales">Save card details for later</label>
   </div>
   <div className={styles.card_form_text}>
    <p>This transaction you make is totally secure. We don't save your CVV number.</p>
   </div>
   <div className={styles.card_form_button}>
    <button>Pay 2324</button>
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
        <img src={item.image} alt="" width="50px"/>
       <div>
       <p>{item.name}</p>
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
        <p>₹ 999</p>
     </div>
     <div className={styles.payment_component_address_flex}>
        <p>Shipping Charges</p>
        <p>₹ 30</p>
     </div>
     <div className={styles.payment_component_address_flex}>
        <p>Discount on MRP </p>
        <p>₹ 650</p>
     </div>
    </div>
    <hr className={styles.hr}/>
    <div className={styles.payment_component_address_flex}>
        <p><b>Final amount </b></p>
        <p><b>₹ 652</b></p>
     </div>
    </div>
  </div>
  </div>
  
    </>
  )
}

export default Payment