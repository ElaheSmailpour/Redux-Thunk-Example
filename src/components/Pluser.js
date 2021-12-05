import {add1} from "../redux/reducer/CounterReducer"
import {connect} from "react-redux"
const Pluser=(props)=>{
return (
    <button onClick={()=>props.add1()}>plus</button>
)

}

export default connect(null,{add1}) (Pluser)