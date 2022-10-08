import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {AiFillCalendar, AiFillPlusCircle} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';

import LessonImg from '../../assets/images/lessons.png';


import BackButton from '../../components/BackButton';
import Modal from '../../components/Modal/Modal';

const syllabusses = [
	{
		title: 'Для 10-ых классов',
		modules: '8',
		lessons: '32',
		date: '24.06.2022',
		user: 'Талдыбаев Жанадил',
		availability: 'Доступен для всех'
	},
	{
		title: 'Для 9-ых классов',
		modules: '9',
		lessons: '38',
		date: '07.05.2022',
		user: 'Талдыбаев Жанадил',
		availability: 'Доступен для всех'
	}
];

const Lessons = () => {
	let navigate = useNavigate();

	const [showCreateSyllabus, setShowCreateSyllabus] = useState(false);


	const onCreateSyllabustButtonClicked = () => {
		setShowCreateSyllabus(false);
		navigate('/curriculum/create');
	};

	return (
		<div className='flex h-screen'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10 pr-10'>
				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Учебные планы <span className='text-primary'>2</span></h1>

				<button className='flex w h-12 bg-primary justify-center items-center text-white rounded-2xl mt-10' onClick={() => setShowCreateSyllabus(true)}><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать учебный план</span></button>

				{
					syllabusses.map((item, index) => (
						<div className='flex flex-col w justify-start items-start rounded-2xl mt-10 pl-3' key={item.title + index}>
							<span className='font-bold text-base'>{item.title}</span>
							<span className='text-primary mt-2'>{item.modules} модулей · {item.lessons} уроков</span>
							<div className='flex items-center  mt-2'>
								<AiFillCalendar className='text-gray-medium-light' />
								<span className='text-gray-medium ml-3'>{item.date}</span>
							</div>
							<div className='flex items-center mt-2'>
								<FaUserAlt className='text-gray-medium-light' />
								<span className='text-gray-medium ml-3'>{item.user}</span>
							</div>
							<div className='bg-[#e7f7e8] px-5 py-1 rounded-full mt-2'>
								<span className='text-success text-xs'>{item.availability}</span>
							</div>
						</div>
					))
				}
			</div>
			<div className='flex flex-col basis-2/3 h-screen justify-center items-center'>
				<img src={LessonImg} />
				<p className='text-center mt-10'>Вам необходимо зайти в учебный план,<br />чтобы увидеть уроки</p>
				<button className='flex w-52 h-12 bg-primary justify-center items-center text-white rounded-2xl mt-10' onClick={() => setShowCreateSyllabus(true)}><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать учебный план</span></button>
			</div>
			<Modal show={showCreateSyllabus} onClose={() => setShowCreateSyllabus(false)}>
				<div className='flex flex-col p-12'>
					<h2 className='text-xl text-black font-bold'>Создание учебного плана</h2>


					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Название</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Учебный план' />
					</div>

					<div className='flex justify-between items-center mt-6'>
						<button className='h-12 w-full justify-center items-center bg-gray-extra-light rounded-xl' onClick={() => setShowCreateSyllabus(false)}>
							<span className='text-base text-black font-bold'>Отменить</span>
						</button>

						<button className='h-12 w-full justify-center items-center bg-primary ml-5 rounded-xl' onClick={() => onCreateSyllabustButtonClicked()}>
							<span className='text-base text-white font-bold'>Создать</span>
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Lessons;
