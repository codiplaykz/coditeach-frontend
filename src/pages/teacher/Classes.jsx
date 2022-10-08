import React from 'react';
import {Link} from 'react-router-dom';

import {AiFillPlusCircle} from 'react-icons/ai';

import Saly from '../../assets/images/Saly.png';


import BackButton from '../../components/BackButton';

const classes = [
	{
		title: '9В',
		path: '/9b'
	},
	{
		title: '10А',
		path: '/10a'
	},
	{
		title: '11В',
		path: '/11b'
	}
];

const Classes = () => {
	return (
		<div className='flex h-screen'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10 pr-10'>
				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Мои классы <span className='text-primary'>3</span></h1>

				<Link className='flex w h-12 bg-primary justify-center items-center text-white rounded-2xl mt-10' to='/create-class'><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать класс</span></Link>

				{
					classes.map((item, index) => (
						<Link className='flex w h-12 bg-primary-bg hover:bg-white hover:border-2 hover:border-primary justify-start items-center text-black rounded-2xl mt-3 pl-3' to={`/class${item.path}`} key={item.path + index}><span className='font-bold ml-3'>{item.title}</span></Link>
					))
				}
			</div>
			<div className='flex flex-col basis-2/3 h-screen justify-center items-center'>
				<img src={Saly} />
				<p className='text-center mt-10'>Вам необходимо зайти в нужный класс,<br />чтобы провести урок или создайте его прямо сейчас</p>
				<Link className='flex w-52 h-12 bg-primary justify-center items-center text-white rounded-2xl mt-10' to='/create-class'><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать класс</span></Link>
			</div>
		</div>
	);
};

export default Classes;
