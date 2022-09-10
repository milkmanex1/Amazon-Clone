import React, { useEffect } from "react";
import s from "./Product.module.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";
import Jello from "react-reveal/Jello";

const Product = ({ itemCode, title, img, price, rating }) => {
  var stars = [];
  for (var i = 0; i < rating; i++) {
    stars.push(<StarIcon className={s["star-icon"]} key={i}></StarIcon>);
  }

  const { dispatch, state } = useStateValue();
  const basket = state.basket;

  const addToBasket = () => {
    //Add item to basket
    //if item already exists in basket, increase that item quantity's instead of pushing a new item into it.
    const exist = basket.find((x) => x.itemCode === itemCode);
    if (exist) {
      dispatch({
        type: "increase item quantity",
        itemCode: itemCode,
        quantity: 1,
      });
    } else {
      dispatch({
        type: "add to basket",
        item: {
          id: (Math.random() + 1).toString(36).substring(7),
          itemCode: itemCode,
          title: title,
          img: img,
          price: price,
          rating: rating,
          quantity: 1,
        },
      });
      console.log("item has been added");
      //item is dispatched to the UseContext State and localStorage
    }
  };

  return (
    <div className={s["product"]}>
      <div className={s["product-info"]}>
        <p>{title}</p>
        <p className={s["product-price"]}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={s["product-rating"]}>{stars}</div>
        <img src={img} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
