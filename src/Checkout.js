import React, { useEffect } from "react";
import s from "./Checkout.module.css";
import StarIcon from "@mui/icons-material/Star";
import ProductsCart from "./ProductsCart";
import { sampleCartData } from "./CartData";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch, getBasketTotal } = useStateValue();
  const basket = state.basket;
  const user = state.user;

  //   const getBasketTotal = (basket) => {
  //     var sum = 0;
  //     for (var i = 0; i < basket.length; i++) {
  //       sum += Number(basket[i].price * basket[i].quantity);
  //     }
  //     return Math.floor(sum * 100) / 100;
  //   };

  //   useEffect(() => {
  //     console.log("The basket contains:");
  //     console.log(basket);
  //   }, [basket]);
  return (
    <div className={s["checkout"]}>
      <div className={s["left-side"]}>
        <img
          className={s["checkout-ad"]}
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
          alt=""
        />

        {basket?.length === 0 ? (
          <div className={s["empty-message"]}>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one, click "Add to
              basket" next to the item.
            </p>
          </div>
        ) : (
          <div className={s["shopping-basket"]}>
            <div className={s["header"]}>
              <h2>Hello, {user?.email}. Your Shopping Cart</h2>
              <p>
                No items selected. <span>Select all items</span>
              </p>
            </div>

            <div className={s["basket-container"]}>
              {basket.map((item) => {
                return (
                  <ProductsCart
                    key={item.id}
                    itemCode={item.itemCode}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    rating={item.rating}
                    quantity={item.quantity}
                  ></ProductsCart>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className={s["right-side"]}>
        <p className={s["subtotal"]}>
          Subtotal ({basket.length} items):{" "}
          <span className={s["price"]}>${getBasketTotal(state.basket)}</span>
        </p>

        <p className={s["gift"]}>
          <input type="checkbox" size="50" />
          This order contains a gift
        </p>
        <button className={s["order-btn"]} onClick={() => navigate("/payment")}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
