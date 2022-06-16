import React, { useEffect } from "react";
import s from "./ProductsCart.module.css";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useStateValue } from "./StateProvider";

const ProductsCart = ({
  itemCode,
  id,
  title,
  img,
  price,
  rating,
  quantity,
}) => {
  var stars = [];
  for (var i = 0; i < rating; i++) {
    stars.push(<StarIcon className={s["star-icon"]} key={i}></StarIcon>);
  }
  const { state, dispatch } = useStateValue();

  const removeItem = () => {
    //remove item from basket
    dispatch({
      type: "remove from basket",
      id: id,
    });
  };
  const increment = () => {
    dispatch({
      type: "increase item quantity",
      itemCode: itemCode,
    });
  };
  const decrement = () => {
    if (quantity > 1) {
      dispatch({
        type: "decrease item quantity",
        itemCode: itemCode,
      });
    } else {
      alert("There is only one item left");
    }
  };

  return (
    <div className={s["product"]}>
      <div className={s["product-info"]}>
        <div className={s["left-side"]}>
          <img src={img} alt="" />
        </div>
        <div className={s["right-side"]}>
          <div className={s["info"]}>
            <p className={s["name"]}>{title}</p>
            <div className={s["product-rating"]}>{stars}</div>
            <button onClick={removeItem}>Remove from Basket</button>
          </div>
          <div className={s["qty"]}>
            <div className={s["top"]}>
              <AddIcon
                className={s["quantity-picker"]}
                sx={{ fontSize: "1.7rem" }}
                onClick={increment}
              ></AddIcon>
              <div className={s["quantity"]}>{quantity}</div>
              <RemoveIcon
                className={s["quantity-picker"]}
                sx={{ fontSize: "1.7rem" }}
                onClick={decrement}
              ></RemoveIcon>
            </div>
            <div className={s["bottom"]}>
              <p className={s["product-price"]}>
                <span>
                  $<strong>{price}</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
