import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Sorting = () => {
    const [sortBy, setSortyBy]=useState("")
    const [mensData, setMensData] = useState([])
    const [filter, setFilter] = useState('')
    const getMensData = (sortBy,filter) => {
      axios.get(`http://localhost:8080/mensdata?_sort=id&_order=${sortBy}&brand_namez=${filter}`)
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
      getMensData(sortBy,filter)

      // console.log(mensData)
  }, [sortBy,filter]) 
  console.log("ff",mensData)
  return (
    <extendTheme>
    <Box>
          <select value={filter}  onChange={HandleFilter} style={{ width: '250px', fontSize: '30px', marginTop: '50px', marginLeft: '-40px', border: '1px dotted black' }} name="Filter" id="">
            <option value="">Filter</option>
            <option  value="Click n Buy">Click n Buy</option>
            <option value="Prada">Prada</option>
            <option value="Gucci">Gucci</option>
            <option  value="Louis Vuitton">Louis Vuitton</option>
            <option value="Burberry">Burberry</option>
          </select>
        </Box>

        <Box>
          <select value={sortBy} onChange={Sortin}  style={{ width: '250px', fontSize: '30px', marginTop: '100px', marginLeft: '-40px', border: '1px dotted black' }} name="Filter" id="">
            <option value="">Sort</option>
            <option  value="asc" >Low- High</option>
            <option value="desc">High-Low</option>
          </select>
        </Box>
      </extendTheme>
      
    
  )
}

export default Sorting
