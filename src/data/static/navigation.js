import { HomeOutlined, SnippetsOutlined } from "@ant-design/icons/lib/icons";

const navigations = [
  {
    id: 1,
    uKey: "home", //unique readable key
    name: "Home",
    basePath: "/home",
    icon: <HomeOutlined />,
  },

  {
    id: 2,
    uKey: "report", //unique readable key
    name: "Reports",
    basePath: null, // If the primary menu has submenu, then the basePath must be null
    icon: <SnippetsOutlined />,

    //submenu
    sub: [
      {
        id: 3,
        uKey: "report-student", //unique readable key
        name: "Student",
        basePath: "/report/student",
      },
    ],
  },

  //Add more navigations here
];

export default navigations;
