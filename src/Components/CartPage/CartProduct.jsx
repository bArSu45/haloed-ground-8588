import { Divider, Select, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './CartProduct.module.css'

const CartProduct = ({id,qty,setQty,productImgTagSrc,clr_shade_4,discountedPriceText,actualPriceText,discount_price_box,setData,getCartData}) => {
  // console.log(item)
//   function removeItem(id){
//     console.log(id)
//     // setData(item.filter((el)=>el.id != id))
// }
const deleteDataFromCart = (id) =>{
  // console.log(id)
  axios.delete(`https://clickandbuy-json-server.onrender.com/cartdata/${id}`)
 getCartData()
}
useEffect(()=>{
  deleteDataFromCart()
 
},[])

// const calculate =(e,discountedPriceText)=>{
// setQty(qty * discountedPriceText)
// }
console.log(qty)
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
        <p>{clr_shade_4}</p>
        <p><b>₹{discountedPriceText}</b><span className={styles.text_strike}>₹{actualPriceText}</span></p>
        <span>You saved ₹{discount_price_box} !</span>
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
    <Select placeholder='Qty' size='xs' value={qty} onChange={(e)=>
      setQty(e.target.value)
    }>
  <option value='1' >1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
  <option value='6'>6</option>
  <option value='7'>7</option>
  <option value='8'>8</option>
  <option value='9'>9</option>
  <option value='10'>10</option>
</Select>
    </div>
   </div>
     </div>
     <div className={styles.description_img}>
        <img src={productImgTagSrc} alt="" width="100px"/>
     </div>
    
     </div>
     <hr />
  <div className={styles.bottom_btn}>
    <div><button onClick={() => deleteDataFromCart(id)}>Remove</button></div>
    <div className={styles.vertical_line}></div>
    <div><button>Move to wishlist</button></div>
  </div>
    </div>
  )
}

export default CartProduct