import { useState } from "react";

class StateTemplate {
  constructor(state, setter) {
    this.state = state;
    this.setter = setter;
  }
}

const useTableCommons = (selectedDataTemplate) => {
  const [tableData, setTableData] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [selectedData, setSelectedData] = useState(selectedDataTemplate);
  //const [loadingFromSearch, setLoadingFromSearch] = useState(false);
  //const [selectedIndex, setSelectedIndex] = useState([]); // to identify the selected indeces

  //   const [metadata, setMetadata] = useState({
  //     addedBy: "",
  //     editedBy: "",
  //     dateTimeAdded: null,
  //     dateTimeEdited: null,
  //   });

  return {
    tableData: new StateTemplate(tableData, setTableData),
    totalResult: new StateTemplate(totalResult, setTotalResult),
    selectedData: new StateTemplate(selectedData, setSelectedData),
    // loadingFromSearch: new StateTemplate(
    //   loadingFromSearch,
    //   setLoadingFromSearch
    // ),
    //selectedIndex: new StateTemplate(selectedIndex, setSelectedIndex),
    //metadata: new StateTemplate(metadata, setMetadata),
  };
};

export default useTableCommons;
