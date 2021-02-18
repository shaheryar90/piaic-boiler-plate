import logo from './logo.svg';
import './App.css';
import react from 'react';
import { connect } from "react-redux";

import TodoAction from './store/Actions/todoActions'


// function UpdateTodo(){
//   return{
//     type:"ADD_TODO"
//   }
// }

class App extends react.Component{
  constructor(props){
    super(props)
  }
componentDidMount(){
  console.log("ponka",this.props.getTodo())
}

static getDerivedStateFromProps(props,state){
  console.log("compoentn will recieve props",state)

}

  //connect ke andr 2 parameter jate hai
// connect high ordewr ka kaam kr rha hai
//mapStateToProps kya kre ga redux ki state ko uthae ga props mein wrap kre ga  jis compoent pr lgae hai
// 2 aese life cycle hooks hai jo props ke update pr chlte hai jese compoenentWillRecieveProps iske parameter milte updated props
//

  
  render(){
    console.log("boht muhskil",this.props)
  return (
    <div style={{backgroundColor:'red',justifyContent:'center', alignSelf:"center",alignItems:'center'}}>
     <p style={{color:"white",justifyContent:'center',marginLeft:600, alignSelf:"center",alignItems:'center'}}>hello world</p>
    </div>
  );
}
}
function mapStateToProps(state){
  return {
    Todo: state.Todo.text,
  };
}



function mapDispatchToProps(dispatch) {
  return {
    getTodo:(data)=>dispatch(TodoAction.getTodo(data))
  };
}


//UPDAate Todo ke andr data gya isne hmhe aik payload return kiya jisse hm action khete hai 
//isne ye action kisse return kiya dispatch ko dispatch kya kre ga sb reducer ke paas lekr jae ga 
export default connect(mapStateToProps, mapDispatchToProps)(App);
