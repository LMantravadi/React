
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import authenticatorReducer from "./auth"


//   const store = createStore(counterSlice.reducer);

const store = configureStore({
    reducer: {
      counter: counterReducer,
      auth: authenticatorReducer,
    },
  });

  export default store;

  
// import {createStore} from 'redux'
// const counterReducer = (state : State = initialState, action : Action) => {
//     if(action.type === 'increment')
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
    
//      if(action.type === 'decrement')
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     if(action.type === 'increase')
//     {
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'toggle')
//         {
//             return {
//                 counter: state.counter ,
//                 showCounter: !state.showCounter,
//             }
//         }

//         return state;
// }
// const store = createStore(counterReducer);

// export default store;