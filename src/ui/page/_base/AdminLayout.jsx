import { Button, Layout, PageHeader, Tabs } from "antd";
import React from "react";
import CustomFooter from "../../component/footer/CustomFooter";
import CustomHeader from "../../component/header/CustomHeader";
import CustomSider from "../../component/sider/CustomSider";

const AdminLayout = () => {
  return (
    <Layout>
      <CustomHeader />
      <Layout>
        <CustomSider />
        <Layout.Content>
          <PageHeader
            title="Home"
            subTitle="Announcements and Events"
            extra={[
              <Button>Submit</Button>,
              <Button>Submit</Button>,
              <Button type="primary">Submit</Button>,
            ]}
            footer={
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Details" key="1" />
                <Tabs.TabPane tab="Rule" key="2" />
              </Tabs>
            }
          />
          <CustomFooter />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
