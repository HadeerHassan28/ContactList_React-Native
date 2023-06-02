import React from "react";
import { GET_USERS, FETCH_ERROR } from "./reducersTypes";
export const initState = [
  {
    users: [],
    loading: true,
    error: null,
  },
];
const Reducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    // case FETCH_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
};
export default Reducer;
