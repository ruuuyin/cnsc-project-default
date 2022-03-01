import { Layout } from "antd";
import React from "react";
import CustomFooter from "../../component/footer/CustomFooter";
import CustomHeader from "../../component/header/CustomHeader";
import CustomSider from "../../component/sider/CustomSider";
import navigations from "../../../data/static/navigation";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <Layout>
      <CustomHeader />
      <Layout>
        <CustomSider />
        <Layout.Content>
          <Outlet />
          <CustomFooter />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

export { navigations };
