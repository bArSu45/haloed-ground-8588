import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Select, Stack } from '@chakra-ui/react'
import styles from './MensPage.module.css'
import Navbar from '../../Components/Navbar'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMusicRecord } from '../../Redux/AppReducer/action'

export default function MensPage() {
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords)
  const dispatch = useDispatch()
  const location = useLocation();

  const addCartData = (data) => {
    axios.post("https://clickandbuy-json-server.onrender.com/cartdata", data).then((r) => {

      console.log(r.data)
    })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (location || musicRecords.length === 0) {
        const brand_namez = searchParams.getAll('brand_namez');
        const queryParams = {
            params: {
              brand_namez: brand_namez,
                _sort: searchParams.get("sortBy") && "discount_price_box",
                _order: searchParams.get("sortBy")
            }
        }
        dispatch(getMusicRecord("womensdata",queryParams))
    }
}, [location.search])
const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "")
    const [category, setCategory] = useState(searchParams.getAll("brand_namez") || []);

    const HandleFilter = (e) => {
        const option = e.target.value
        let newCategory = [...category];
        if (newCategory.includes(option)) 
        {
            newCategory.splice(newCategory.indexOf(option), 1)
        }
        else 
        {
            newCategory.push(option)
        }
        setCategory(newCategory)
    }

    const HandleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(() => {
        const params = {};
        category && (params.brand_namez = category);
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);
    }, [category, setSearchParams, sortBy])

  return (
    <>   <Navbar />
      <div id={styles.product_sidebar_main_div}>

        <div id={styles.sidebar}>

        <div>
            <h2>Filter</h2>
            <div>
                <input type="checkbox" value='Burberry'
                    onChange={HandleFilter}
                    defaultChecked={category.includes('Burberry')} />
                <label >Burberry</label>
            </div>
            <div>
                <input type="checkbox" value='Click n Buy'
                    defaultChecked={category.includes('Click n Buy')}
                    onChange={HandleFilter} />
                <label >Click n Buy</label>
            </div>
            <div>
                <input type="checkbox" value='Prada'
                    defaultChecked={category.includes('Prada')}
                    onChange={HandleFilter} />
                <label >Prada</label>
            </div>
            <div>
                <input type="checkbox" value='Louis Vuitton'
                    defaultChecked={category.includes('Louis Vuitton')}
                    onChange={HandleFilter} />
                <label >Louis Vuitton</label>
            </div>

            <h2>Sort</h2>
            <div onChange={HandleSortBy}>
                <div>
                    <input type="radio" value="asc" name='sortBy'
                        defaultChecked={sortBy === "asc"} />
                    <label >Asc</label>
                </div>
                <div>
                    <input type="radio" value="desc" name='sortBy'
                        defaultChecked={sortBy === "desc"} />
                    <label>Desc</label>
                </div>
            </div>
            </div>
        </div>
        <div id={styles.mensPage_main_div}>
          {musicRecords.length > 0 && musicRecords.map((item) => {
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
