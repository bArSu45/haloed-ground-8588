import React from 'react'
import { useState } from 'react'

const Sorting = () => {
    const [sortBy, setSortyBy]=useState("asc")

    const Sorting=(e)=>{
setSortyBy(e.target.value) 
    }
  return (
    <div>
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
          <select onChange={Sorting}  style={{ width: '250px', fontSize: '30px', marginTop: '100px', marginLeft: '-40px', border: '1px dotted black' }} name="Filter" id="">
            <option value="">Sort</option>
            <option>Low- High</option>
            <option>High-Low</option>
          </select>
        </Box>
      </div>
      
    
  )
}

export default Sorting
