import React from 'react'
import styles from './CartProduct.module.css'

const CartProduct = ({...item}) => {
  return (
    <div className={styles.container}>
     <div className={styles.offers}>
       <div className={styles.offers_right}>
        <p><b>Buy 2 Get 1 offer available</b></p>
        <p>Add 2 more item to avail this offer</p>
       </div>
       <div className={styles.offers_left}>Add items</div>
     </div>
     <div className={styles.description}>
     <div className={styles.description_right}>
        <p>Unisex Very Peri Tie & Dye T-Shirt</p>
        <p><b>₹{item.price}</b><span className={styles.text_strike}>{item.mrp}</span></p>
        <span>{item.discount}</span>
     </div>
     <div className={styles.description_img}>
        <img src={item.image} alt="" width="100px"/>
     </div>
     </div>
    </div>
  )
}

export default CartProduct