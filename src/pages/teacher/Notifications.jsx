import React from 'react';
import {Link} from 'react-router-dom';

import {IoEllipsisVertical} from 'react-icons/io5';
import {FaCheck} from 'react-icons/fa';
import {FiClock} from 'react-icons/fi';

import user from './../../assets/images/user.png';
import triangle from './../../assets/images/triangle.png';
import triangle2 from './../../assets/images/triangle2.png';
import download from './../../assets/images/download.png';

import BackButton from '../../components/BackButton';

const notifications = [
	{
		student: 'Талдыбаев Жанадил',
		img: user,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	},
	{
		student: 'Талдыбаев Жанадил',
		img: user,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	},
	{
		student: 'Талдыбаев Жанадил',
		img: user,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	},
	{
		student: 'Талдыбаев Жанадил',
		img: user,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	},
	{
		student: 'Талдыбаев Жанадил',
		img: user,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	}
];

const read = 'flex w-80 hover:border-primary hover:bg-white hover:text-black hover:border-1 justify-start items-center text-black rounded-2xl pl-3 pt-3 pb-3 mt-5';
// const unread = 'flex w-80 hover: border-primary bg-primary-bg hover:text-black hover:border-1 border-l-bg-primary border-l-4 justify-start items-center text-black rounded-2xl pl-3 pt-3 pb-3 mt-5';
// const open = 'flex w-80 border-primary hover:bg-white hover:text-black border-1 justify-start items-center text-black rounded-2xl pl-3 pt-3 pb-3 mt-5';

const accept_default = 'flex bg-primary justify-center items-center text-white hover:text-white rounded-2xl py-3 pl-5 pr-4';
// const accept_false = 'flex bg-primary justify-center items-center text-white hover:text-white rounded-2xl py-3 pl-5 pr-4 opacity-40';

const redo_default = 'flex bg-gray-extra-light justify-center items-center text-black hover:text-black rounded-2xl py-3 pl-5 pr-4 ml-3';
// const redo_clicked = 'flex bg-white border-1 border-primary justify-center items-center text-black hover:text-black rounded-2xl py-3 pl-5 pr-4 ml-3';

const cancel = 'flex bg-gray-extra-light justify-center items-center text-black hover:text-black rounded-2xl py-3 pl-5 pr-4';
const send = 'flex bg-primary justify-center items-center text-white hover:text-white rounded-2xl py-3 pl-5 pr-4 ml-3';

