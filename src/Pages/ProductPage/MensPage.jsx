import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Select, Stack } from '@chakra-ui/react'
import styles from './MensPage.module.css'
import Navbar from '../../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getMusicRecord } from '../../Redux/AppReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'
// import  { useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { useEffect } from 'react'
export default function MensPage() {
  // const [searchParams] = useSearchParams()
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords)
  const dispatch = useDispatch()
  const location = useLocation();
  // const [mensData, setMensData] = useState([])
  // const [sortBy, setSortyBy] = useState("")
  // const [filter, setFilter] = useState('')
  // const [data, setData] = useState([])
  // const getMensData = (sortBy, filter) => {
  //   axios.get(`https://clickandbuy-json-server.onrender.com/mensdata?_sort=discount_price_box&_order=${sortBy}&brand_namez=${filter}`)
  //     .then((res) => {
  //       setMensData(res.data)

  //     }).catch((e) => {
  //       console.log(e)
  //     })
  // }

  // const getWholeMensData = (sortBy) => {
  //   axios.get(`https://clickandbuy-json-server.onrender.com/mensdata?_sort=discount_price_box&_order=${sortBy}`)
  //     .then((res) => {
  //       setMensData(res.data)

  //     }).catch((e) => {
  //       console.log(e)
  //     })
  // }
  // const handleFilter = (e) => {

  //   setFilter(e.target.value)

  // }
  // const Sortin = (e) => {

  //   setSortyBy(e.target.value)
  //   console.log("ff", sortBy)
  // }
  // useEffect(() => {
  //   // getMensData()
  //   if (filter !== "Brand") {

  //     getMensData(sortBy, filter)
  //   } else {
  //     getWholeMensData(sortBy)
  //   }

  //   // console.log(mensData)
  // }, [sortBy, filter])
  // useEffect(() => {
  //   getWholeMensData(sortBy)

  // }, [sortBy])
  // console.log("ff", musicRecords)
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
        const genre = searchParams.getAll('genre');
        const queryParams = {
            params: {
                genre: genre,
                _sort: searchParams.get("sortBy") && "discount_price_box",
                _order: searchParams.get("sortBy")
            }
        }
        dispatch(getMusicRecord(queryParams))
    }
}, [location.search])
const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "")
    const [category, setCategory] = useState(searchParams.getAll("genre") || []);

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
        category && (params.genre = category);
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
                <input type="checkbox" value='K-Pop'
                    onChange={HandleFilter}
                    defaultChecked={category.includes('K-Pop')} />
                <label >K-Pop</label>
            </div>
            <div>
                <input type="checkbox" value='Country'
                    defaultChecked={category.includes('Country')}
                    onChange={HandleFilter} />
                <label >Country</label>
            </div>
            <div>
                <input type="checkbox" value='Pop'
                    defaultChecked={category.includes('Pop')}
                    onChange={HandleFilter} />
                <label >Pop</label>
            </div>
            <div>
                <input type="checkbox" value='Heavy Metal'
                    defaultChecked={category.includes('Heavy Metal')}
                    onChange={HandleFilter} />
                <label >Heavy Metal</label>
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
