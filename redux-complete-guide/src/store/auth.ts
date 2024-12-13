
import { createSlice } from "@reduxjs/toolkit";


export type AuthenticationState = {
    email: string,
    password: string,
    isAuthenticated: boolean,
}

  const initialAuthState =  {
    email: '',
    password: '',
    isAuthenticated: false,
  }

  const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers : {
        login(state){
            console.log(state);
            state.isAuthenticated = true;
            console.log(state);
        },
        logout(state) {
            console.log(state);
            state.isAuthenticated = false;
            console.log(state);
        }
    }
  })

  
export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;