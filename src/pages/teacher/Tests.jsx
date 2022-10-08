import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import {AiFillPlusCircle, AiOutlineCheck} from 'react-icons/ai';
import {TbChecklist} from 'react-icons/tb';
import {FiClock} from 'react-icons/fi';
import {HiPencil} from 'react-icons/hi';
import {FaTrash} from 'react-icons/fa';
import {RiShareCircleFill} from 'react-icons/ri';
import {IoMdRadioButtonOff, IoMdRadioButtonOn} from 'react-icons/io';


import {CartesianGrid, Cell, Label, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis} from 'recharts';

import Test from '../../assets/images/Test.png';


import BackButton from '../../components/BackButton';


const data = [
	{ name: 'Отлично', value: 4 },
	{ name: 'Хорошо', value: 9 },
	{ name: 'Не удовлетворительно', value: 3 },
];


const COLORS = ['#2ecc71', '#f1c40f', '#e74c3c'];
const TAILWIND_COLORS = ['bg-[#2ecc71]','bg-[#f1c40f]', 'bg-[#e74c3c]' ];


const classes = [
	{
		title: 'По теме для 7ых классов',
		questions: '10',
		time: '30',
		answers: '7'
	},
	{
		title: 'По теме для 8ых классов',
		questions: '10',
		time: '30'
	},
	{
		title: 'По теме для 9ых классов',
		questions: '10',
		time: '30'
	},
];

const students = [
	{
		name: 'Иван Иванов',
		score: '60/100'
	},
	{
		name: 'Айдар Айдарбеков',
		score: '100/100'
	},
	{
		name: 'Алихан Баев',
		score: '90/100'
	}
];

const dataLine = [
	{
		name: 'Арман И.',
		time: 18
	},
	{
		name: 'Арман И.',
		time: 28
	},
	{
		name: 'Арман И.',
		time: 21
	},
	{
		name: 'Арман И.',
		time: 10
	},
	{
		name: 'Арман И.',
		time: 16
	},
	{
		name: 'Арман И.',
		time: 14
	},
	{
		name: 'Арман И.',
		time: 25
	},
];


