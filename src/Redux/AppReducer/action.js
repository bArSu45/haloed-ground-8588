import * as types from './actionTypes'
import axios from 'axios'

export const getMusicRecordRequest = () => {
    return {
        type: types.GET_MUSIC_RECORD_REQUEST
    }
}

export const getMusicRecordSuccess = (payload) => {
    return {
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload
    }
}

export const getMusicRecordFailure = () => {
    return {
        type: types.GET_MUSIC_RECORD_FAILURE
    }
}

export const getMusicRecord = (data, queryParams) => (dispatch) => {
    dispatch(getMusicRecordRequest());
    return axios.get(`https://clickandbuy.onrender.com/${data}`, queryParams)
    // return axios.get("http://localhost:8080/mensdata", queryParams)
        .then((res) => {
            dispatch(getMusicRecordSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getMusicRecordFailure())
        })
}