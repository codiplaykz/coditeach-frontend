import React from 'react';
import {Collapse, Input, Tabs} from 'antd';


import {IoMdBookmark, IoMdMore} from 'react-icons/io';
import {IoCopy, IoSearch} from 'react-icons/io5';
import {MdFileDownload, MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowUp} from 'react-icons/md';
import {FiCheck, FiClock, FiPaperclip} from 'react-icons/fi';
import {TiStarFullOutline} from 'react-icons/ti';

import BackButton from '../../components/BackButton';


import User from '../../assets/images/user.png';
import Arduino from '../../assets/images/arduino.png';


const { TabPane } = Tabs;
const { Panel } = Collapse;

const syllabus = [
	{
		id: 1,
		title: 'Вводный блок',
		time: '40',
		data: [
			{
				id: 1,
				title: 'Техника безопасности',
				time: '40',
			},
			{
				id: 2,
				title: 'Вводный урок',
				time: '40',
			},
			{
				id: 3,
				title: 'Основные особенности и взаимодействие',
				time: '40',
			},
		]
	},
	{
		id: 2,
		title: 'Правила робототехники',
		time: '40',
		data: [
			{
				id: 1,
				title: 'Техника безопасности',
				time: '40',
			},
			{
				id: 2,
				title: 'Вводный урок',
				time: '40',
			},
			{
				id: 3,
				title: 'Основные особенности и взаимодействие',
				time: '40',
			},
		]
	},
	{
		id: 3,
		title: 'Подключение к Ардуино Уно',
		time: '40',
		data: [
			{
				id: 1,
				title: 'Техника безопасности',
				time: '40',
			},
			{
				id: 2,
				title: 'Вводный урок',
				time: '40',
			},
			{
				id: 3,
				title: 'Основные особенности и взаимодействие',
				time: '40',
			},
		]
	},
];


