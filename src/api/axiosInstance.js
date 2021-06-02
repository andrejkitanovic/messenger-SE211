import axios from 'axios';

const baseURL = 'https://localhost:8081/api/';

const instance = axios.create({
	baseURL,
	timeout: 1000,
});

export { baseURL };

export default instance;
