
const initialState = {
    count: 0,
    data:"undefined",
    error:"",
    loading:false
}
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD1:
            return { ...state, count: state.count ? state.count + 1 : 1 }
            case MINER1:
                return { ...state, count: state.count ? state.count - 1 : -1 }
                case MULTIPLE:
                    return { ...state, count: state.count ? state.count * 2 : 0 }
        
                    case PLUS_CUSTOM:
                        return { ...state, count: state.count ? state.count + parseInt(action.payload) : action.payload }
            
        default:
            return state;
    }
}

export default CounterReducer
const ADD1="ADD_1"
const MINER1="MINER"
const MULTIPLE="MULTIPLE2"
const  PLUS_CUSTOM="PLUS_CUSTOM"

export function add1(){
return {
type:ADD1
}
}
export function miner1(){
    return {
    type:MINER1
    }
    }
    export function multiple2(){
        return {
        type:MULTIPLE
        }
        }


        export function plusCustom(number){
            return {
            type:PLUS_CUSTOM,
            payload:number
            }
            }
           