const Tests = () => {

	const [selectedTest, setSelectedTest] = useState(null);
	const [selectedStudent, setSelectedStudent] = useState('Статистика');

	return (
		<div className='flex h-screen overflow-y-hidden'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10'>
				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Тесты <span className='text-primary'>3</span></h1>

				<Link className='flex w h-12 bg-primary justify-center items-center text-white hover:text-white rounded-2xl mt-10' to='/tests/create'><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать тест</span></Link>

				{
					classes.map((item) => (
						<>
							<button className={`flex flex-col w hover:border-2 ${item.answers ? 'bg-primary-bg border-2 border-l-links border-t-white border-r-white border-b-white' : 'border-2 border-white'} hover:border-primary justify-center px-6 py-4 text-black rounded-2xl mt-3 pl-3`} to={`/class${item.path}`} onClick={() => setSelectedTest(item.title)}>
								<span className='font-bold'>{item.title}</span>
								<div className='flex w-full justify-between items-center text-primary mt-2'>
									<div className='flex items-center'>
										<TbChecklist />
										<span className='ml-1'>{item.questions} вопросов</span>
									</div>
									<div className='flex items-center'>
										<FiClock />
										<span className='ml-1'>{item.time} минут</span>
									</div>
									{
										item.answers ?
											<div className='flex items-center '>
												<span>{item.answers} ответов</span>
											</div> :
											<div className='flex items-center -z-40'>
												<span>0 ответов</span>
											</div>
									}

								</div>
							</button>
							<hr className='mt-2' />
						</>
					))
				}
			</div>
			{
				selectedTest ?

					<div className='flex flex-col basis-2/3 h-screen px-10 pt-10 overflow-y-auto'>
						<div className='flex flex-col basis-full w-full justify-start items-start px-10 pt-10 bg-gray-extra-light-bg rounded-3xl'>
							<div className='flex w-full items-start justify-between'>
								<div className='flex flex-col'>
									<h2 className='text-2xl font-bold'>{selectedTest}</h2>
									<span className='font-bold text-base text-primary'>10 вопросов · 30 минут · 7 ответов</span>
								</div>
								<div className='flex'>
									<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center' >
										<HiPencil className='text-xl' />
									</button>
									<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center ml-3' >
										<RiShareCircleFill className='text-xl' />
									</button>
									<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center ml-3'>
										<FaTrash className='text-error text-base' />
									</button>
								</div>
							</div>
							<div className='flex w-full overflow-x-auto mt-4'>
								<button className={`px-4 ${selectedStudent == 'Статистика' ? 'bg-white border-primary' : 'bg-gray-extra-light border-gray-extra-light'} border-2  mr-3 rounded-2xl`} onClick={() => setSelectedStudent('Статистика')}>
									<span className='text-black font-bold'>Статистика</span>
								</button>
								{
									students.map((item, index) => (
										<button className={`px-4 py-2 ${selectedStudent == item.name ? 'bg-white border-primary' : 'bg-gray-extra-light border-gray-extra-light'} border-2  mr-3 rounded-2xl`} key={index} onClick={() => setSelectedStudent(item.name)}>
											<span className='text-black font-bold'>{item.name}</span>
										</button>
									))
								}
							</div>

							{
								selectedStudent == 'Статистика' ?
									<div className='flex w-full flex-col pt-10'>
										<div className='flex w-full items-center justify-start'>
											<PieChart width={200} height={200}>
												<Pie
													data={data}
													cx={96}
													cy={96}
													innerRadius={70}
													outerRadius={80}
													fill="#8884d8"
													paddingAngle={2}
													dataKey="value"
												>
													{data.map((entry, index) => (
														<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
													))}

													<Label offset={0} position="center" >
												16
												ответов
													</Label>
												</Pie>
											</PieChart>
											<div className='flex flex-col ml-10'>
												{
													data.map((item, index) => (
														<div className='flex items-center justify-start mb-3' key={item.name}>
															<div className={`${TAILWIND_COLORS[index]} w-6 h-3 rounded-2xl mr-3`} />
															<p>{item.name} <span className='font-medium'>{item.value}</span></p>
														</div>
													))
												}
											</div>

										</div>
										<LineChart
											width={650}
											height={200}
											data={dataLine}
											margin={{
												top: 40,
												right: 30,
												left: -20,
												bottom: 5,
											}}
										>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="name" />
											<YAxis yAxisId="left" />
											<YAxis yAxisId="right" orientation="right" />
											<Tooltip />
											<Line yAxisId="left" type="monotone" dataKey="time" stroke="#4CA0FC" activeDot={{ r: 8 }} />
										</LineChart>
									</div>
									:
									<>
								
										<div className='flex items-center justify-start font-bold text-base mt-6'>
								Всего
											<div className='bg-warning px-2 py-1 rounded-full ml-2'>60 из 100</div>
										</div>

										<div className='flex flex-col basis-full w-full h-full'>

											{
												Array(5).fill('').map((item, index) => (
													<div className='flex flex-col w-full p-6 border-1 border-gray-extra-light bg-white rounded-2xl mt-4' key={item + index}>
														<span className='flex items-center font-bold text-base'><AiOutlineCheck className='text-success mr-3' /> Что это такое?</span>

														<div className='flex items-center justify-between border-1 border-success text-success rounded-xl px-4 py-2 mt-3'>
															<span className='flex items-center'><IoMdRadioButtonOn className='text-xl mr-3' /> Вариант 1</span>
												Правильно
														</div>

														<div className='flex items-center justify-between border-1 border-gray-extra-light-bg rounded-xl px-4 py-2 mt-3'>
															<span className='flex items-center'><IoMdRadioButtonOff className='text-xl mr-3' /> Вариант 2</span>
														</div>


														<div className='flex w-full justify-end'>10 из 10 баллов</div>
													</div>
												))
											}

										</div>
									</>
							}


						</div>

					</div>

					:


					<div className='flex flex-col basis-2/3 h-screen items-center justify-center px-10 pt-10 overflow-y-auto'>
						<img src={Test} />
						<p className='text-center mt-10'>Здесь вы можете создавать свои тесты</p>
						<Link className='flex w-52 h-12 bg-primary justify-center items-center text-white rounded-2xl mt-10' to='/tests/create'><AiFillPlusCircle />  <span className='font-bold ml-3'>Создать тест</span></Link>
					</div>


			}
		</div>
	);
};

export default Tests;