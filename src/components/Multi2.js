import {multiple2} from "../redux/reducer/CounterReducer"
import {connect} from "react-redux"
const Multi2=(props)=>{
return (
    <button onClick={()=>props.multiple2()}>multiple2</button>
)

}

export default connect(null,{multiple2}) (Multi2)