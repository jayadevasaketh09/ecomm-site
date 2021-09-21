import React, { useState } from "react";
import { Form, Modal, Button, Alert, message, Input} from "antd";
import Catmod from "./Catmod";
// import dropCat from "./DropCat";
import GetCat from "./axios";


const Mod = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();


  const showModal = () => {
    setIsModalVisible(true);

  };

  const [value, setValue] = useState();


  const Cat = (e) => {
    setValue(e.target.value);
    // console.log("", e);
  };



  // const update= (e)=>{
  //   setValue(e);
  // }



  const handleOk = () => {
    setIsModalVisible(false);
    GetCat({name: value });
    setTimeout(() =>{
    message.success("Category Created")
    }, 500);

    console.log("Successfully Added");
    setValue('')
    // form.resetFields();

 
    // setValue=("")
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Category
      </Button>

      <Modal
        title="Create Category"
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
            value={value}
            placeholder="Type in Category"
            onChange={Cat}
            // update={update}
          />
        </Form.Item>
      </Form>
        {/* <Catmod updateCategoryName={Adi} /> */}
        
      </Modal>

     

      {/* <Button onClick={GetCat}>Submit</Button> */}
    </>
  );
};

export default Mod;
