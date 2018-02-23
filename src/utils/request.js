import axios from 'axios';
// import { ACCESSTOKEN_KEY } from 'containers/App/constants';
import _config from 'config';

const baseURL = _config.apiUrl;
const ACCESSTOKEN_KEY = localStorage.getItem('accessToken');

axios.defaults.baseURL = baseURL;
function buildURLFromTemplate(data, options) {
  if (data instanceof FormData) {
    return {
      data,
      url: options.url,
    };
  }
  const outputData = { ...options.defaultParams, ...data };
  const outputURL = options.url.replace(/\{(.+?)\}/g, (m, label) => {
    const value = outputData[label];
    if (value !== undefined) {
      delete outputData[label];
    } else {
      throw new Error(`Cannot find ${label} in ${options.url}`);
    }
    return value;
  });
  return {
    data: outputData,
    url: outputURL,
  };
}
// async function refreshToken(token) {
//   const options = {
//     method: 'post',
//     url: '/users/token',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   try {
//     const response = await axios.request(options);
//     localStorage.setItem(ACCESSTOKEN_KEY, JSON.stringify(response.data));
//     return response;
//   } catch (e) {
//     throw e;
//   }
// }
export default async (data, options, extraOptions) => {
  const config = {};
  const { data: outputData, url } = buildURLFromTemplate(data, options);
  config.url = url;
  switch (options.method) {
    case 'post':
      config.method = 'post';
      config.data = outputData;
      break;
    case 'get':
      config.method = 'get';
      config.params = outputData;
      break;
    case 'put':
      config.method = 'put';
      config.data = outputData;
      break;
    case 'delete':
      config.method = 'delete';
      config.params = outputData;
      break;
    case 'patch':
      config.method = 'patch';
      config.data = outputData;
      break;
    default:
      throw new Error('Http method not support');
  }
  // return axios.request(config).then((res) => res.data);
  try {
    // set header
    config.headers = {
      ...options.headers,
    };
    if (localStorage.getItem(ACCESSTOKEN_KEY)) {
      try {
        let token = JSON.parse(localStorage.getItem(ACCESSTOKEN_KEY));
        // if (Date.now() - token.createdAt >= token.TTL - 120) {
        //   // call refresh token
        //   await refreshToken(token.refreshToken);
        //   token = JSON.parse(localStorage.getItem(ACCESSTOKEN_KEY));
        // }
        // check if require refresh token
        config.headers.Authorization = `Bearer ${token.id}`;
      } catch (e) {
        delete config.headers.Authorization;
      }
    }
    const result = await axios.request({ ...config, ...extraOptions });
    return result.data;
  } catch (e) {
    if (e.response && e.response.data && e.response.data.error) {
      e.response = e.response.data.error;
    }
    throw e;
  }
};
