import { connect } from "react-redux";
import Display1 from "./components/Display1";
import Display2 from "./components/Display2";
import Miner from "./components/Miner";
import Multi2 from "./components/Multi2"
import Pluser from "./components/Pluser"
import PlusInput from "./components/PlusInput";
import {getData} from "./redux/reducer/postReducer"
const  App=(props) =>{
  console.log("props=",props)
  return (
    <div className="App">
      <button onClick={props.getData}>Get Data</button>
      {props.loading && <p>loading</p>}
      {props.error && <p>error happen:{props.error}</p>}
      {props.posts && <ul>{props.posts.map(item=><li>{item.title}</li>)}</ul>} 
   
     <Display1/>
     <Display2/>
    <Pluser/>
    <Miner/>
    <Multi2/>
    <PlusInput/>
    </div>
  );
}
function mapStateToProps(state){
  return {
      posts:state.postState.data,
      loading:state.postState.loading,
      error:state.postState.error
  }
      }
  

export default connect(mapStateToProps,{getData}) (App);
