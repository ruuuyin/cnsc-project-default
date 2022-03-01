import React from "react";

const NavigatorContext = React.createContext({
  selectedKey: null,
  setSelectedKey: null,
});

export const NavigatorProvider = NavigatorContext.Provider;

export default NavigatorContext;
