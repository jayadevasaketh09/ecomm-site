import React, { useState } from "react";
import { Form, Input, Modal, Button, message} from "antd";
import Catmod2 from "./Catmod2";
import DropCat from "./DropCat";
import GetBrand from "./axbrand";
import onChange from "./Catmod2"
// import { values } from "sequelize/types/lib/operators";

const Brandmod = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const [form] = Form.useForm();



  const showModal = () => {
    setIsModalVisible(true);
  };

  const Prod = (e) => {
    setValue(e.target.value)
  };


  const handleOk = () => {
    setIsModalVisible(false);
    GetBrand({name: value});
    setTimeout(() =>{
      message.success("Brand Created")
      }, 500);
      setValue("")
    // console.log("Successfully Added");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Brand
      </Button>

      <Modal
        title="Create Brand"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
        
      >
          <Form
      
      form={form}
     
      
    >
      <Form.Item label="Input">
        <Input
          placeholder="Type in Brand"
          value={value}
          onChange={Prod}
        />
      </Form.Item>

      
    </Form>
        <h1>
          {/* <Catmod2 updateProductName={Prod} /> */}
          {/* <DropCat /> */}
        </h1>
      </Modal>
    </>
  );
};

export default Brandmod;
