import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ( {children}) => {
    var isAuth  = JSON.parse(localStorage.getItem("sts"));
    if(!isAuth){
        return (<Navigate to="/login" />)
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute
