import { Divider, Select, Stack } from '@chakra-ui/react'
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
        <div className={styles.select_box}>
   <div>
    <Select placeholder='Size' size='xs'>
  <option value='option1'>S</option>
  <option value='option2'>M</option>
  <option value='option3'>L</option>
  <option value='option1'>XL</option>
  <option value='option2'>2XL</option>
  <option value='option3'>3XL</option>
</Select>
    </div>
    <div>
    <Select placeholder='Qty' size='xs'>
  <option value='option1'>1</option>
  <option value='option2'>2</option>
  <option value='option3'>3</option>
  <option value='option1'>4</option>
  <option value='option2'>5</option>
  <option value='option3'>6</option>
  <option value='option1'>7</option>
  <option value='option2'>8</option>
  <option value='option3'>9</option>
  <option value='option3'>10</option>
</Select>
    </div>
   </div>
     </div>
     <div className={styles.description_img}>
        <img src={item.image} alt="" width="100px"/>
     </div>
    
     </div>
     <hr />
  <div className={styles.bottom_btn}>
    <div><button>Remove</button></div>
    <div className={styles.vertical_line}></div>
    <div><button>Move to wishlist</button></div>
  </div>
    </div>
  )
}

export default CartProduct