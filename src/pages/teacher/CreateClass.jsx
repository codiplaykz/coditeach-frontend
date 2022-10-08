import React, {useState} from 'react';
import {Collapse} from 'antd';

import {MdDragIndicator, MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {IoMdBookmark} from 'react-icons/io';


import BackButton from '../../components/BackButton';


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

const CreateClass = () => {

	const [data, setData] = useState([]);
	const [currentItem, setCurrentItem] = useState(null);
	const [currentModuleIndex, setCurrentModuleIndex] = useState(null);


	const dragOverHandler = (e) => {
		e.preventDefault();
		if(e.target.className == 'item'){
			e.target.style.boxShadow = '0 2px 3px gray';
		}
	};

	const dragLeaveHandler = (e) => {
		e.target.style.boxShadow = 'none';
	};

	const dragStartHandler = (item, moduleIndex) => {
		setCurrentItem(item);
		setCurrentModuleIndex(moduleIndex);

	};

	const dragEndHandler = (e) => {
		e.target.style.boxShadow = 'none';
	};

	const dropHandler = (e) => {
		e.preventDefault();


		let newModule = {};

		let arr = [...data];

		if(data[currentModuleIndex]) {
			let lessonArr = data[currentModuleIndex].data;
			lessonArr.push(currentItem);
			arr[currentModuleIndex].data = lessonArr;
		} else {
			newModule = {
				title: syllabus[currentModuleIndex].title,
				id: syllabus[currentModuleIndex].id,
				time: syllabus[currentModuleIndex].time,
				data: [currentItem]
			};
			arr.push(newModule);
		}



		setData(arr);
	};
	return (
		<div className='flex h-screen'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10'>
				<BackButton path='/classes' title='К списку классов' />

				<h1 className='text-xl font-bold mt-10'>Создание класса</h1>

				<div className='flex w-full flex-col overflow-y-scroll mt-12'>
					<div className="flex">
						<div className="flex flex-col w-30">
							<span className='font-medium'>Класс</span>
							<input type={'text'} className='w-24 px-6 py-3 border-2 border-gray-light focus:outline-none focus:border-primary rounded-2xl text-sm mt-3' placeholder='10' maxLength={2} />
						</div>

						<div className="flex flex-col w-30 ml-6">
							<span className='font-medium'>Буква</span>
							<input type={'text'} className='w-24 px-6 py-3 border-2 border-gray-light focus:outline-none focus:border-primary rounded-2xl text-sm mt-3' placeholder='A' maxLength={1} />
						</div>
					</div>

					<Collapse bordered={false} className='mt-10 flex flex-col bg-white basis-full' expandIconPosition='end' expandIcon={({ isActive }) => isActive ? <MdKeyboardArrowUp className='text-primary' style={{ fontSize: 20 }} /> : <MdKeyboardArrowDown style={{ fontSize: 20 }} />}>
						{
							syllabus.map((item, itemIndex) => (
								<Panel header={
									<div className='flex flex-col'>
										<p className='text-black font-medium text-base'><span className='text-primary'>{item.id}</span> {item.title}</p>
										<p className='text-gray-medium text-xs'>{item.time} мин</p>
									</div>
								} key={item.id}>

									<div className='flex flex-col items-end'>
										{
											item.data && item.data.map((lesson) => (


												<div 
													className='flex my-3 w-4/5 justify-between items-center item' 
													key={lesson.id} 
													draggable={true}
													onDragOver={(e) => dragOverHandler(e)}
													onDragLeave={(e) => dragLeaveHandler(e)}
													onDragStart={() => dragStartHandler(lesson, itemIndex)}
												>
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
			<div className='flex flex-col basis-2/3 h-screen justify-start items-start px-28 py-16'>
				<div className='flex w-full justify-end'>
					<button className='px-6 py-3 rounded-2xl bg-gray-extra-light flex items-center justify-center font-bold text-base'>Отменить</button>
					<button className='px-6 py-3 rounded-2xl bg-primary flex items-center justify-center font-bold text-base text-white ml-5'>Сформировать класс</button>
				</div>

				<div className='flex mt-10 items-center'>
					<IoMdBookmark className='text-primary' />
					<span className='text-black font-bold ml-2 text-base'>Мой учебный план</span>
				</div>

				<div className='w-full mt-6 h-4/5 bg-[#4CA0FC1A] border-2 border-dashed border-gray-medium-light rounded-3xl flex justify-start items-center flex-col overflow-y-auto' 
					draggable={true}
					onDragOver={(e) => dragOverHandler(e)}
					onDragEnd={(e) => dragEndHandler(e)}
					onDrop={(e) => dropHandler(e)}
				>
					{ 
						data.length > 0 ?
							<Collapse bordered={false} className='flex w-full px-14 pt-6 flex-col bg-[#4CA0FC1A] basis-full' expandIconPosition='end' expandIcon={({ isActive }) => isActive ? <MdKeyboardArrowUp className='text-primary' style={{ fontSize: 20 }} /> : <MdKeyboardArrowDown style={{ fontSize: 20 }} />}>
								{
									data.map((item) => (
										<Panel header={
											<div className='flex flex-col'>
												<p className='text-black font-medium text-base'><span className='text-primary'>{item.id}</span> {item.title}</p>
												<p className='text-gray-medium text-xs'>{item.time} мин</p>
											</div>
										} key={item.id}>

											<div className='flex flex-col items-end'>
												{
													item.data && item.data.map((lesson) => (


														<div 
															className='flex my-3 w-4/5 justify-between items-center item' 
															key={lesson.id} 
															draggable={true}
															onDragOver={(e) => dragOverHandler(e)}
															onDragLeave={(e) => dragLeaveHandler(e)}
															onDragStart={(e) => dragStartHandler(e)}
														>
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
							</Collapse> :
							<>
								<p className='text-center'>Перетащите уроки сюда <br /> или</p>
								<button className='px-6 py-3 mt-5 rounded-2xl bg-primary flex items-center justify-center font-bold text-sm text-white'>Выберите шаблон</button>
							</>
					}
				</div>
			</div>
		</div>
	);
};

export default CreateClass;
