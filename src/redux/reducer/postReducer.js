import axios from "axios"
const initialState = {
    count: 0,
    data: "undefined",
    error: "",
    loading: false
}
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case LODING:
            return { ...state, loading: true, error: "", data: undefined }
        case SUCCESS:
            return { ...state, loading: false, error: "", data: action.data }

        case ERROR:
            return { ...state, loading: false, error: action.message, data: undefined }

        default:
            return state;
    }
}

export default CounterReducer

const SUCCESS = "SUCCESS"
const ERROR = "ERROR"
const LODING = "LODING"
export function getData() {
    return (dispatch) => {
        dispatch({
            type: LODING
        })
        axios.get("http://localhost:3001/posts")
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    data: response.data
                })
            }).catch((err) => {
                dispatch({
                    type: ERROR,
                    message: err.message
                })
            })
    }
}