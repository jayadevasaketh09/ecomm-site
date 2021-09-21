// import { Menu, Dropdown, Select } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
// import {useState} from 'react';
// import { useEffect } from 'react';
// import axios from "axios";

// const DropCat =() => {

// // const{ Option } = Select;
// //  function handleChange(value) {
// //   console.log(`Selected ${value}`);
// // };

// const [items,setItems] = useState();

// useEffect(() => {
//   async function getCharacters() {
//     const response = await axios.get("http://localhost:4000/categories");
//     const body = await response.json();
//     setItems(body.results.map(({ name }) => ({ label: name, value: name })));
//   }
//   getCharacters();
// }, []);

// return (
// // {/* <>
// //  {/* <Select defaultValue='Category' style={{width:120}}
// //   onChange={handleChange}>
// //    <Option value = "Electronics">Electronics</Option>
// //    <Option value = "Furniture">Furniture</Option>
// //    <Option value = "Apparel">Apparel</Option>

// <select>
//   {items.map(({ label, value }) => (
//     <option key={value} value={value}>
//       {label}
//     </option>
//   ))}
// </select>

// //  </Select> */}
// // </>
// // );
// // }; */}

// )
// }

// export default DropCat;

import { Select } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "../node_modules/axios/index";

const DropCat = (props) => {
  const { Option } = Select;
  const [items, setItems] = useState([]);
  const [catItems, setCatItems] = useState([]);


  useEffect(() => {
    async function getCharacters() {
      const { data } = await axios.get(
        "http://localhost:4000/api/categories/findall"
      );
      // const response = await fetch("api/category");
      // const body = await response.json();
      // setItems(body.results.map(({ title }) => ({ value: title })));
      console.log(data);
      console.log("1234567890");
      setItems(data);
    }
    getCharacters();
  }, []);

  function handleChange(value) {
    console.log(`Selected ${value}`);
    props.getCategoryId(value);
  }

  return (
    <>
      <Select
        defaultValue="Category"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {items.map((item) => (
          <Option key={item.id} value={item.id}>
            {console.log("value", item)}
            {item.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default DropCat;
