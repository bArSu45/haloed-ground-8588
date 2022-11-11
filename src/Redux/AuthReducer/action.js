// import React from 'react'
import axios from "axios";
import * as types from './actionTypes';
// console.log(types)
const postLoginRequest = () => {
    return { type: types.LOGIN_REQUEST, }

}
const postLoginSuccess = () => {
    return { type: types.LOGIN_SUCCESS, }

}
const postLoginFailure = () => {
    return { type: types.LOGIN_FAILURE, }

}
const login = (payload) => (dispatch) => {
    dispatch(postLoginRequest());
    return axios({
            method: "post",
            url: "/api/login",
            baseURL: "https://reqres.in",
            data: payload,
        })
        .then((r) =>
            // console.log(r.data)
            dispatch(postLoginSuccess(r.data.tokon))
        )
        .catch((e) => {
            dispatch(postLoginFailure());
        })

}
const postData = (payload) => (dispatch) => {
    // dispatch(postRequest());
    return axios.post('http://localhost:8080/products', {
            name: payload.name,
            catagary: payload.catagary,
            image: payload.img,
            price: payload.price
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}
export { login, postLoginRequest, postLoginSuccess, postLoginFailure, postData };