import axios from "axios";
import React, { useEffect } from "react";
import onChange from "./Catmod";

const GetProd = async (props) => {
  console.log("yes");
  console.log(props);
  console.log(props.name);
  console.log(props.amount);
  console.log(props.units);
  const response = await axios({
    method: "post",
    url: "http://localhost:4000/api/products",
    data: {
      name: props.name,
      amount: props.amount,
      units: props.units,
      brandId: props.brandId,
      categoryId: props.categoryId,
      spects: props.spects
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};

export default GetProd;
