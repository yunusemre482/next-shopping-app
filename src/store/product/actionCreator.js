import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  GET_ALL_PRODUCTS_BY_CATEGORY,
  GET_ALL_PRODUCTS_BY_CATEGORY_SUCCESS,
  GET_ALL_PRODUCTS_BY_CATEGORY_FAILURE,
  ADD_PRODUCT_BEGIN,
  GET_ALL_PRODUCTS_BEGIN,
} from "./actions";
import axios from "axios";
import { API_BASE_URL } from "../../utils";

// get all products from api and dispatch action to store
export const getAllProducts = () => {
  // return new async action with type and payload
  return async function (dispatch) {
    dispatch({ type: GET_ALL_PRODUCTS_BEGIN });
    axios
      .get(`${API_BASE_URL}/products`)
      .then((res) =>
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: GET_ALL_PRODUCTS_FAILURE, payload: err })
      );
  };
};

// get product by id from api and dispatch action to store
export const getProductById = (id) => {
  return async function (dispatch) {
    dispatch({ type: GET_PRODUCT_BY_ID_BEGIN });
    axios
      .get(`${API_BASE_URL}/products/${id}`)
      .then((res) =>
        dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: GET_PRODUCT_BY_ID_FAILURE, payload: err })
      );
  };
};

// add product to api and dispatch action to store
export const addProduct = (product) => {
  return async function (dispatch) {
    dispatch({ type: ADD_PRODUCT_BEGIN });
    axios
      .post(`${API_BASE_URL}/products`, product)
      .then((res) => dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: ADD_PRODUCT_FAILURE, payload: err }));
  };
};

// update product to api and dispatch action to store
export const updateProduct = (product) => {
  return async function (dispatch) {
    dispatch({ type: UPDATE_PRODUCT_BEGIN });
    axios
      .put(`${API_BASE_URL}/products/${product.id}`, product)
      .then((res) =>
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: err }));
  };
};

// delete product from api and dispatch action to store
export const deleteProduct = (id) => {
  return async function (dispatch) {
    dispatch({ type: DELETE_PRODUCT_BEGIN });
    axios
      .delete(`${API_BASE_URL}/products/${id}`)
      .then((res) =>
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: DELETE_PRODUCT_FAILURE, payload: err }));
  };
};
