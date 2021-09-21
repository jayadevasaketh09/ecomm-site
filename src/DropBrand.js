import { Select } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "axios";

const DropBrand = (props) => {
  //const [posts,setPosts] = useState([])
  const { Option } = Select;
  function handleChange(value) {
    console.log(`Selected ${value}`);
  }

  const [items, setItems] = useState([]);

  useEffect(() => {
   async function getCharacter() {
      const {data} = await axios.get("http://localhost:4000/api/brands/findall");
      setItems(data);
    }
    getCharacter();
  }, []);

  function handleChange(value) {
    console.log(`Selected ${value}`);
    props.getBrandId(value);
  }

  return (
    <Select defaultValue="Brand" style={{ width: 120 }} onChange={handleChange}>
      {items.map((item) => (
        <Option key={item.id} value={item.id}>
          {console.log("value", item)}
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default DropBrand;
