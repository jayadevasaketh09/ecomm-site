import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderItems() {
  //   const orderHistory = async (id) => {
  //     console.log("yes");
  //     const response = await axios({
  //       method: "get",
  //       url: `http://localhost:4000/api/order`,

  //       data: {
  //         id: id,
  //       },
  //     }).then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   };
  // useEffect(() => {
  //   console.log("mounted");
  //   orderHistory();
  // }, []);
  const [items, setItems] = useState([]);

  // const orderHistory = async () => {
  //   const { data } = await axios.get("http://localhost:4000/api/order");
  //   console.log(data);
  //   setItems(data);
  // };
    useEffect(() => {
      async function getOrders() {
         const {data} = await axios.get("http://localhost:4000/api/order-items/findall");
         setItems(data);
       }
       getOrders();
     }, []);

  return (
    <>
      <div><strong>Order History</strong></div>
      <div>{console.log(items)}</div>
      <div className="card card-body">
        {items.map(
          item =>
          <div classname="card card-body">
            <div>Order Item Id:{item.id} </div> 
             <div>No.of Items: {item.qty}</div> 
             <div>Amount: {item.amount}</div> 
             <div>Total Amount: {item.totalAmount}</div> 
             <div>Order Time: {item.createdAt}</div> 
            <div>Order Id: {item.orderId}</div>  
              <div>Product Id: {item.productId}</div>
              <br></br>
            </div>



        )}
      </div>
    </>
  );
}

export default OrderItems;
