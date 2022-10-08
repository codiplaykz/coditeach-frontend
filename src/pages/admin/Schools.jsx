import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import {AiFillPlusCircle} from 'react-icons/ai';
import {HiPencil} from 'react-icons/hi';
import {FaInfoCircle, FaTrash, FaUserPlus} from 'react-icons/fa';
import {MdOutlineArrowForwardIos} from 'react-icons/md';

import Modal from '../../components/Modal/Modal';


import {create_school} from '../../services/school';


import BackButton from '../../components/BackButton';

const schools = [
	{
		title: 'КТЛ г. Кокшетау',
		accounts: ['ktlkokshetau@gmail.com', 'ktlkoksh@gmail.com']
	},
	{
		title: 'НИШ г. Костанай',
		accounts: ['niskostanay@gmail.com']
	},
	{
		title: 'Школа №54 г. Нур-Султан',
		accounts: ['nursultan54school@gmail.com']
	}
];

const Schools = () => {

	const [modal, setModal] = useState('');
	const [schoolName, setSchoolName] = useState(null);
	const [schoolLocation, setSchoolLocation] = useState(null);
	const [schoolMail, setSchoolMail] = useState(null);

	const onAddSchoolButtonClick = () => {
		const body = {
			location: schoolLocation,
			name: schoolName,
			mail: schoolMail
		};
		create_school(body).then(res => {
			console.log('school create: ', res);
		});

		setModal('');
	};

	return (
		<div className='flex h-screen'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10 pr-10'>
				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Школы  <span className='text-primary'>3</span></h1>

				<button className='flex w h-12 bg-primary justify-center items-center text-white rounded-2xl mt-10' onClick={() => setModal('addSchool')}><AiFillPlusCircle />  <span className='font-bold ml-3'>Добавить школу</span></button>

				{
					schools.map((item, index) => (
						<button className='flex w h-12 bg-primary-bg hover:bg-white hover:border-2 hover:border-primary justify-start items-center text-black rounded-2xl mt-3 pl-3' key={item.title + index}><span className='font-bold ml-3'>{item.title}</span></button>
					))
				}
			</div>
			<div className='flex flex-col basis-2/3 h-screen p-12'>
				<div className='flex justify-between items-start p-12 bg-gray-extra-light-bg rounded-3xl'>
					<div className='flex flex-col items-start justify-start'>
						<span className='text-xs text-gray-medium-light font-medium'>Казахстан, Акмолинская область, г. Кокшетау</span>
						<h2 className='text-2xl font-bold mt-3'>КТЛ г. Кокшетау</h2>
						<div className='flex mt-3 px-6 py-2 bg-[#e7f7e8] rounded-full justify-center'><span className='text-xs text-success'>Подписка оформлена до 01.06.2023</span></div>
					</div>
					<div className='flex'>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center' onClick={() => setModal('editSchool')}>
							<HiPencil className='text-xl' />
						</button>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center ml-3' onClick={() => setModal('removeSchool')}>
							<FaTrash className='text-error text-base' />
						</button>
					</div>
				</div>
				<div className='flex flex-col p-12 mt-8 bg-gray-extra-light-bg rounded-3xl'>
					<h3 className='text-base font-bold mb-2'>Корпоративные аккаунты</h3>
					{
						schools[0].accounts.map((item, index) => (
							<a className='text-primary' key={index}>{item}</a>
						))
					}
					<button className='flex items-center mt-3'>
						<FaUserPlus />
						<span className='font-bold text-sm ml-3'>Добавить аккаунт</span>
					</button>
				</div>
				<div className='flex flex-col p-12 mt-8 bg-gray-extra-light-bg rounded-3xl'>
					<h3 className='text-base font-bold mb-2'>Классы</h3>
					<button className='flex items-center mt-3'>
						<span className='text-base text-primary mr-3 underline'>Перейти к классам школы</span>
						<MdOutlineArrowForwardIos className='text-primary' />
					</button>
				</div>
			</div>
			<Modal show={modal === 'addSchool'} onClose={() => setModal('')}>
				<div className='flex flex-col p-12'>
					<h2 className='text-xl text-black font-bold'>Добавление школы</h2>
					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Название</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Школа' onChange={event => setSchoolName(event.target.value)} />
					</div>
					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Город или село</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Город или село' onChange={event => setSchoolLocation(event.target.value)} />
					</div>
					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Корпоративный аккаунт</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='example@gmail.com' onChange={event => setSchoolMail(event.target.value)} />
					</div>

					<div className='flex justify-between items-center mt-6'>
						<button className='h-12 w-full justify-center items-center bg-gray-extra-light rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-black font-bold'>Отменить</span>
						</button>

						<button className='h-12 w-full justify-center items-center bg-primary ml-5 rounded-xl' onClick={() => onAddSchoolButtonClick()}>
							<span className='text-base text-white font-bold'>Добавить</span>
						</button>
					</div>
				</div>

			</Modal>

			<Modal show={modal === 'editSchool'} onClose={() => setModal('')}>
				<div className='flex flex-col p-12'>
					<h2 className='text-xl text-black font-bold'>Редактирование школы</h2>
					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Название</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Школа' onChange={event => setSchoolName(event.target.value)} />
					</div>
					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Город или село</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Город или село' onChange={event => setSchoolLocation(event.target.value)} />
					</div>
					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Корпоративный аккаунт</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='example@gmail.com' onChange={event => setSchoolMail(event.target.value)} />
					</div>

					<div className='flex justify-between items-center mt-6'>
						<button className='h-12 w-full justify-center items-center bg-gray-extra-light rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-black font-bold'>Отменить</span>
						</button>

						<button className='h-12 w-full justify-center items-center bg-primary ml-5 rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-white font-bold'>Внести изменения</span>
						</button>
					</div>
				</div>

			</Modal>

			<Modal show={modal === 'removeSchool'} onClose={() => setModal('')}>
				<div className='flex flex-col p-12 justify-start items-start'>
					<h2 className='text-xl text-black font-bold'>Вы действительно хотите удалить школу: <span className='text-primary'>КТЛ г. Кокшетау</span>?</h2>
					<div className='flex py-1 px-3 bg-warning items-center rounded-full mt-3'>
						<FaInfoCircle />
						<p className='ml-2'>Восстановить будет невозможно</p>
					</div>
					<div className='flex w-full justify-between items-center mt-6'>
						<button className='h-12 w-full justify-center items-center bg-gray-extra-light rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-black font-bold'>Нет, отменить</span>
						</button>

						<button className='h-12 w-full justify-center items-center bg-error ml-5 rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-white font-bold'>Да, удалить</span>
						</button>
					</div>
				</div>

			</Modal>
		</div>

	);
};

export default Schools;
