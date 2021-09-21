import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, Alert } from "antd";

const Catmod3 = (props) => {
  // const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState();
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");


  // const onFormLayoutChange = ({ change }) => {
  //   setFormLayout(change);
  // };
  //    const alert = () => {
  //        console.log('Successfully Submitted')

  //    } ;
  const onChange = (e) => {
    setValue(e.target.value);
    props.updateProductName(value);
  };


  const amountChange = (e) => {
    setValue1(e.target.value);
    props.updateProductAmount(value1);
  };

  const unitsChange = (e) => {
    setValue2(e.target.value);
    props.updateProductUnits(value2);
  };

  const specChange1 = (e) => {
    setValue3(e.target.value);
    props.updateProductSpec1(value3);
  };


  const specChange2 = (e) => {
    setValue4(e.target.value);
    props.updateProductSpec2(value4);
  };

  const specChange3 = (e) => {
    setValue5(e.target.value);
    props.updateProductSpec3(value5);
  };
  const formItemLayout = {
    labelCol: {
      span: 11,
    },
    wrapperCol: {
      span: 15,
    },
  };
  //   const brandmod =() => {
  //         <Brandmod/>
  //     };
  // const formItemLayout =
  //       {
  //         labelCol: {
  //           span: 5,
  //         },
  //         wrapperCol: {
  //           span: 15,
  //         },
  //       };

  return (
    <>
      <Form
      // {...formItemLayout}
      // layout={formLayout}
      // form={form}
      // initialValues={{
      //   layout: formLayout,
      // }}
      // onValuesChange={onFormLayoutChange}dfd
      >
        <Form.Item label="Product Name">
          <Input
            value={value}
            placeholder="Type in Product Name"
            onChange={onChange}
          />
        </Form.Item>
      </Form>

      <Form>
        <Form.Item label="Amount">
          <Input
            value={value1}
            placeholder="Type in Product Price"
            onChange={amountChange}
          />
        </Form.Item>

        <Form.Item label="No.of Units">
          <Input
            value={value2}
            placeholder="Type in Units"
            onChange={unitsChange}
          />
        </Form.Item>

        {/* <Form.Item label="Spec1">
          <Input
            value={value3}
            placeholder="Type in a Specification"
            onChange={specChange1}
          />
        </Form.Item>

        <Form.Item label="Spec2">
          <Input
            value={value4}
            placeholder="Type in a Specification"
            onChange={specChange2}
          />
        </Form.Item>


        <Form.Item label="Spec3">
          <Input
            value={value5}
            placeholder="Type in a Specification"
            onChange={specChange3}
          />
        </Form.Item> */}

        {/* <Form.Item label="Input">
          <Input placeholder="Type in Product ID" />
        </Form.Item>

        <Form.Item label="Input">
          <Input placeholder="Type in Product" />
        </Form.Item>

        <Form.Item label="Brand">
          <Input placeholder="Select Brand" />
        </Form.Item>

        <Form.Item label="Category">
          <Input placeholder="Select Category" />
        </Form.Item> */}
      </Form>
    </>
  );
};
export default Catmod3;
