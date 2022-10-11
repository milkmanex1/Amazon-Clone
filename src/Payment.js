import React from "react";
import s from "./Payment.module.css";
import ProductPayment from "./ProductPayment";
import { useStateValue } from "./StateProvider";

const Payment = () => {
  const { state, dispatch, getBasketTotal } = useStateValue();
  const basket = state.basket;
  const shipCost = 11.02;
  const taxCost = 0;

  return (
    <div className={s.container}>
      <img
        src="https://cdn.worldvectorlogo.com/logos/amazon-pay-1.svg"
        alt="amazon logo"
        className={s["logo"]}
      />
      <div className={s.title}>Review Your Order</div>
      <div className={s.main}>
        <div className={s.left}>
          <div className={s.address}>
            <h4>Shipping Address</h4>
            <p>{state.user ? state.user.email : "please login!"}</p>
            <p>Sungei Boleh 234 West Street</p>
            <p>Singapore, Singapore 854805 </p>
            <p>Phone: 9999 9999</p>
          </div>
          <div className={s.items}>
            <h4>Review Items and Delivery</h4>

            <div className={s["basket-container"]}>
              {basket.map((item) => {
                return (
                  <ProductPayment
                    key={item.id}
                    itemCode={item.itemCode}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    rating={item.rating}
                    quantity={item.quantity}
                  ></ProductPayment>
                );
              })}
            </div>
          </div>
          <div className={s["payment-method"]}>
            <h4>Payment Method</h4>
            <h3>Card Details</h3>
          </div>
        </div>
        <div className={s.right}>
          <button className={s["place-order"]}>Place your order in SGD</button>
          <div className={s["fine-print"]}>
            <p>
              By placing your order, you agree to Amazon's{" "}
              <span>privacy notice</span>and
              <span> conditions of use</span>.
            </p>
            <p>
              You also agree to AmazonGlobal's <span>terms and conditions</span>
              .
            </p>
          </div>
          <div className={s["order-title"]}>Order Summary</div>
          <div className={s["order-summary"]}>
            <div>
              <p className={s["text"]}>Items:</p>
              <p>SGD {getBasketTotal(state.basket)}</p>
            </div>
            <div>
              <p className={s["text"]}>Shipping and handling:</p>
              <p className={s["border"]}>SDG {shipCost}</p>
            </div>
            <div>
              <p className={s["text"]}>Total before tax:</p>
              <p>SDG {(getBasketTotal(state.basket) + shipCost).toFixed(2)}</p>
            </div>
            <div>
              <p className={s["text"]}>Estimated tax to be collected</p>
              <p>SDG {taxCost}</p>
            </div>
            <div className={s["payment"]}>
              <p className={s["text"]}>Payment Total</p>
              <p>
                SDG{" "}
                {(getBasketTotal(state.basket) + shipCost + taxCost).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
