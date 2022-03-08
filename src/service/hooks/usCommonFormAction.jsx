import React from "react";

const useCommonFormAction = () => {
  const [addAction, setAddAction] = React.useState({
    onCancel: null,
    onSubmit: null,
  });
  const [editAction, setEditAction] = React.useState({
    onCancel: null,
    onSubmit: null,
  });

  return {
    add: {
      action: addAction,
      set: setAddAction,
    },

    edit: {
      action: editAction,
      set: setEditAction,
    },
  };
};

export default useCommonFormAction;
