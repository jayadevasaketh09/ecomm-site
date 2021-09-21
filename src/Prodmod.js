import React, { useState } from "react";
import { Form, Input, Modal, Button, message } from "antd";
import Catmod3 from "./Catmod3";
import DropCat from "./DropCat";
import DropBrand from "./DropBrand";
import GetProd from "./axprod";
// import onChange from "./Catmod3";
import SpecProd from "./Spec";
import { format } from "date-fns";

const Prodmod = () => {

  const [formLayout, setFormLayout] = useState("inline");


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [value, setValue] = useState();
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [value5, setValue5] = useState();
  const [valueS1, setValueS1] = useState();
  const [valueS2, setValueS2] = useState();
  const [valueCid, setValueCid] = useState();
  const [valueBid, setValueBid] = useState();

  const Prod = (e) => {
    setValue(e.target.value);
  };

  const Amount = (e) => {
    setValue1(e.target.value);
  };

  const Units = (e) => {
    setValue2(e.target.value);
  };

  // const Spec1 = (e) => {
  //   setValue3(e.target.value);
  // };

  // const Spec2 = (e) => {
  //   setValue4(e.target.value);
  // };

  // const Spec3 = (e) => {
  //   setValue5(e.target.value);
  // };

  const SpecName = (e) => {
    setValueS1(e.target.value);
  };

  const SpecValue = (e) => {
    setValueS2(e.target.value);
  };

  const CategoryId = (e) => {
    setValueCid(e);
  };

  const BrandId = (e) => {
    setValueBid(e);
  };

  const handleOk = () => {
    console.log(value);
    console.log(value1);
    console.log(value2);

    GetProd({
      name: value,
      amount: value1,
      units: value2,
      brandId: valueBid,
      categoryId: valueCid,
      spects: [{ name: valueS1, value: valueS2 }],
    });
    setIsModalVisible(false);



    setTimeout(() =>{
      message.success("Product Created")
      }, 500);

    
      setValue("")
      setValue1("")
      setValue2("") 
      setValueS1("")
      setValueS2("")
      setValueBid("")
      setValueCid("")
      // setValue7("")


    // Form.resetFields();
    // console.log("Successfully Added");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Product
      </Button>

      <Modal
        title="Create Product"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
      >
        <h1>
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
            onChange={Prod}
          />
        </Form.Item>
      </Form>

      <Form>
        <Form.Item label="Amount">
          <Input
            value={value1}
            placeholder="Type in Product Price"
            onChange={Amount}
          />
        </Form.Item>

        <Form.Item label="No.of Units">
          <Input
            value={value2}
            placeholder="Type in Units"
            onChange={Units}
          />
        </Form.Item>

        <Form.Item label="Spec-1">
          
        </Form.Item>

        <Form.Item label="Name">
          <Input placeholder="input placeholder" onChange={SpecName}/>
        </Form.Item>

        <Form.Item label="Value">
          <Input placeholder="input placeholder" onChange={SpecValue} />
        </Form.Item>
























        </Form>






































            {/* <Catmod3
              updateProductName={Prod}
              updateProductAmount={Amount}
              updateProductUnits={Units}
              updateProductSpec1={Spec1}
              updateProductSpec2={Spec2}
              updateProductSpec3={Spec3}
            /> */}
            <DropCat getCategoryId={CategoryId} />
            <DropBrand getBrandId={BrandId} />
            {/* <SpecProd updateSpecName={SpecName} updateSpecValue={SpecValue} /> */}
          </>
        </h1>
      </Modal>
    </>
  );
};

export default Prodmod;
