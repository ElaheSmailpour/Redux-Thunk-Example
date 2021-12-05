import {miner1} from "../redux/reducer/CounterReducer"
import {connect} from "react-redux"
const Miner=(props)=>{
return (
    <button onClick={()=>props.miner1()}>Miner</button>
)

}

export default connect(null,{miner1}) (Miner)