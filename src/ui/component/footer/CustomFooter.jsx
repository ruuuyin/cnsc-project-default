import React from "react";
import { Layout, Space, Typography } from "antd";
import APP_CONFIG from "../../../data/static/config";

const CustomFooter = () => {
  return (
    <Layout.Footer>
      <Space direction="vertical">
        <Typography.Text type="secondary">
          {APP_CONFIG.applicationName}
        </Typography.Text>
        <Typography.Text type="secondary">
          Copyright &copy; {new Date().getFullYear()} Produced by{" "}
          {APP_CONFIG.applicationOwner}
        </Typography.Text>
        <Typography.Text type="secondary">{`Version ${APP_CONFIG.version}`}</Typography.Text>
      </Space>
    </Layout.Footer>
  );
};

export default CustomFooter;
