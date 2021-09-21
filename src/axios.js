import axios from "axios";
import React, { useState } from "react";
import Catmod from "./Catmod";
import handleOk from "./Model";

// const client = axios.create({
//   baseURL: "http://localhost:3300"
// });

const GetCat = async (props) => {
  console.log(props.name);
  console.log("yes");
  const response = await axios({
    method: "post",
    url: "http://localhost:4000/api/categories",

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

  // fetch("http://localhost:4000/categories")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
};

//   .catch((err) => {
//     console.log("Err", err);
//   });
//   console.log(response);
// };

export default GetCat;

// const raman = axios.create({
//     baseURL: "http://localhost:3300"
// });
// raman.post('/')

// useEffect(() => {

//   axios.get("https://jsonplaceholder.typicode.com/comments")
//   .then((response) =>

// })
