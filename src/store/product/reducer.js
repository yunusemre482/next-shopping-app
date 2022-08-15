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
} from "./actions";

const initialState = {
  isLoading: false,
  products: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...state.products, action.payload],
      };
    default:
      console.log(action.payload);
      return state;
  }
}
