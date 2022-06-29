import {createContext, useEffect, useReducer} from "react";
import Reducer from "./Reducer";
//Initial state of a user before login.
const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false,
};
 export const Context=createContext(INITIAL_STATE); 

//To provide user to each component, context provider is needed to wrap all components inside this provider to reach the initial state of the user.

export const ContextProvider=({children})=>{
 //children-->all child components
 const[state,dispatch]=useReducer(Reducer,INITIAL_STATE);

 useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.user));
 },[state.user]);
 

 return (
    <Context.Provider
    value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch,
    }}>
    {children}
    </Context.Provider>
 );
};
 
   
  