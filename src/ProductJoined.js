import React, { useEffect, useState } from "react";
import s from "./ProductJoined.module.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";
import Jello from "react-reveal/Jello";

const ProductsJoined = ({ img }) => {
  return (
    <div className={s["product-joined"]}>
      <img className={s["product-joined-img"]} src={img} alt="image here" />
    </div>
  );
};

export default ProductsJoined;
