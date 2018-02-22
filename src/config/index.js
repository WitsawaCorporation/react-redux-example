const env = process.env.NODE_ENV || 'defaultConfig';
let baseUrl = 'http://localhost:3000';
const defaultConfig = {
  baseUrl,
  apiUrl: `${baseUrl}/api/`,
};

let config = {};
if (env === 'production') {
  baseUrl = 'https://api.host.com';
  config = {
    baseUrl,
    apiUrl: `${baseUrl}/api/`,
  };
}

export default {
  ...defaultConfig,
  ...config,
};
