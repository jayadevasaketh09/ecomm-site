import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, Alert } from "antd";

const Catmod2 = (props) => {
  const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState();
  const [value, setValue] = useState("");

  // const onFormLayoutChange = ({ change }) => {
  //   setFormLayout(change);
  // };
  //    const alert = () => {
  //        console.log('Successfully Submitted')

  //    } ;
  const onChange = (e) => {
    setValue(e.currentTarget.value);
    props.updateProductName(value);
  };

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 15,
    },
  };
  //   const brandmod =() => {
  //         <Brandmod/>
  //     };

  return (
    <>
      <Form
      
        form={form}
       
        
      >
        <Form.Item label="Input">
          <Input
            placeholder="Type in Brand"
            value={value}
            onChange={onChange}
          />
        </Form.Item>

        
      </Form>
    </>
  );
};
export default Catmod2;
