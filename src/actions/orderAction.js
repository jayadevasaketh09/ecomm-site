import Axios from "axios";
import {
  ORDER_INFO_FAIL,
  ORDER_INFO_REQUEST,
  ORDER_INFO_SUCCESS,
} from "../constants/orderConstants";

export const orderInfo = (id) => async (dispatch) => {
  dispatch({ type: ORDER_INFO_REQUEST, payload: id });

  try {
    const { data } = await Axios.get(
      `http://localhost:4000/api/order/:${id}`
    );
    dispatch({ type: ORDER_INFO_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_INFO_FAIL, payload: message });
  }
};
