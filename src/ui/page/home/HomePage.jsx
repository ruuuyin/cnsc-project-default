import { PageHeader } from "antd";
import React, { useContext } from "react";
import ContentTab from "../../component/tabs/ContentTab";
import NavigatorContext from "../../../service/context/NavigatorContext";

const HomePage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("home");
  return (
    <>
      <PageHeader
        title="Home"
        subTitle="Announcement and Events"
        onBack={() => {}}
      />
      <ContentTab
        content={[
          {
            title: "Tab1",
            key: "tab2",
            content: <div className="base-container">Content Here</div>,
          },

          {
            title: "Tab2",
            key: "tab3",
            content: <div className="base-container">Content Here</div>,
          },
          {
            title: "Tab1",
            key: "tab4",
            content: <div className="base-container">Content Here</div>,
          },
        ]}
      />
    </>
  );
};

export default HomePage;
