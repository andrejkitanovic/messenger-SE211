import axios from 'axios';

const baseURL = 'http://localhost:8081/';

const instance = axios.create({
	baseURL: `${baseURL}api/`,
});

 // Set the AUTH token for any request
 instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwToken');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

export { baseURL };

export default instance;
