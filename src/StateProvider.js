//setup data layer
//when we push things into it, we can use it in the Checkout page
//We need this to track the basket
//This will be imported in the index.js

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer, { initialState } from "./reducer";

//This is the Data Layer
const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const localData = localStorage.getItem("amazonState")
    ? JSON.parse(localStorage.getItem("amazonState"))
    : initialState;

  const [state, dispatch] = useReducer(reducer, localData);

  useEffect(() => {
    localStorage.setItem("amazonState", JSON.stringify(state));
  }, [state]);
  const getBasketTotal = (basket) => {
    var sum = 0;
    for (var i = 0; i < basket.length; i++) {
      sum += Number(basket[i].price * basket[i].quantity);
    }
    return Math.floor(sum * 100) / 100;
  };

  return (
    <StateContext.Provider value={{ state, dispatch, getBasketTotal }}>
      {children}
    </StateContext.Provider>
  );
};

//This is how we use it inside of a Component
export const useStateValue = () => useContext(StateContext);
