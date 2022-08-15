import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  LOGIN_START,
  LOGIN_END,
  SIGNUP_START,
  SIGNUP_END,
} from "./actions";

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {},
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        isFetching: true,
      };
      break;
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };
      break;
  }
};
