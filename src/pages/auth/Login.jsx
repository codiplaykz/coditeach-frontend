import React, {useState} from 'react';
import {FaCheck} from 'react-icons/fa';
import {sign_in} from '../../services/auth';
import {useNavigate} from 'react-router-dom';
import {Oval} from 'react-loader-spinner';
import {toast, ToastContainer} from 'react-toastify';

import login_img from '../../assets/images/login_img.png';
import logo from '../../assets/logo.png';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

	let navigate = useNavigate();

	const [toggle, setToggle] = useState(false);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const onLoginClick = () => {

		setIsLoading(true);

		let body = {
			email,
			password
		};

		sign_in(body).then((res) => {
			setIsLoading(false);
			if (res) {
				const user = res.userData;
				const tokens = res.tokens;
				localStorage.setItem('user', JSON.stringify(user));
				localStorage.setItem('accessToken', tokens.accessToken);
				localStorage.setItem('refreshToken', tokens.refreshToken);
				if (user.Role == 'parent') {
					navigate('/parents');
				} else if (user.Role == 'admin') {
					navigate('/admin');
				} else if (user.Role == 'school_admin') {
					navigate('/school');
				} else {
					navigate('/');
				}
			}
		}).catch(err => {
			setIsLoading(false);
			console.log('err: ', err.response?.data?.message);
			toast.error(err.response?.data?.message, {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
		});
	};

	return (
		<div className='flex basis-full h-screen justify-center items-center bg-primary'>
			<div className='flex flex-col p-12 bg-white rounded-2xl'>
				<div><img src={logo} />
					<h1 className='text-4xl font-bold text-primary mt-5'>Вход</h1><br></br></div>
				<h4 className='text-sm font-medium mb-2'>Электронная почта</h4>
				<input type="text" className='border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-80' placeholder='mail@example.com' onChange={event => setEmail(event.target.value)} />
				<div className='clear-both'><h4 className='text-sm font-medium mb-2 mt-5 float-left'>Пароль</h4><h4 className='float-right text-sm mb-2 mt-5 text-[#C2C2C2]'>Забыли пароль?</h4></div>
				<input type="password" className='border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2' placeholder='************' onChange={event => setPassword(event.target.value)} />
				<br />
				<div className='flex flex-row items-center p-0'>
					<button className='w-4 h-4 border-primary border-2 rounded flex items-center justify-center' onClick={() => setToggle(!toggle)}>
						{
							toggle && <FaCheck className='text-primary text-xs' />
						}
					</button>
					<h6 className='font-normal ml-2'>Запомнить меня</h6>
				</div><br />
				<button className='flex h-12 bg-primary justify-center items-center text-white hover:text-white rounded-2xl w-80' to='/' onClick={() => onLoginClick()} disabled={isLoading}>
					{isLoading ?
						<Oval
							ariaLabel="loading-indicator"
							height={20}
							width={20}
							strokeWidth={5}
							color="white"
							secondaryColor="grey"
						/> :
						<span className='font-bold'>Войти</span>
					}
				</button>
			</div>
			<img src={login_img} className='ml-10' />
			<ToastContainer />
		</div>
	);
};

export default Login;