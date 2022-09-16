import React, { useState, useEffect } from "react";
import "./Home.css";
//each data array contains the info for each 'home-row'
import Product from "./Product";
import ProductJoined from "./ProductJoined";
import { data1, data2, data3, data4, data5 } from "./sampleData";
import { useStateValue } from "./StateProvider";
import Fade from "react-reveal/Fade";

import "swiper/css";
// You need this css file for swiper to work
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

const Home = () => {
  const { state, dispatch } = useStateValue();

  //useEffect must be written in the parent function of the 'Products'. Else it will be rendered 9 times per change in 'basket'

  const basket = state.basket;
  useEffect(() => {
    console.log("The basket contains:");
    console.log(basket);
  }, [basket]);
  return (
    <div className={`${state.isInputFocused && "filter"} home`}>
      <div className="home-container">
        <Swiper
          style={{ marginBottom: 0 }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation={true}
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <img
              className="home-img"
              src="https://i.pinimg.com/originals/e4/c6/71/e4c6714c595b98ab93b2e16431b3b6d0.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="home-img crop"
              src="https://m.media-amazon.com/images/I/71yVCTqvWlL._AC_SL1500_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-img crop"
              src="https://static.vecteezy.com/system/resources/previews/003/445/643/non_2x/merry-christmas-sale-banner-free-vector.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home-img crop"
              src="https://m.media-amazon.com/images/I/61PdrBq-ysL._AC_SY355_.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
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

          <div className="row-title">
            for your fitness needs <span>See more</span>
          </div>
          <div className="home-row-joined">
            <Swiper
              style={{ marginBottom: 10 }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              navigation={true}
              slidesPerView={5}
              slidesPerGroup={3}
              scrollbar={true}
            >
              {data4.map((item) => {
                return (
                  <SwiperSlide>
                    <ProductJoined img={item.img}></ProductJoined>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="row-title">
            Frequently purchased Kitchen Supplies <span>See more</span>
          </div>
          <div className="home-row-joined">
            <Swiper
              style={{ marginBottom: 10 }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              navigation={true}
              slidesPerView={5}
              slidesPerGroup={3}
              scrollbar={true}
            >
              {data5.map((item) => {
                return (
                  <SwiperSlide>
                    <ProductJoined img={item.img}></ProductJoined>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
