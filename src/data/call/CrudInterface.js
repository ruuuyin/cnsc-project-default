import axios from "axios";

const TOKEN_PREFIX = "Bearer";
const getToken = () => localStorage.getItem("jws");

const create = (url) => {
  return async (data) =>
    axios({
      method: "post",
      url: `${url}`,
      headers: {
        Authorization: `${TOKEN_PREFIX} ${getToken()}`,
      },
      data: data,
    });
};

const update = (url) => {
  return async (data) => {
    return axios({
      method: "put",
      url: `${url}`,
      headers: {
        Authorization: `${TOKEN_PREFIX} ${getToken()}`,
      },
      data: data,
    });
  };
};

const remove = (url) => {
  return (data) => {
    return axios({
      method: "delete",
      url: `${url}/${data.id}`,
      headers: {
        Authorization: `${TOKEN_PREFIX} ${getToken()}`,
      },
      data: data,
    });
  };
};

const retrieve = (url) => {
  return async (data) => {
    return axios({
      method: "get",
      url: `${url}/${data.id}`,
      headers: {
        Authorization: `${TOKEN_PREFIX} ${getToken()}`,
      },
      data: data,
    });
  };
};

const retrieveList = (url) => {
  return async (params) => {
    return axios({
      method: "get",
      url: `${url}/list`,
      headers: {
        Authorization: `${TOKEN_PREFIX} ${getToken()}`,
      },
      params: { params },
    });
  };
};

const CrudInterface = {
  createFn: create,
  updateFn: update,
  removeFn: remove,
  retrieveFn: retrieve,
  retrieveListFn: retrieveList,
};

export default CrudInterface;
