import axios from 'axios';

import {env} from '../constants';

/* SIGN_UP */
export const sign_up = (data) => {
	const url = `${env.prod_start_point}/api/sign_up`;
	const body = data;
	return axios.post(url, body)
		.then(response => { return response.data; })
		.catch(err => console.log(`Sign up error: ${err.response}`));
};

/* SIGN_IN */
export const sign_in = (data) => {
	const url = `${env.prod_start_point}/api/sign_in`;
	let body = data;
	return axios.post(url, body)
		.then(response => { return response.data; });
};