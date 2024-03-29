import axios from "axios";
import * as actionTypes from "../Constants/BagConstant";

const url = "http://localhost:8000";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const {data}= await axios.get(`${url}/products/${id}`);
    dispatch({type: actionTypes.ADD_TO_CART, payload:{...data, quantity}})
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id})
};