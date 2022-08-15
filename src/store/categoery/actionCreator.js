import { API_BASE_URL } from "../../utils";
import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORY_BY_NAME_BEGIN,
  GET_CATEGORY_BY_NAME_SUCCESS,
  GET_CATEGORY_BY_NAME_FAILURE,
} from "./actions";

export const getAllCatgories = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_CATEGORIES_BEGIN,
    });
    try {
      const response = await fetch(`${API_BASE_URL}/products/categories`);
      const data = await response.json();
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORIES_FAILURE,
        payload: error,
      });
    }
  };
};

export const getProductsByCategoryName = (categoryName) => {
  return async (dispatch) => {
    dispatch({
      type: GET_CATEGORY_BY_NAME_BEGIN,
    });
    try {
      const response = await fetch(
        `${API_BASE_URL}/products/category/${categoryName}`
      );
      const data = await response.json();
      dispatch({
        type: GET_CATEGORY_BY_NAME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_BY_NAME_FAILURE,
        payload: error,
      });
    }
  };
};
