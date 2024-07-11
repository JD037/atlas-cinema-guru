import axios from 'axios';

// Create an instance of Axios with default settings
const api = axios.create({
	baseURL: 'http://localhost:8000', // Replace with your API base URL
	headers: {
		'Content-Type': 'application/json',
	},
});

// Add a request interceptor to include the Authorization header
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default api;
