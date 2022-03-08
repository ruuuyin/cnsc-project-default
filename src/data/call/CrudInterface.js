import axiosInstance from "../static/axiosInstance";
import APP_CONFIG from "../static/config";

const create = (url) => {
  return async (data) =>
    axiosInstance({
      method: "post",
      url: `${APP_CONFIG.endpointPrefix}${url}`,
      data: data,
    });
};

const update = (url) => {
  return async (data) => {
    return axiosInstance({
      method: "put",
      url: `${APP_CONFIG.endpointPrefix}${url}/${data.id}`,
      data: data,
    });
  };
};

const remove = (url) => {
  return (data) => {
    return axiosInstance({
      method: "delete",
      url: `${APP_CONFIG.endpointPrefix}${url}/${data.id}`,
      data: data,
    });
  };
};

const retrieve = (url) => {
  return async (data) => {
    return axiosInstance({
      method: "get",
      url: `}${url}/${data.id}`,
      data: data,
    });
  };
};

const retrieveList = (url) => {
  return async (params) => {
    return axiosInstance({
      method: "get",
      url: `${APP_CONFIG.endpointPrefix}${url}/list`,
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
