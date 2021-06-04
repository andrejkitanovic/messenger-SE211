import axios from 'axios';

const baseURL = 'http://localhost:8081/api/';

const instance = axios.create({
	baseURL,
	timeout: 1000,
});

export { baseURL };

export default instance;
