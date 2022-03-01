import { Tabs } from "antd";
import React from "react";

const ContentTab = ({ content }) => {
  return (
    <Tabs className="custom-tabs">
      {content.map((item) => {
        return (
          <Tabs.TabPane tab={item.title} key={item.key}>
            {item.content}
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
};

export default ContentTab;
