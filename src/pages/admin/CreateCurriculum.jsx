import React, {useState} from 'react';
import {Collapse} from 'antd';
import {useNavigate} from 'react-router-dom';

import {MdDragIndicator, MdFileDownload, MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {AiFillPlusCircle} from 'react-icons/ai';
import {IoMdBookmark} from 'react-icons/io';
import {FiPaperclip} from 'react-icons/fi';
import {HiPencil} from 'react-icons/hi';
import {FaTrash} from 'react-icons/fa';
import {BsFolderSymlinkFill} from 'react-icons/bs';


import BackButton from '../../components/BackButton';
import Modal from '../../components/Modal/Modal';


import Arduino from '../../assets/images/arduino.png';


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


const levels = ['Очень легкий', 'Легкий', 'Средний', 'Сложный', 'Очень сложный'];

const CreateCurriculum = () => {
	let navigate = useNavigate();

	const [modal, setModal] = useState('');
	const [activeLevel, setActiveLevel] = useState('Очень легкий');

	const onCreateLessonButtonClicked = () => {
		setModal('');
		navigate('/create-lesson');
	};

	return (
		<div className='flex h-screen'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10'>
				<BackButton path='/curriculum' title='К учебным планам' />

				<h1 className='text-xl font-bold mt-10'>Личный для 9 класса</h1>
				<span className='font-bold text-sm text-primary'>24 модуля · 45 уроков</span>


				<button className='flex w h-12 bg-primary justify-center items-center text-white rounded-2xl mt-8' onClick={() => setModal('createLesson')}><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать урок</span></button>

				<div className='flex w-full flex-col overflow-y-scroll mt-2'>


					<Collapse bordered={false} className='flex flex-col bg-white basis-full' expandIconPosition='end' expandIcon={({ isActive }) => isActive ? <MdKeyboardArrowUp className='text-primary' style={{ fontSize: 20 }} /> : <MdKeyboardArrowDown style={{ fontSize: 20 }} />}>
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


												<div className='flex my-3 w-4/5 justify-between items-center' key={lesson.id} draggable={true}>
													<div className="flex flex-col">
														<p className='text-black font-medium'><span className='text-primary'>{`${item.id}.${lesson.id}`}</span> {lesson.title}</p>
														<p className='text-gray-medium text-xs'>{lesson.time} мин</p>
													</div>
													<MdDragIndicator className='text-2xl  hover:cursor-pointer' />
												</div>

											))
										}
									</div>
								</Panel>
							))
						}
					</Collapse>
				</div>

			</div>

			<div className='flex flex-col basis-2/3 h-screen pl-20 pr-20 overflow-y-auto pb-20 justify-start items-start'>
				<div className='flex justify-between items-start mt-24 w-full'>
					<div className='flex flex-col justify-start items-start '>
						<span className=' text-gray-medium-light text-xs'>Вводный блок</span>

						<h1 className='text-2xl font-bold mt-3'>Вводный урок</h1>

						<div className="p-2 inline-block rounded-2xl bg-primary-bg mt-3">
							<p className='text-xs text-primary'>Очень лёгкий</p>
						</div>
					</div>


					<div className='flex'>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center'>
							<BsFolderSymlinkFill className='text-xl' />
						</button>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center ml-3'>
							<HiPencil className='text-xl' />
						</button>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center ml-3'>
							<FaTrash className='text-error text-base' />
						</button>
					</div>
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

			</div>


			<Modal show={modal == 'createLesson'} onClose={() => setModal('')}>
				<div className='flex flex-col p-12'>
					<h2 className='text-xl text-black font-bold'>Создание урока</h2>

					<div className='mt-4'>
						<span className='font-medium'>Модуль</span>
						<h4 className='text-sm font-medium text-primary'>Создать новый</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Название нового модуля' />
					</div>


					<div className='mt-4'>
						<h4 className='text-sm font-medium'>Название</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Урок' />
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
						<button className='h-12 w-full justify-center items-center bg-gray-extra-light rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-black font-bold'>Отменить</span>
						</button>

						<button className='h-12 w-full justify-center items-center bg-primary ml-5 rounded-xl' onClick={() => onCreateLessonButtonClicked()}>
							<span className='text-base text-white font-bold'>Составить программу</span>
						</button>
					</div>
				</div>
			</Modal>

		</div>
	);
};

export default CreateCurriculum;