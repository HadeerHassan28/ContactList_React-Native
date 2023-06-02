import React, { useReducer } from "react";
import axios from "axios";
import Reducer, { initState } from "../Context/reducer";
import DataContext from "../Context/DataContext";
const FetchDataComponent = () => {
  const [state, dispatc] = useReducer(Reducer, initState);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      console.warn(res.data);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.users });
    });
  };
  if (state.loading) {
    return <Text>Loading....</Text>;
  }

  if (state.error) {
    return <Text>ERROR ❌</Text>;
  }
  return (
    <DataContext.Provider value={state.users}> {children}</DataContext.Provider>
  );
};
export default FetchDataComponent;
