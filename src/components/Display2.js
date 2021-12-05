import { connect } from "react-redux"

const Display2=(props)=>{
    return (
        <div>
Value ist :{props.counter}
        </div>
    )
    
    }
    const mapStateToProps=(state)=>{
return {
    counter:state.countState.count
}
    }

    export default connect(mapStateToProps) (Display2)