import axios from "axios";


const get = async (url, header = {}) => {
  try {
    const response = await axios.get(url, header);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const post = async (url, data, header = {}) => {
  try {
    const response = await axios.post(url, data, header);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const put = async (url, data, header = {}) => {
  try {
    const response = await axios.put(url, data, header);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const remove = async (url, header = {}) => {
  try {
    const response = await axios.delete(url, header);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const api = {
  get,
  post,
  put,
  remove
};

export default api;