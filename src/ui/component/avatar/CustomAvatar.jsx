import React from "react";
import { Avatar, Button, Dropdown, Menu, Space, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons/lib/icons";

const avatarMenu = (
  <Menu>
    <Menu.Item key="logout" danger>
      <LogoutOutlined /> Logout
    </Menu.Item>
  </Menu>
);

const CustomAvatar = () => {
  return (
    <Dropdown
      arrow
      placement="bottomCenter"
      overlay={avatarMenu}
      trigger={["click"]}
    >
      <Button type="text" style={{ height: "100%" }}>
        <Space size="small">
          <Avatar>R</Avatar>
          <Typography.Text strong>Ralph Royeen</Typography.Text>
        </Space>
      </Button>
    </Dropdown>
  );
};

export default CustomAvatar;
