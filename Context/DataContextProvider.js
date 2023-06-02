import React, { createContext } from "react";
import useAxios from "axios-hooks";
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [{ loading, error, data }] = useAxios({
    url: "http://localhost:3000/users",
  });
  // console.warn(data); //?Done
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
export default DataContextProvider;
