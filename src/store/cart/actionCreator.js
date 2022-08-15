import {
  GET_USER_CART,
  GET_USER_CART_SUCCESS,
  GET_USER_CART_FAILURE,
  GET_CART_BY_DATE,
  GET_CART_BY_DATE_SUCCESS,
  GET_CART_BY_DATE_FAILURE,
  ADD_NEW_CART,
  ADD_NEW_CART_SUCCESS,
  ADD_NEW_CART_FAILURE,
  UPDATE_CART,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
  DELETE_CART,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  GET_ALL_CART,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAILURE,
} from "./actions";
import { API_BASE_URL } from "../../utils";

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_CART:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case GET_USER_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_CART_BY_DATE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CART_BY_DATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case GET_CART_BY_DATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_NEW_CART:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_NEW_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case ADD_NEW_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_CART:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case UPDATE_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case DELETE_CART_FAILURE:
      return {
        ...state,

        isLoading: false,
        error: action.payload,
      };
    case GET_ALL_CART:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case GET_ALL_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
