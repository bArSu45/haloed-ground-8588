import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Select, Stack } from '@chakra-ui/react'
import styles from './MensPage.module.css'
import Navbar from '../../Components/Navbar'

export default function MensPage() {
  // const [mensData, setMensData] = useState([])
  // const [filter, setFilter] = useState('')
  // const getMensData = () => {
  //   axios.get("http://localhost:8080/mensdata")
  //     .then((res) => {
  //       setMensData(res.data)
  //     }).catch((e) => {
  //       console.log(e)
  //     })
  // }

  // const HandleFilter = (e) => {
  //   setFilter(e.target.value)
  //   // if (mensData.length > 0) {
  //   let newMensData = mensData.map((item) => {
  //     return filter === item.brand_namez ? item : null
  //   })
  //   setMensData(newMensData)
  //   // }
  // }

//   const [sortBy, setSortyBy]=useState("")
//   const [mensData, setMensData] = useState([])
//   const [filter, setFilter] = useState('')
//   const getMensData = (sortBy,filter) => {
//     axios.get(`http://localhost:8080/mensdata?_sort=id&_order=${sortBy}&brand_namez=${filter}`)
//         .then((res) => {
//             setMensData(res.data)
            
//         }).catch((e) => {
//             console.log(e)
//         })
// }
// const HandleFilter=(e)=>{
    
// setFilter(e.target.value) 

//     }
//   const Sorting=(e)=>{
    
// setSortyBy(e.target.value) 
// console.log("ff",sortBy)
  // }
//   useEffect(() => {
   

//     // console.log(mensData)
// }, []) 
// console.log("ff",mensData)

  // const addCartData = (data) => {
  //   axios.post("http://localhost:8080/cartdata", data)
  //     .then((res) => {
  //       console.log(res.data)
  //     }).catch((e) => {
  //       console.log(e)
  //     })
  // }

  // useEffect(() => {
  //   getMensData()
  // }, [])
  // console.log(mensData)
  const [mensData, setMensData] = useState([])
  const [sortBy, setSortyBy]=useState("")
  const [filter, setFilter] = useState('')
  const getMensData = (sortBy,filter) => {
    axios.get(`http://localhost:8080/mensdata?_sort=discount_price_box&_order=${sortBy}&brand_namez=${filter}`)
        .then((res) => {
            setMensData(res.data)
            
        }).catch((e) => {
            console.log(e)
        })
}
const HandleFilter=(e)=>{
    
setFilter(e.target.value) 

    }
  const Sortin=(e)=>{
    
setSortyBy(e.target.value) 
console.log("ff",sortBy)
  }
  useEffect(() => {
    // getMensData()
    getMensData(sortBy,filter)

    // console.log(mensData)
}, [sortBy,filter]) 
console.log("ff",mensData)
const addCartData=(data)=>{
axios.post("http://localhost:8080/cartdata",data).then((r)=>{

console.log(r.data)
}).
catch((e)=>{
  console.log(e)
})
}


  return (
    <>   <Navbar/>
    <div id={styles.product_sidebar_main_div}>
   
      <div id={styles.sidebar}>
        
        <Stack spacing={10}>
  <Select onChange = {HandleFilter} placeholder='Brand' size='md' mt="50px"  borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='Gucci'>Gucci</option>
  <option value='Burberry'>Burberry</option>
  <option value='Prada'>Prada</option>
  </Select>
  <Select placeholder='Category' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='T-Shirts'>T-Shirts</option>
  <option value='Shirts'>Shirts</option>
  <option value='Shorts'>Shorts</option>
  </Select>
  <Select placeholder='Size' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='Small'>Small</option>
  <option value='Large'>Large</option>
  <option value='X-large'>X-large</option>
  </Select>
  <Select placeholder='Color' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='Black'>Black</option>
  <option value='White'>White</option>
  <option value='Red'>Red</option>
  </Select>
  <Select placeholder='Design' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='Solid'>Solid</option>
  <option value='Printed'>Printed</option>
  <option value='Checked'>Checked</option>
  </Select>
  <Select placeholder='Fit' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='Oversized'>Oversized</option>
  <option value='Skinny Fit'>Skinny Fit</option>
  <option value='Regular Fit'>Regular Fit</option>
  </Select>
  <Select placeholder='Neck' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='Round Neck'>Round Neck</option>
  <option value='V Neck'>V Neck</option>
  <option value='Hooded'>Hooded</option>
  </Select>
  <Select placeholder='Sleeve' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='Half Sleeve'>Half Sleeve</option>
  <option value='Full Sleeve'>Full Sleeve</option>
  <option value='Sleeveless'>Sleeveless</option>
  </Select>
  {/* <Select placeholder='Discount' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='option1'>20% Discount</option>
  <option value='option2'>50% Discount</option>
  <option value='option3'>70% Discount</option>
  </Select> */}
  <Select onChange={Sortin} placeholder='Sort' size='md' borderBottomColor='grey' borderLeftColor='white' borderRightColor='white' borderTopColor='white'>
  <option value='asc'>Low - High</option>
  <option value='desc'>High - Low</option>

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
                  <h1 id={styles.discount_price}>₹{item.discount_price_box}</h1>
                  <h1 id={styles.actual_price}>₹{item.actualPriceText}</h1>
                </Box>
                <Button onClick={() => addCartData(item)} ml="70px">Add to Cart</Button>
              </Box>
            </div>

          )
        })}
      </div>
    </div>
    </>
  )
}
