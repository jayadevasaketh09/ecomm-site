import axios from "axios";
import React, { useEffect } from "react";
import onChange from "./Catmod";

const GetBrand = async (props) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:4000/api/brands",
    data: {
      name: props.name,
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

export default GetBrand;
