import axios from 'axios';

import {env} from '../constants';

const baseUrl = env.prod_start_point;

const axiosInstance = axios.create({ baseURL: baseUrl });

axiosInstance.interceptors.request.use(async (config) => {

	const token = await localStorage.getItem('accessToken');
	if (token) {
		console.log('accessToken: ', token);
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
});



export default axiosInstance;