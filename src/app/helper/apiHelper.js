// apiHelper.js
import axios from 'axios';
const BASE_URL = 'http://103.74.54.120:3000'; // Replace with your actual API URL

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token;
};

const apiRequest = async (method, url, data = null) => {
  const token = getTokenFromLocalStorage();
  try {
    const headers = {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    };
    const response = await axios({
      method,
      url: `${BASE_URL}${url}`,
      headers,
      data: data ? JSON.stringify(data) : null,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const apiRequestfromdata = async (method, url, data = null) => {
  const token = getTokenFromLocalStorage();
  try {
    const headers = {
      'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    };
    const response = await axios({
      method,
      url: `${BASE_URL}${url}`,
      headers,
      data: data ? JSON.stringify(data) : null,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getApi = async (url) => {
  return await apiRequest('GET', url);
};

const postApi = async (url, data) => {
  return await apiRequest('POST', url, data);
};

const postApiFomedata = async (url, data) => {
  return await apiRequestfromdata('POST', url, data);
};
export { getApi, postApi, postApiFomedata, BASE_URL };
