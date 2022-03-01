import { PageHeader } from "antd";
import React from "react";
import ContentTab from "../../component/tabs/ContentTab";
import AdminLayout from "../_base/AdminLayout";

const HomePage = () => {
  return (
    <AdminLayout>
      <>
        <PageHeader title="Home" />
        <ContentTab
          content={[
            {
              title: "Tab1",
              key: "tab2",
              content: <div className="base-container">"content3"</div>,
            },

            {
              title: "Tab2",
              key: "tab3",
              content: <div className="base-container">"content3"</div>,
            },
            {
              title: "Tab1",
              key: "tab4",
              content: <div className="base-container">"content3"</div>,
            },
          ]}
        />
      </>
    </AdminLayout>
  );
};

export default HomePage;
