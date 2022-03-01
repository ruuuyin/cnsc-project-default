import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.less";
import GlobalRoute from "./ui/route/GlobalRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalRoute />
  </QueryClientProvider>
);

export default App;
