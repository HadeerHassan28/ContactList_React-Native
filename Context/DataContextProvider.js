import React, { createContext, useReducer, useEffect } from "react";
import useAxios from "axios-hooks";
import Reducer from "./reducer";
import { GET_USERS } from "./reducersTypes";
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const initState = {
    data: [],
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(Reducer, initState);
  const [{ loading, error, data }] = useAxios({
    url: "http://localhost:3000/users",
  });
  // console.warn(data); //?Done
  useEffect(() => {
    dispatch({ type: GET_USERS, payload: data });
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
