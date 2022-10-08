import axios from 'axios';
import axiosInstance from '../helpers/axiosInstance';

import {env} from '../constants';

/* SIGN_UP */
export const create_school = (data) => {
	const url = '/api/school/create';
	const body = data;
	return axiosInstance.post(url, body)
		.then(response => { return response.data; });
};

/* SIGN_IN */
export const sign_in = (data) => {
	const url = `${env.prod_start_point}/api/sign_in`;
	let body = data;
	return axios.post(url, body)
		.then(response => { return response.data; });
};