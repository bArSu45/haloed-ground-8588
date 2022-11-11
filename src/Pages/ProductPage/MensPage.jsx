import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import styles from './MensPage.module.css'

export default function MensPage() {
  const [mensData, setMensData] = useState([])
  const [filter, setFilter] = useState('')
  const getMensData = () => {
    axios.get("http://localhost:8080/mensdata")
      .then((res) => {
        setMensData(res.data)
      }).catch((e) => {
        console.log(e)
      })
  }

  const HandleFilter = (e) => {
    setFilter(e.target.value)
    // if (mensData.length > 0) {
    let newMensData = mensData.map((item) => {
      return filter === item.brand_namez ? item : null
    })
    setMensData(newMensData)
    // }
  }

  useEffect(() => {
    getMensData()
  }, [])
  console.log(mensData)
  return (
    <div id={styles.product_sidebar_main_div}>
      <div id={styles.sidebar}>
        <Box>
          <select onChange={HandleFilter} style={{ width: '250px', fontSize: '30px', marginTop: '50px', marginLeft: '-40px', border: '1px dotted black' }} name="Filter" id="">
            <option value="">Filter</option>
            <option>Click n Buy</option>
            <option>Prada</option>
            <option>Gucci</option>
            <option>Louis Vuitton</option>
            <option>Burberry</option>
          </select>
        </Box>

        <Box>
          <select style={{ width: '250px', fontSize: '30px', marginTop: '100px', marginLeft: '-40px', border: '1px dotted black' }} name="Filter" id="">
            <option value="">Sort</option>
            <option>Low- High</option>
            <option>High-Low</option>
          </select>
        </Box>
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
