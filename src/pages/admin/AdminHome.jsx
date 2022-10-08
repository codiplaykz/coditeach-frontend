import React, {useState} from 'react';

import {IoIosPeople} from 'react-icons/io';
import {FaStar, FaUserGraduate} from 'react-icons/fa';
import {MdKeyboardArrowRight} from 'react-icons/md';

import User from '../../assets/images/user.png';

const schools = [
	{
		name: 'Все города',
		amount: '5163',
		added: '+45'
	},
	{
		name: 'Усть-Каменогорск',
		amount: '392',
		added: '+34'
	},
	{
		name: 'Алматы',
		amount: '533',
		added: '+13'
	},
	{
		name: 'Нур-Султан',
		amount: '444',
		added: '+78'
	},
	{
		name: 'Павлодар',
		amount: '113',
		added: '+5'
	},
	{
		name: 'Костанай',
		amount: '56',
		added: '+3'
	},
	{
		name: 'Петропавловск',
		amount: '143',
		added: '+41'
	}
];

const AdminHome = () => {
	const [selectedClass, setSelectedClass] = useState(null);


	return (
		<div className='flex flex-col h-screen pl-10 pt-5 overflow-y-hidden'>
			<div className='w-full'>
				<h1 className='text-xl font-bold'>Главная</h1>
			</div>
			<div className='flex basis-full mt-8'>
				<div className='flex flex-col basis-2/3 h-screen'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center py-4 px-5 border-2 border-gray-extra-light rounded-xl'>
							<div>
								<h3 className='text-xl font-bold'>421 323</h3>
								<span className='text-gray-medium'>учеников</span>
							</div>
							<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-4'>
								<FaUserGraduate className='text-white' />
							</div>
						</div>
						<div className='flex items-center py-4 px-5 border-2 border-gray-extra-light rounded-xl'>
							<div>
								<h3 className='text-xl font-bold'>5332</h3>
								<span className='text-gray-medium'>учителей</span>
							</div>
							<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-4'>
								<IoIosPeople className='text-white text-xl' />
							</div>
						</div>
						<div className='flex items-center py-4 px-5 border-2 border-gray-extra-light rounded-xl'>
							<div>
								<h3 className='text-xl font-bold'>93%</h3>
								<span className='text-gray-medium'>принятых д/з</span>
							</div>
							<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-4'>
								<FaStar className='text-white text-lg' />
							</div>
						</div>
					</div>

					<div className='flex flex-col w-full max-h-full items-start py-6 px-4 border-2 border-gray-extra-light rounded-xl mt-6 overflow-y-auto'>
						<h4 className='font-bold text-black text-base'>Школы <span className='text-primary'>13234</span> <span className='text-links'>+893</span></h4>
						{
							schools.map((item, index) => (
								<div className='flex w-full justify-between items-center px-4 h-14 border-2 group border-gray-extra-light hover:border-primary rounded-xl cursor-pointer mt-3' key={index}>
									<h4 className='font-bold text-black text-base'>{item.name}</h4>
									<div className='flex w-1/2 justify-between items-center'>
										<span className='text-base'>{item.amount} <span className='text-primary'>{item.added}</span></span>
										<MdKeyboardArrowRight className='text-2xl' />
									</div>
								</div>
							))
						}
					</div>

					<div className='flex items-center justify-between w-full mt-10'>
						<div className="flex items-center justify-center h-16 w-full bg-gray-extra-light rounded-xl">
							<span className='text-base font-bold'>Перейти к тестам</span>
						</div>
						<div className="flex items-center justify-center h-16 w-full bg-gray-extra-light rounded-xl ml-8">
							<span className='text-base font-bold'>Перейти к проектам</span>
						</div>
					</div>


				</div>
				<div className='flex flex-col basis-1/3 mx-8 p-8 bg-main-bg rounded-xl '>

					<h4 className='font-bold text-black text-base'>Ученики <span className='text-primary'>1 новый</span></h4>
					<div className='flex max-w-sm overflow-x-auto scrollb mt-2 pb-3'>
						{
							Array(8).fill('10A').map((item, index) => (
								<button className={`px-4 py-2 ${selectedClass == index ? 'bg-white border-primary' : 'bg-gray-extra-light border-gray-extra-light'} border-2  mr-3 rounded-2xl`} key={index} onClick={() => setSelectedClass(index)}>
									<span className='text-black font-bold'>{item}</span>
								</button>
							))
						}
					</div>
					<div className='overflow-y-auto h-2/6 max-w-sm'>
						{
							Array(130).fill('a').map((index) => (
								<div className="flex w pt-3 pb-3 items-center border-b-1" key={index}>
									<div className="flex justify-center items-center w-12 h-12 border-1 rounded-full border-links">

										<img src={User} className='w-9 h-9' />
									</div>
									<div className='flex flex-col ml-5'>
										<h4 className='text-black font-bold'>Арман Иманбаев</h4>
										<div className='flex'>
											<button className='text-links text-sm font-bold'>
												Принять
											</button>
											<button className='text-gray-medium text-sm font-bold ml-3'>
												Отказать
											</button>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>

		</div>
	);
};

export default AdminHome;