import { Affix, Col, Layout, Row, Space, Typography } from "antd";
import React from "react";
import Logo from "../logo/Logo";
import APP_CONFIG from "../../../data/static/config";

const CustomHeader = () => {
  return (
    <Affix offsetTop={0}>
      <Layout.Header>
        <Row justify="space-between">
          <Space size="large">
            <Logo.Md />
            <Typography.Title level={3}>
              {APP_CONFIG.applicationName.toUpperCase()}
            </Typography.Title>
          </Space>
        </Row>
      </Layout.Header>
    </Affix>
  );
};

export default CustomHeader;
