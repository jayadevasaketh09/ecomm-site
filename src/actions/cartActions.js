import Axios from 'axios';
//
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR,

  } from '../constants/cartConstants';

  export const addToCart = (productId, qty) => async(dispatch, getState) => {
    const{data} = await Axios.get(`/api/products/${productId}`)
    dispatch({
      type: CART_ADD_ITEM,
      payload:{
              name: data.name,
              amount: data.amount,
              product: data.id,
              qty, 
      }

    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  }



export const removeFromCart = (productId) => async(dispatch, getState) => {
  dispatch({type: CART_REMOVE_ITEM,
            payload: productId});

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));



}


export const clearthecart = () => async(dispatch,getState) => {
  dispatch({type:CART_CLEAR});
  localStorage.removeItem('cartItems');

}


































































//
// export const addToCart = (productId, qty) => async (dispatch, getState) => {
//   const { data } = await Axios.get(`http://localhost:4000/api/cart/findall`);
//   dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//
//     },
//   });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };
// export const removeFromCart = (productId) => (dispatch, getState) => {
//     dispatch({ type: CART_REMOVE_ITEM, payload: productId });
//     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
//   };
//
