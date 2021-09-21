import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderInfo } from "../actions/orderAction";
import axios from "axios";

function OrderScreen(props) {
  // const id = props.match.params.id;
  // console.log(id);

  // const [items, setItems] = useState([]);


  // useEffect(() => {
  //   async function getOrders(id) {
  //      const {data} = await axios.get(`http://localhost:4000/api/order/:${id}`);
  //      setItems(data);
  //    }
  //    getOrders(id);
  //  }, [id]);

  // const orderId = async (id) => {
  //   const { data } = await axios.get(`http://localhost:4000/api/order/:${id}`);
  //   console.log(data);
  //   setItems(data);
  // };



  // useEffect(() => {
  //   dispatch(orderId(id));
  // }, [dispatch, id]);

    const itemHistory =() => {

        props.history.push('/orderItems');
    }

  return (
    <>
      <div>
        <h1>
          <strong>Your Order Summary</strong>
          <br></br>You have ordered successfully
        </h1>
        <div>
          {/* {items.map(
            (item) => 
          item.id)} */}


        </div>
      </div>

      <div>
          <button  onClick={itemHistory}>
              Order History
          </button>
      </div>
    </>
  );
}

export default OrderScreen;







// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { orderInfo } from '../actions/orderAction';


// export default function OrderScreen(props) {
//   const id = props.match.params.id;
//   const dispatch = useDispatch([]);

//   const orderDetails = useSelector((state) => state.orderDetails);
//   const {order} = orderDetails;
//   useEffect(() => {
//     dispatch(orderInfo(id));
//   }, [dispatch, id]);
//   return (
  
//     <div>
//       <h1>Order Successful</h1>
//       <div>
        
          
            
           
            
//               {/* <div className="card card-body">
                
//                   {order.map((item) => (
//                       <div>
                       
//                     Order Number: {item.id}
                       
//                       </div>
//                   ))}
                
//               </div> */}
             
          
        
        
//         </div>
//       </div>
   
//   );
// }