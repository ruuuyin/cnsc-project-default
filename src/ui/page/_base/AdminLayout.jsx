import { Layout } from "antd";
import React from "react";
import CustomFooter from "../../component/footer/CustomFooter";
import CustomHeader from "../../component/header/CustomHeader";
import CustomSider from "../../component/sider/CustomSider";
import navigations from "../../../data/static/navigation";

const AdminLayout = (props) => {
  return (
    <Layout>
      <CustomHeader />
      <Layout>
        <CustomSider />
        <Layout.Content>
          {props.children}
          <CustomFooter />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

export { navigations };
