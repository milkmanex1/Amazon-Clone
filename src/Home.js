import React, { useState, useEffect } from "react";
import "./Home.css";
//each data array contains the info for each 'home-row'
import Product from "./Product";
import { data1, data2, data3 } from "./sampleData";
import { useStateValue } from "./StateProvider";
import Fade from "react-reveal/Fade";

const Home = () => {
  const { state, dispatch } = useStateValue();

  //useEffect must be written in the parent function of the 'Products'. Else it will be rendered 9 times per change in 'basket'

  const basket = state.basket;
  useEffect(() => {
    console.log("The basket contains:");
    console.log(basket);
  }, [basket]);
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-img"
          src="https://i.pinimg.com/originals/e4/c6/71/e4c6714c595b98ab93b2e16431b3b6d0.jpg"
          alt=""
        />
        <Fade bottom>
          <div className="home-row">
            {data1.map((item) => {
              return (
                <Product
                  key={item.id}
                  itemCode={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                ></Product>
              );
            })}
          </div>

          <div className="home-row">
            {data2.map((item) => {
              return (
                <Product
                  itemCode={item.id}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                ></Product>
              );
            })}
          </div>
          <div className="home-row">
            {data3.map((item) => {
              return (
                <Product
                  itemCode={item.id}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                ></Product>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
