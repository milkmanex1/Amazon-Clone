import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const { dispatch } = useStateValue();

  //create a listener
  useEffect(() => {
    //Whenever auth changes, returns authUser
    auth.onAuthStateChanged((authUser) => {
      //   console.log("The user is:", authUser);

      if (authUser) {
        //if user just logged in / the user was logged in
        dispatch({
          type: "set user",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "set user",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
