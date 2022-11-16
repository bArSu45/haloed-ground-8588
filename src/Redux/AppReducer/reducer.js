import * as types from './actionTypes'

const initialState = {
    musicRecords: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_MUSIC_RECORD_REQUEST:
            {
                return {
                    ...state,
                    isLoading: true
                }
            }

        case types.GET_MUSIC_RECORD_SUCCESS:
            {
                return {
                    ...state,
                    isLoading: false,
                    musicRecords: payload
                }
            }

        case types.GET_MUSIC_RECORD_FAILURE:
            {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                    musicRecords: []
                }
            }
        default:
            return state
    }
}