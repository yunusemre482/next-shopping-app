import {
  GET_ALL_CATEGORIES_BEGIN,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_CATEGORY_BY_NAME_BEGIN,
  GET_CATEGORY_BY_NAME_SUCCESS,
  GET_CATEGORY_BY_NAME_FAILURE,
} from "./actions";
import { API_BASE_URL } from "../../utils";

const initialState = {
  categories: [],
  categoryProducts: [],
  loading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CATEGORY_BY_NAME_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case GET_CATEGORY_BY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryProducts: action.payload,
      };

    case GET_CATEGORY_BY_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