const Notifications = () => {
	return (
		<div className='flex h-screen bg-white overflow-y-hidden'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10 pr-10'>

				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Все уведомления</h1>

				<div className='flex basis-full md:overflow-hidden overflow-auto md:hover:overflow-auto flex-col pr-4'>

					{
						notifications.map((item, index) => (
							<Link key={index} className={read} to={'/'}>
								<div className='flex flex-col basis-1/6'>
									<img src={item.img} className='w-12 h-12 mb-12' />
								</div>
								<div className='flex flex-col basis-5/6'>
									<span className='font-bold text-sm ml-3 flex float-left'>{item.student}<span className='flex float-right text-sm font-medium text-[#C2C2C2] ml-10'>11:25</span></span>
									<p className='text-xs font-medium text-[#C2C2C2] ml-3'>ученик из {item.class}</p>
									<p className='text-sm font-medium text-black ml-3 mt-3'>{item.message}</p>
									<Link to='/login'> <p className='text-sm font-medium text-primary ml-3 mt-1'>{item.topic}</p> </Link>
								</div>
							</Link>
						))
					}
					<Link className='flex h-20 pt-3 pb-3 mt-5 hover:border-primary bg-gray-extra-light justify-center items-center text-black hover:text-black hover: border-2 hover: rounded-2xl w-80' to='/'><span className='font-bold'>Показать еще 5</span></Link><br />
				</div>
			</div>

			<div className='basis-2/3 mt-6 h-screen border-primary border-1 rounded-2xl mr-10 overflow-y-auto pb-20 pt-5'>
				<div className='flex p-5 basis-full bg-[#FCFCFC] rounded-t-2xl h-fit'>
					<div className='flex flex-col'>
						<img src={user} className='w-12 h-12 flex flex-col float-left' />
					</div>
					<div className='flex flex-col'>
						<span className='font-bold text-sm ml-3 flex flex-left'>Талдыбаев Жанадил</span>
						<p className='text-xs font-medium text-[#C2C2C2] ml-3'>ученик из 9А</p>
					</div>
					<div>
						<IoEllipsisVertical className='flex float-right mt-3 ml-80 text-gray-medium-light' />
					</div>
				</div>

				<div className='flex'>
					<div className='mt-6 ml-8'>
						<img src={triangle} />
					</div>
					<div className='bg-gray-extra-light rounded-tr-2xl rounded-b-2xl mt-6 w-2/3 h-fit'>
						<div className='p-4'>
							<div className='flex'>
								<h1 className='flex text-base font-medium'>Сдал домашнее задание по уроку</h1>
								<h1 className='flex ml-1 text-base font-medium text-black'>Циклы. For </h1>
							</div>
							<div className='flex mt-1'>
								<Link to='/' className='flex'>
									<h1 className='text-base font-medium text-primary'>Д/з по робототехнике</h1>
									<img src={download} className='w-3.5 h-4 ml-1 mt-1' />
								</Link>
							</div>
							<div className='mt-1'>
								<h1 className='text-[#C2C2C2] text-sm'>23 марта, в 21:34</h1>
							</div>
						</div>
					</div>
				</div>

				<div className='flex mt-2 ml-8'>
					<Link className={accept_default} to='/'>
						<FaCheck className='text-sm' />
						<span className='font-bold text-sm ml-2'>Принять</span>
					</Link>
					<Link className={redo_default} to='/'>
						<FiClock className='text-base font-bold' />
						<span className='font-bold text-sm ml-2'>Отправить на доработку</span>
					</Link>
				</div>

				<div className='flex ml-44'>
					<div className='bg-black rounded-tl-2xl rounded-b-2xl mt-6 h-fit'>
						<div className='mt-4 mx-6 mb-2 bg-gray-extra-light border-l-8 border-primary rounded-2xl p-4'>
							<div className='flex'>
								<h1 className='flex text-sm font-medium'>Сдал домашнее задание по уроку</h1>
								<h1 className='flex ml-1 text-sm font-medium text-black'>Циклы. For </h1>
							</div>
							<div className='flex mt-1'>
								<h1 className='text-sm font-medium text-black'>Д/з по робототехнике</h1>
							</div>
						</div>
						<div className='flex'>
							<FaCheck className='text-white mt-1 ml-6 bg-[#25CD36] rounded' />
							<h1 className='text-white ml-2'>Принято!</h1>
						</div>
						<div className='mt-1 ml-6 mb-3'>
							<h1 className='text-[#C2C2C2] text-sm'>23 марта, в 21:34</h1>
						</div>
					</div>
					<div className='mt-6'>
						<img src={triangle2} />
					</div>
				</div>

				<div className='flex ml-44 mt-4'>
					<h1 className='text-sm font-medium text-black'>Что именно нужно доработать?</h1>
				</div>

				<div className='flex ml-44'>
					<div className='rounded-2xl mt-1 h-fit border-1 border-primary'>
						<div className='p-6'>
							<h1 className='text-sm text-black'>Необходимо доделать задание на 3</h1>
							<h1 className='text-sm text-black'>задаче. Надо перестроить соединение</h1>
							<h1 className='text-sm text-black'>с самого начала.</h1>
						</div>
						<div className='mt-1 ml-6 mb-3'>
							<h1 className='text-[#C2C2C2] text-sm'>23 марта, в 21:34</h1>
						</div>
					</div>
				</div>


				<div className='flex ml-44 mt-1'>
					<Link className={cancel} to='/'>
						<span className='font-bold text-sm'>Отменить</span>
					</Link>
					<Link className={send} to='/'>
						<span className='font-bold text-sm'>Отправить</span>
					</Link>
				</div>

				<div className='flex ml-44 mt-2'>
					<div className='bg-black rounded-tl-2xl rounded-b-2xl mt-2 h-fit'>
						<div className='mt-4 mx-6 mb-2 bg-gray-extra-light border-l-8 border-primary rounded-2xl p-4'>
							<div className='flex'>
								<h1 className='flex text-sm font-medium'>Сдал домашнее задание по уроку</h1>
								<h1 className='flex ml-1 text-sm font-medium text-black'>Циклы. For </h1>
							</div>
							<div className='flex mt-1'>
								<h1 className='text-sm font-medium text-black'>Д/з по робототехнике</h1>
							</div>
						</div>
						<>
							<h1 className='ml-6 text-sm text-white'>Необходимо доделать задание на 3 задаче. Надо</h1>
							<h1 className='ml-6 text-sm text-white'>перестроить соединение с самого начала.</h1>
						</>
						<div className='flex mt-1'>
							<FiClock className='text-white mt-1 ml-6' />
							<h1 className='text-white ml-2'>Отправлено на доработку</h1>
						</div>
						<div className='mt-1 ml-6 mb-3'>
							<h1 className='text-[#C2C2C2] text-sm'>23 марта, в 21:34</h1>
						</div>
					</div>
					<div className='mt-2'>
						<img src={triangle2} />
					</div>
				</div>

			</div>

		</div>
	);
};

export default Notifications;