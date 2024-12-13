import { createSlice } from "@reduxjs/toolkit";

// Counter State
export interface CounterState  {
    counter: number,
    showCounter: boolean,
}

export type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'increase'; payload: number | 0}
  | {type: 'toggle'};

 
  const initialCounterState = {counter : 0, showCounter: true};

  const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        increase(state, action){
            state.counter += action.payload;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            console.log("Before toggle:", state.showCounter); // Log before toggle
            state.showCounter = !state.showCounter;
            console.log("After toggle:", state.showCounter); // Log after toggle
        }
    }
  })

  
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;