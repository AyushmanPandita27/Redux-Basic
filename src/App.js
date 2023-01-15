import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Increment, Decrement } from './action/counter';
import { useSelector, useDispatch } from 'react-redux';
// //action//
// const increment= ()=>{
//   return {
//     type: "INCREMENT"
//   }
// }
// //reducers//
// const counter = (state=0, action) =>{
//   switch(action.type){
//     case "INCREMENT":
//       return state +1;
//       default :
//       return state;
//   }
// }
// //store//
// const Store = createStore(counter);
// Store.subscribe(()=>console.log(Store.getState()))
// //dispatch//
// Store.dispatch(increment());

function App() {
  const counter = useSelector(state => state.cntr);
const dispatch = useDispatch();
const newInc= 5;

  return (
    <div className="App">
   <h1> resdux baazi</h1>
   <h1> counter: {counter}</h1>
   <button onClick={()=>dispatch(Increment(newInc))}>
    inc
   </button>
   <button onClick={()=>dispatch(Decrement())}>
    dec
   </button>
    </div>
  );
}

export default App;
