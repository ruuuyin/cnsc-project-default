import React from "react";
import { Affix, Layout, Menu } from "antd";
import navigations from "../../../data/static/navigation";

const CustomSider = () => {
  return (
    <Affix offsetTop={64}>
      <Layout.Sider collapsible theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={[navigations[0].uKey]}
          style={{ height: "90vh", borderRight: 0 }}
        >
          {navigations.map((navigation, index) => {
            if (navigation.basePath === null) {
              return (
                <Menu.SubMenu
                  key={navigation.uKey}
                  title={navigation.name}
                  icon={navigation.icon}
                >
                  {navigation.sub.map((child, index) => {
                    return <Menu.Item key={child.uKey}>{child.name}</Menu.Item>;
                  })}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item key={navigation.uKey} icon={navigation.icon}>
                  {navigation.name}
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Layout.Sider>
    </Affix>
  );
};

export default CustomSider;
