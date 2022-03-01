import { Layout } from "antd";
import React from "react";
import CustomFooter from "../../component/footer/CustomFooter";

const PlainLayout = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Content>{props.children}</Layout.Content>
      <CustomFooter />
    </Layout>
  );
};

export default PlainLayout;
