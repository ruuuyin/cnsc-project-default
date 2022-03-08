import React from "react";

const SelectedDataContext = React.createContext({
  data: null,
  setData: null,
});

export const SelectedDataProvider = SelectedDataContext.Provider;

export default SelectedDataContext;
