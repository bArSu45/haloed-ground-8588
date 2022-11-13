import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Select, Stack } from '@chakra-ui/react'
import styles from './MensPage.module.css'

export default function MensPage() {
  const [mensData, setMensData] = useState([])

  const getMensData = () => {
    axios.get("http://localhost:8080/womensdata")
      .then((res) => {
        setMensData(res.data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getMensData()
  }, [])
  console.log(mensData)
  return (
    <div id={styles.product_sidebar_main_div}>
      <div id={styles.sidebar}>
        
        <Stack spacing={10}>
  <Select placeholder='Brand' size='md'  borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>Gucci</option>
  <option value='option2'>Burberry</option>
  <option value='option3'>Prada</option>
  </Select>
  <Select placeholder='Category' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>T-Shirts</option>
  <option value='option2'>Shirts</option>
  <option value='option3'>Shorts</option>
  </Select>
  <Select placeholder='Size' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>Small</option>
  <option value='option2'>Large</option>
  <option value='option3'>X-large</option>
  </Select>
  <Select placeholder='Color' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>Black</option>
  <option value='option2'>White</option>
  <option value='option3'>Red</option>
  </Select>
  <Select placeholder='Design' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>Solid</option>
  <option value='option2'>Printed</option>
  <option value='option3'>Checked</option>
  </Select>
  <Select placeholder='Fit' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>Oversized</option>
  <option value='option2'>Skinny Fit</option>
  <option value='option3'>Regular Fit</option>
  </Select>
  <Select placeholder='Neck' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>Round Neck</option>
  <option value='option2'>V Neck</option>
  <option value='option3'>Hooded</option>
  </Select>
  <Select placeholder='Sleeve' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>Half Sleeve</option>
  <option value='option2'>Full Sleeve</option>
  <option value='option3'>Sleeveless</option>
  </Select>
  <Select placeholder='Discount' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>20% Discount</option>
  <option value='option2'>50% Discount</option>
  <option value='option3'>70% Discount</option>
  </Select>
</Stack>
      </div>
    <div id={styles.mensPage_main_div}>
      {mensData.length > 0 && mensData.map((item) => {
        return (
          
          <div key={item.id} id={styles.mensPage_grid_boxez}>
            <Box>
            <img src={item.productImgTagSrc} alt="none" />
            </Box>
            <Box id={styles.name_brand_div}>
            <h1 id={styles.product_brand}>{item.brand_namez}</h1>
            <h1 id={styles.product_name}>{item.clr_shade_4}</h1>
            <Box id={styles.price_div}>
              <h1 id={styles.discount_price}>{item.discount_price_box}</h1>
              <h1 id={styles.actual_price}>{item.actualPriceText}</h1>
              </Box>
            </Box>
          </div>
          
        )
      })}
    </div>
    </div>
  )
}
