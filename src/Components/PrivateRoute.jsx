import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ( {Children}) => {
    var isAuth  = JSON.parse(localStorage.getItem("sts"));
    if(!isAuth){
        return (<Navigate to="/login" />)
    }
  return (
    <div>
      {Children}
    </div>
  )
}

export default PrivateRoute
