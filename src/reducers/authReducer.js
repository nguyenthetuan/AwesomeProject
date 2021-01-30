import * as Types from '../constants/type';

const intialState = {
    isSuccess: false,
    isLoading: false,
    errorCode: null,
    errorMessage: null,
}

export default function AuthReducer(state = intialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                errorCode: null,
                errorMessage: null,
            }
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                errorCode: null,
                errorMessage: null,
            }
        case Types.LOGIN_FAIL:
            return {
                ...state,
                isSuccess: false,
                isLoading: false,
                errorCode: action.errorCode,
                errorMessage: action.errorMessage,
            }
        case Types.LOGOUT:
            return {
                ...initialState,
            }
            
        default:
            return state
    }
}