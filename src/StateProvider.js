//setup data layer
//when we push things into it, we can use it in the Checkout page
//We need this to track the basket
//This will be imported in the index.js

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer, { initialState } from "./reducer";

//This is the Data Layer
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("state"));
  const [state, dispatch] = useReducer(reducer, localData);

  useEffect(() => {
    // console.log("UseEffect triggered");
    localStorage.setItem("state", JSON.stringify(state));
    // console.log(state);
  }, [state]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

//This is how we use it inside of a Component
export const useStateValue = () => useContext(StateContext);