const Class = () => {



	const onChange = (key) => {
		console.log(key);
	};

	return (
		<div className='flex h-screen overflow-y-hidden'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10'>
				<BackButton path='/classes' title='К списку классов' />
				<div className='flex w justify-between items-center mt-10'>
					<h2 className='text-xl font-bold'>Класс: <span>10А</span></h2>
					<IoMdMore className='text-2xl text-center text-gray-medium-light' />
				</div>


				<button className='flex w h-12 border-2 border-primary justify-between items-center text-black rounded-2xl mt-10 pl-5 pr-5' to={'/'}>
					<span className='text-sm font-medium'>Код класса</span>
					<span className='flex items-center text-sm font-bold text-primary'>2GD2RGO123J-14 <IoCopy className='ml-2' /></span>
				</button>



				<Tabs defaultActiveKey="1" onChange={onChange} className='basis-full text-gray-medium-light font-medium active:text-primary'>

					<TabPane tab="Учебный план" key="1" className='basis-full'>

						<div className='flex flex-col basis-full min-h-590 h-3/4 overflow-y-auto'>
							<Collapse bordered={false} className='flex flex-col basis-full mr-5 bg-white' expandIconPosition='end' expandIcon={({ isActive }) => isActive ? <MdKeyboardArrowUp className='text-primary' style={{ fontSize: 20 }} /> : <MdKeyboardArrowDown style={{ fontSize: 20 }} />}>
								{
									syllabus.map((item) => (
										<Panel header={
											<div className='flex flex-col'>
												<p className='text-black font-medium text-base'><span className='text-primary'>{item.id}</span> {item.title}</p>
												<p className='text-gray-medium text-xs'>{item.time} мин</p>
											</div>
										} key={item.id}>

											<div className='flex flex-col items-end'>
												{
													item.data && item.data.map((lesson) => (


														<div className='flex my-3 w-4/5 justify-between items-center hover:cursor-pointer' key={lesson.id}>
															<div className="flex flex-col">
																<p className='text-black font-medium'><span className='text-primary'>{`${item.id}.${lesson.id}`}</span> {lesson.title}</p>
																<p className='text-gray-medium text-xs'>{lesson.time} мин</p>
															</div>
															<MdKeyboardArrowRight className='text-2xl ' />
														</div>

													))
												}
											</div>
										</Panel>
									))
								}
							</Collapse>
						</div>
					</TabPane>
					<TabPane tab="Ученики" key="2">
						<Input placeholder="Имя ученика" prefix={<IoSearch />} />
						<div className='flex flex-col w h-3/4 min-h-590 max-h-full  overflow-y-auto'>

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
					</TabPane>
				</Tabs>
			</div>

			<div className='flex flex-col basis-2/3 h-screen pl-20 pr-20 overflow-y-auto pb-20 justify-start items-start'>
				<span className='mt-24 text-gray-medium-light text-xs'>Вводный блок</span>

				<h1 className='text-2xl font-bold mt-3'>Вводный урок</h1>

				<div className="p-2 inline-block rounded-2xl bg-primary-bg mt-3">
					<p className='text-xs text-primary'>Очень лёгкий</p>
				</div>


				<p className='text-base mt-6'>Станьте специалистом в сфере интернета вещей - Internet of things (IoT) - с нуля и создайте сеть умных гаджетов. Изучите язык C, механизмы отладки и программирования микроконтроллеров (STM32, Arduino). Вы получите опыт работы с технологиями Wi-Fi, Bluetooth и LoRa для построения современных встраиваемых систем.</p>

				<img src={Arduino} className='mt-4' />



				{/* FILES */}
				<div className='flex mt-10 items-center'>
					<FiPaperclip className='text-primary' />
					<span className='text-black font-bold ml-2 text-base'>Необходимые файлы для выполнения</span>
				</div>

				<div className='flex mt-3 items-center'>
					<span className='text-links text-base'>Необходимые файлы для выполнения</span>
					<MdFileDownload className='text-links ml-2' />
				</div>
				<div className='flex mt-2 items-center'>
					<span className='text-links text-base'>Положение об уроке</span>
					<MdFileDownload className='text-links ml-2' />
				</div>


				{/* INFO  */}
				<div className='flex mt-10 items-center'>
					<IoMdBookmark className='text-primary' />
					<span className='text-black font-bold ml-2 text-base'>Полезная информация</span>
				</div>


				<span className='text-base mt-4'>Полезные ссылки для углубленного изучения:</span>

				<span className='text-base mt-2 text-gray-medium'><a className='text-links underline'>arduino.ru</a> - общая информация, документация</span>
				<span className='text-base mt-2 text-gray-medium'><a className='text-links underline'>arduinomaster.ru</a> - углубленное изучение, тесты</span>

				{/* HOMEWORK */}

				<div className='flex mt-10 w-full items-center justify-between'>
					<div className='flex items-center'>
						<TiStarFullOutline className='text-primary' />
						<span className='text-black font-bold ml-2 text-base'>Домашнее задание</span>
					</div>

					<div className='px-4 py-1 rounded-3xl border-2'>
						<span className='text-xs '>Сдали 3 из 27</span>
					</div>
				</div>


				<span className='text-base mt-4'>Прочитать общую информацию про робототехнику и Ардуино Уно</span>

				<div className="flex w pt-3 pb-3">

					<img src={User} className='w-9 h-9' />
					<div className='flex basis-full flex-col ml-5'>
						<div className='flex justify-between items-center'>

							<h4 className='text-black font-medium'>Арман Иманбаев, 10А</h4>
							<span className='text-gray-medium text-sm'>23 марта, в 11:40</span>
						</div>
						<div className='flex mt-2 items-center'>
							<span className='text-links text-base'>Положение об уроке</span>
							<MdFileDownload className='text-links ml-2' />
						</div>
						<div className='flex justify-end'>
							<button className='flex items-center text-white bg-primary font-bold text-sm p-3 rounded-2xl'>
								<FiCheck className='text-xl mr-2' />
								<span>Принять</span>
							</button>
							<button className='flex items-center text-black bg-gray-200 font-bold text-sm p-3 rounded-2xl ml-5'>
								<FiClock className='text-xl mr-2' />
								<span>Отправить на доработку</span>
							</button>
						</div>
					</div>
					<hr />
				</div>

				<div className="flex w pt-3 pb-3">

					<img src={User} className='w-9 h-9' />
					<div className='flex basis-full flex-col ml-5'>
						<div className='flex justify-between items-center'>

							<h4 className='text-black font-medium'>Арман Иманбаев, 10А</h4>
							<span className='text-gray-medium text-sm'>23 марта, в 11:40</span>
						</div>
						<div className='flex mt-2 items-center'>
							<span className='text-links text-base'>Положение об уроке</span>
							<MdFileDownload className='text-links ml-2' />
						</div>
						<div className='flex justify-end'>
							<button className='flex items-center text-white bg-primary font-bold text-sm p-3 rounded-2xl'>
								<FiCheck className='text-xl mr-2' />
								<span>Принять</span>
							</button>
							<button className='flex items-center text-black bg-gray-200 font-bold text-sm p-3 rounded-2xl ml-5'>
								<FiClock className='text-xl mr-2' />
								<span>Отправить на доработку</span>
							</button>
						</div>
					</div>
					<hr />
				</div>

				<div className='w px-12 py-8 border-1 border-gray-200 rounded-3xl mt-7'>

					<span className='text-black font-bold ml-2 text-base'>Вы уже прошли этот урок?</span>
					<div className='flex items-center mt-4'>
						<button className='flex items-center text-white bg-success font-bold text-sm px-5 py-3 rounded-2xl'>
							<span>Да, перейти на следующий</span>
						</button>
						<button className='flex items-center text-black bg-gray-200 font-bold text-sm px-5 py-3 rounded-2xl ml-5'>
							<span>Нет, мы еще проходим</span>
						</button>
					</div>
				</div>

			</div>



		</div>
	);
};

export default Class;
