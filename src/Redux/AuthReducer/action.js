import axios from 'axios'
import * as types from './actionTypes'

export const postLoginRequest = () => {
    return {
        type: types.USER_LOGIN_REQUEST
    }
}

export const postLoginSuccess = (payload) => {
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload
    }
}

export const postLoginFailure = () => {
    return {
        type: types.USER_LOGIN_FAILURE
    }
}

export const login = (payload) => (dispatch) => {
    dispatch(postLoginRequest())

    return axios({
            method: 'post',
            url: '/api/login',
            baseURL: 'https://reqres.in',
            data: payload
        })
        .then((r) => {
            console.log(r.data.token)
            dispatch(postLoginSuccess(r.data.token))
        })
        .catch((e) => {
            dispatch(postLoginFailure())        
        })
}