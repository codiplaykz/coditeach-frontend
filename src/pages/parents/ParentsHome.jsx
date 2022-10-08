import React, {useState} from 'react';

import {IoIosPeople} from 'react-icons/io';
import {FaStar} from 'react-icons/fa';
import {TbChecklist} from 'react-icons/tb';
import {BsFillCalendarCheckFill} from 'react-icons/bs';

const children = ['Арман', 'Талгат', 'Жасмин'];
const tabs = ['Домашние задания', 'Проекты', 'Посещение', 'Тесты'];


const ParentsHome = () => {

	const [selectedChild, setSelectedChild] = useState(null);
	const [activeTab, setActiveTab] = useState('Посещение');

	return (
		<div className='flex bg-white h-screen overflow-y-hidden'>
			<div className='flex flex-col basis-2/5 h-screen pt-5 pl-10 pr-10 justify-start items-start'>


				<h1 className='text-xl font-bold mt-10 mb-5'>Ваши дети <span className='text-primary'>3</span></h1>

				{
					children.map((item, index) => {
						return (
							<>
								<div className={`flex flex-col items-start justify-start w-full px-4 py-2 my-2 border-2 ${selectedChild == item ? 'border-primary' : 'border-white'} rounded-xl cursor-pointer`} key={item + index} onClick={() => setSelectedChild(item)}>
									<span className='text-base font-bold'>{item}</span>
									<div className='flex w-full justify-start items-center mt-2'>
										<div className='flex items-center justify-center text-primary'>
											<TbChecklist />
											<span className='ml-2'>83% сданных д/з</span>
										</div>

										<div className='flex items-center justify-center text-primary ml-6'>
											<BsFillCalendarCheckFill />
											<span className='ml-2'>83% сданных д/з</span>
										</div>
									</div>
								</div>
								<hr className='w-full' />
							</>
						);
					})
				}

			</div>
			<div className='flex flex-col basis-3/5 h-screen pt-12 pr-12 overflow-y-auto'>
				<div className='flex flex-col justify-start items-start p-12 bg-gray-extra-light-bg rounded-3xl'>
					<div className='flex flex-col items-start justify-start'>
						<span className='text-xs text-gray-medium-light font-medium'>Учится в 10А</span>
						<h2 className='text-2xl font-bold'>{selectedChild}</h2>
					</div>

					<div className='flex w-full items-center justify-between mt-6'>
						<div className=''>
							<h3 className='text-xl font-bold'>3 четверть</h3>
							<span className='text-gray-medium'>1 апреля - 17 мая</span>
						</div>
						<div className='flex items-center py-4 px-6 border-2 border-gray-extra-light bg-white rounded-xl'>
							<div>
								<h3 className='text-2xl font-bold'>97%</h3>
								<span className='text-gray-medium'>посещение</span>
							</div>
							<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-4'>
								<IoIosPeople className='text-white text-xl' />
							</div>
						</div>
						<div className='flex items-center py-4 px-6 border-2 border-gray-extra-light bg-white rounded-xl'>
							<div>
								<h3 className='text-2xl font-bold'>83%</h3>
								<span className='text-gray-medium'>сдал д/з</span>
							</div>
							<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-4'>
								<FaStar className='text-white text-lg' />
							</div>
						</div>
					</div>

					<div className='flex flex-col w-full border-2 border-gray-extra-light rounded-xl px-6 py-4 bg-white mt-4'>
						<h4 className='text-base font-bold mb-2'>{activeTab} <span className='text-primary'>2</span></h4>
						<div className='flex w-full justify-between items-center'>
							{
								tabs.map((item, index) => {
									return (
										<div className={`px-4 py-2 font-bold rounded-2xl border-2 ${activeTab == item ? 'border-primary text-primary bg-white' : 'border-gray-extra-light bg-gray-extra-light'} cursor-pointer`} key={item + index} onClick={() => setActiveTab(item)}>{item}</div>
									);
								})
							}

						</div>

						{activeTab == 'Посещение' &&
							Array(25).fill('').map((item, index) => {
								return (
									<div className='mt-4' key={item + index}>
										<hr className='w-full' />
										<div className='px-4 w-full my-3'>
											<div className='flex justify-between items-center w-full'>
												<p>Посещение по уроку</p>
												<span className='text-gray-medium text-xs'>23 марта</span>
											</div>
											<div className='flex justify-between items-center w-full'>
												<p className='font-medium'>1.2 Вводный урок</p>
												<span className='text-links'>Присутствие</span>
											</div>
										</div>
									</div>
								);
							})
						}

						{activeTab == 'Домашние задания' &&
							Array(25).fill('').map((item, index) => {
								return (
									<div className='mt-4' key={item + index}>
										<hr className='w-full' />
										<div className='px-4 w-full my-3'>
											<div className='flex justify-between items-center w-full'>
												<p>Сдал домашнее задание по уроку</p>
												<span className='text-gray-medium text-xs'>23 марта, в 21:34</span>
											</div>
											<div className='flex justify-between items-center w-full'>
												<p className='font-medium'>1.3 Циклы</p>
												<span className='text-success'>Принято</span>
											</div>
										</div>
									</div>
								);
							})
						}

						{activeTab == 'Проекты' &&
							Array(25).fill('').map((item, index) => {
								return (
									<div className='mt-4' key={item + index}>
										<hr className='w-full' />
										<div className='px-4 w-full my-3'>
											<div className='flex justify-between items-center w-full'>
												<p>Создал свой проект</p>
												<span className='text-gray-medium text-xs'>23 марта в 12:33</span>
											</div>
											<div className='flex justify-between items-center w-full'>
												<p className='font-medium'>Личный проект</p>
												<span className='text-primary'>Открыть</span>
											</div>
										</div>
									</div>
								);
							})
						}

						{activeTab == 'Тесты' &&
							Array(25).fill('').map((item, index) => {
								return (
									<div className='mt-4' key={item + index}>
										<hr className='w-full' />
										<div className='px-4 w-full my-3'>
											<div className='flex justify-between items-center w-full'>
												<p>Получил результаты по тесту</p>
												<span className='text-gray-medium text-xs'>23 марта, в 21:34</span>
											</div>
											<div className='flex justify-between items-center w-full'>
												<p className='font-medium'>По теме для 7ых классов</p>
												<span className='text-links'>90 баллов</span>
											</div>
										</div>
									</div>
								);
							})
						}
					</div>


				</div>

			</div>

		</div>
	);
};

export default ParentsHome;