import React from 'react';
import not_found from '../assets/images/no_data.svg';
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className={'flex items-center justify-center h-screen'}>
			<div className={'flex items-center gap-12 w-1/2 h-96 rounded-3xl shadow-lg p-10 border-2 border-solid border-gray-100'}>
				<div>
					<p className={'text-5xl font-bold '}>
						Упс..
					</p>
					<p className={'text-xl mt-10'}>
						Данной страницы не существует.
					</p>
					<p onClick={()=>{navigate('/');}} className={'bg-primary text-center font-bold mt-10 p-3 text-white rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-300'}>
						Вернуться на главную страницу
					</p>
				</div>
				<div>
					<img src={not_found} alt='not found image' width={300}/>
				</div>
			</div>
		</div>
	);
}