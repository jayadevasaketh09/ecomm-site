import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addToCart,
  removeFromCart,
  clearthecart,
} from "../actions/cartActions";
import { CART_CLEAR } from "../constants/cartConstants";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [orderDetails, setOrderDetails] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const orderHandler = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:4000/api/order",
      data: {
        qty: qty,
        productId: productId,
      },
    }).then((response) => {
      setOrderDetails(response);
      // props.sendOrderDetails(orderDetails);
      props.history.push(`/order`);
    });
    dispatch({ type: CART_CLEAR });
    localStorage.removeItem("cartItems");
  };
  return (
    <>
      <div>
        ProductId: {productId} Quantity: {qty}
      </div>
      <div>
        <div>
          <h1> Cart</h1>

          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div>
                  <div>
                    {item.name} <br></br>
                    Product-ID: {item.product}
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(100).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>Rs. {item.amount}</div>
                  <div>
                    <button onClick={() => removeHandler(item.product)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>
            Subtotal ({cartItems.reduce((a, z) => a + z.qty, 0)} items) : $
            {cartItems.reduce((a, z) => a + z.amount * z.qty, 0)}
          </h2>

          <button onClick={orderHandler}>Order Now</button>
        </div>
      </div>
    </>
  );
}

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
//
// import { addToCart, removeFromCart } from "../actions/cartActions";
//
// export default function CartScreen(props) {
//   const productId = props.match.params.id;
//   const qty = props.location.search
//     ? Number(props.location.search.split("=")[1])
//     : 1;
//
//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;
//
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (productId) {
//       dispatch(addToCart(productId, qty));
//     }
//   }, [dispatch, productId, qty]);
//
//   const removeHandler = (productId) => {
//     dispatch(removeFromCart(productId));
//   };
//
//   const checkoutHandler = async () => {
//     const response = await axios({
//       method: "POST",
//       url: "http://localhost:4000/api/order",
//       data: {
//         qty: qty,
//         productId: productId,
//       },
//     }).then((response) => {
//       props.history.push(`/order`);
//     });
//   };
//
//   return (
//     <div>
//       <div>
//         <h1> Cart</h1>
//         <h1>
//           ProductId: {productId} Quantity:{qty}
//         </h1>
//
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.product}>
//               <div>
//                 <div>{item.name}</div>
//                 <div>
//                   <select>
//                     value={item.qty}
//                     onChange=
//                     {(e) =>
//                       dispatch(
//                         addToCart(item.productId, Number(e.target.value))
//                       )
//                     }
//                     {[...Array(100).keys()].map((x) => (
//                       <option key={x + 1} value={x + 1}>
//                         {x + 1}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>Rs. {item.amount}</div>
//               </div>
//               <div>
//                 <button onClick={() => removeHandler(item.product)}>
//                   Remove From Cart
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="col-1">
//         <div className="card">
//           <h1>
//             Subtotal {cartItems.reduce((a, c) => a + c.qty, 0)} Items: Rs.{" "}
//             {cartItems.reduce((a, c) => a + c.qty * c.amount, 0)  }
//
//           </h1>
//             // console.log('value',x)
//           <button onClick={checkoutHandler} disabled={cartItems.length === 0}>
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
//
