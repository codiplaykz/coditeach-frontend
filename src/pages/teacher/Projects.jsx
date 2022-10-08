import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Tabs} from 'antd';


import {AiFillPlusCircle} from 'react-icons/ai';
import {RiProjector2Fill} from 'react-icons/ri';
import {IoMdBookmark, IoMdMore} from 'react-icons/io';
import {FiClock, FiPaperclip} from 'react-icons/fi';

import BackButton from '../../components/BackButton';
import Modal from '../../components/Modal/Modal';


import Plate from '../../assets/images/plate.png';
import TrafficLight from '../../assets/images/trafficlight.png';


const { TabPane } = Tabs;

const projects = [
	{
		title: 'Светофор',
		type: 'Lifestyle',
		owner: 'Общие проекты',
		time: '30 мин',
		img: TrafficLight
	},
	{
		title: 'Умная корзина',
		type: 'Lifestyle',
		owner: 'Общие проекты',
		time: '30 мин',
		img: TrafficLight
	},
	{
		title: 'Азбука морзе',
		type: 'Lifestyle',
		owner: 'Общие проекты',
		time: '30 мин',
		img: TrafficLight
	}
];

const levels = ['Очень легкий', 'Легкий', 'Средний', 'Сложный', 'Очень сложный'];


const Projects = () => {
	let navigate = useNavigate();

	const [activeProject, setActiveProject] = useState('Светофор');
	const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

	const [projectName, setProjectName] = useState(null);
	const [activeLevel, setActiveLevel] = useState('Очень легкий');

	const onChange = (key) => {
		console.log(key);
	};

	const onCreateProjectButtonClicked = () => {
		setShowCreateProjectModal(false);
		navigate('/projects/create');
	};

	return (
		<div className='flex h-screen overflow-y-hidden'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10'>
				<BackButton path='/' title='На главную' />
				<div className='flex w justify-between items-center mt-10'>
					<h2 className='text-xl font-bold'>Общие проекты</h2>
					<IoMdMore className='text-2xl text-center text-gray-medium-light' />
				</div>




				<Tabs defaultActiveKey="1" onChange={onChange} className='basis-full text-gray-medium-light font-medium active:text-primary'>
					<TabPane tab="Все" key="1" className='flex flex-col basis-full'>

						<button className='flex w h-12 bg-primary justify-center items-center text-white rounded-2xl mt-2' onClick={() => setShowCreateProjectModal(true)}><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать проект</span></button>
						{
							projects.map((item, index) => (
								<>
									<button className={`flex  w border-2 hover:border-primary ${activeProject === item.title ? 'border-primary' : 'border-white'} items-center text-black rounded-2xl my-4 px-4 py-3`} key={item.title + index} onClick={() => setActiveProject(item.title)}>
										<img src={item.img} />
										<div className='flex w-full flex-col items-start h-full justify-around ml-3'>
											<div className='flex w-full justify-between items-center'>
												<div className='flex flex-col items-start'>
													<span className='font-bold'>{item.title}</span>
													<span className='text-xs text-gray-medium-light'>{item.owner}</span>
												</div>
												<IoMdMore className='text-2xl text-center text-gray-medium-light' />
											</div>
											<div>
												<span className='text-primary flex items-center'><RiProjector2Fill className='mr-2' />{item.type}</span>
												<span className='text-primary flex items-center'><FiClock className='mr-2' />{item.time}</span>
											</div>
										</div>
									</button>

									<hr className='w-full' />
								</>
							))
						}
					</TabPane>
					<TabPane tab="Lifestyle" key="2" className='flex flex-col basis-full'>
						{
							projects.map((item, index) => (
								<>
									<button className={`flex  w border-2 hover:border-primary ${activeProject === item.title ? 'border-primary' : 'border-white'} items-center text-black rounded-2xl my-4 px-4 py-3`} key={item.title + index} onClick={() => setActiveProject(item.title)}>
										<img src={item.img} />
										<div className='flex w-full flex-col items-start h-full justify-around ml-3'>
											<div className='flex w-full justify-between items-center'>
												<div className='flex flex-col items-start'>
													<span className='font-bold'>{item.title}</span>
													<span className='text-xs text-gray-medium-light'>{item.owner}</span>
												</div>
												<IoMdMore className='text-2xl text-center text-gray-medium-light' />
											</div>
											<div>
												<span className='text-primary flex items-center'><RiProjector2Fill className='mr-2' />{item.type}</span>
												<span className='text-primary flex items-center'><FiClock className='mr-2' />{item.time}</span>
											</div>
										</div>
									</button>

									<hr className='w-full' />
								</>
							))
						}
					</TabPane>
					<TabPane tab="SmartCity" key="3" className='flex flex-col basis-full'>
						<span>Проектов нет</span>
					</TabPane>
					<TabPane tab="Game" key="4" className='flex flex-col basis-full'>
						<span>Проектов нет</span>
					</TabPane>
				</Tabs>
			</div>

			<div className='flex flex-col basis-2/3 h-screen overflow-y-auto'>

				<div className='flex basis-full flex-col bg-gray-extra-light-bg p-10 rounded-3xl m-8  justify-start items-start'>
					<span className='text-gray-medium-light text-xs'>Lifestyle</span>

					<h1 className='text-2xl font-bold mt-3'>{activeProject}</h1>

					<div className="p-2 rounded-2xl bg-primary-bg mt-3">
						<p className='text-xs text-primary'>Очень лёгкий</p>
					</div>


					<img src={Plate} className='mt-4' />

					<p className='text-base mt-6'>Станьте специалистом в сфере интернета вещей - Internet of things (IoT) - с нуля и создайте сеть умных гаджетов. Изучите язык C, механизмы отладки и программирования микроконтроллеров (STM32, Arduino). Вы получите опыт работы с технологиями Wi-Fi, Bluetooth и LoRa для построения современных встраиваемых систем.</p>

				</div>


				<div className='flex basis-full flex-col bg-gray-extra-light-bg p-10 rounded-3xl mx-8  justify-start items-start'>
					{/* FILES */}
					<div className='flex items-center'>
						<FiClock className='text-primary' />
						<span className='text-black font-bold ml-2 text-base'>Время на выполнение</span>
					</div>

					<p className='mt-3'>30 минут</p>
				</div>


				<div className='flex basis-full flex-col bg-gray-extra-light-bg p-10 rounded-3xl m-8 justify-start items-start'>

					<div className='flex items-center'>
						<IoMdBookmark className='text-primary' />
						<span className='text-black font-bold ml-2 text-base'>Необходимые компоненты</span>
					</div>

					<p className='mt-3'>Arduino Uno</p>
					<p className='mt-3'>Arduino Cable</p>
					<p className='mt-3'>Макет</p>
					<p className='mt-3'>Провод для джемпера \”папа-папа\”</p>
					<p className='mt-3'>Три светодиода</p>

				</div>


				<div className='flex basis-full flex-col bg-gray-extra-light-bg p-10 rounded-3xl mx-8 mb-8  justify-start items-start'>
					{/* INFO  */}
					<div className='flex items-center'>
						<FiPaperclip className='text-primary' />
						<span className='text-black font-bold ml-2 text-base'>Ссылка для покупки набора</span>
					</div>

					<span className='text-base mt-2 text-gray-medium'><a className='text-links underline'>buy.codiplay.kz</a> - общая информация, документация</span>


				</div>


			</div>
			<Modal show={showCreateProjectModal} onClose={() => setShowCreateProjectModal(false)}>
				<div className='flex flex-col p-12'>
					<h2 className='text-xl text-black font-bold'>Создание проекта</h2>

					<div className='mt-4'>
						<span className='font-medium'>Тип</span>
					</div>


					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Название</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' value={projectName} placeholder='Школа' onChange={event => setProjectName(event.target.value)} />
					</div>

					<span className='font-medium mt-4'>Уровень сложности</span>
					<div className='flex w-full justify-between items-center mt-2'>
						{
							levels.map((item, index) => {
								return (
									<div className={`px-4 py-2 font-bold rounded-2xl border-2 ${activeLevel == item ? 'border-primary text-primary bg-white' : 'border-gray-extra-light bg-gray-extra-light'} cursor-pointer`} key={item + index} onClick={() => setActiveLevel(item)}>{item}</div>
								);
							})
						}
					</div>

					<div className='flex justify-between items-center mt-6'>
						<button className='h-12 w-full justify-center items-center bg-gray-extra-light rounded-xl' onClick={() => setShowCreateProjectModal(false)}>
							<span className='text-base text-black font-bold'>Отменить</span>
						</button>

						<button className='h-12 w-full justify-center items-center bg-primary ml-5 rounded-xl' onClick={() => onCreateProjectButtonClicked()}>
							<span className='text-base text-white font-bold'>Составить программу</span>
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Projects;
