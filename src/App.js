import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.less";
import { Button } from "antd";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <h1>Hello world</h1>
    <Button type="primary">Sample</Button>
  </QueryClientProvider>
);

export default App;
