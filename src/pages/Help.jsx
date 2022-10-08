import React, {useState} from 'react';

import {Collapse} from 'antd';

import {FaInfoCircle} from 'react-icons/fa';
import {MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowUp} from 'react-icons/md';


import BackButton from '../components/BackButton';

const { Panel } = Collapse;

const classes = [
	{
		title: 'Классы',
		description: 'Как создать класс, как пригласить учеников, как редактии'
	},
	{
		title: 'Тесты',
		description: 'Как создать тест, как проверить ответы, как удалить тест, как поделиться тестом с учениками'
	},
	{
		title: 'Проекты',
		description: 'Как посмотреть проект учащегося, как оценить проект, как пройти проект'
	},
	{
		title: 'Общие вопросы',
		description: 'Как создать тест, как проверить ответы, как удалить тест, как поделиться тестом с учениками'
	}
];


const syllabus = [
	{
		id: 1,
		title: 'Как создать класс?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
	{
		id: 2,
		title: 'Как редактировать учебный план в классе?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
	{
		id: 3,
		title: 'Как дублировать класс?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
	{
		id: 4,
		title: 'Как удалить класс?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
	{
		id: 5,
		title: 'Как добавить учеников в класс?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
	{
		id: 6,
		title: 'Как проверить домашнее задание?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
	{
		id: 7,
		title: 'Как проверить посещение ученика?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
	{
		id: 8,
		title: 'Как удалить ученика?',
		data: [
			{
				id: 1,
				descr: 'Вам необходимо зайти в класс, нажать кнопку троеточия возле названия, нажать “Удалить класс” и подтвердить удаление.',
				warning: 'Будьте бдительны! Данные после удаления не подлежат восстановлению',
			}
		]
	},
];

const Help = () => {

	const [activeFAQ, setActiveFAQ] = useState(null);

	return (
		<div className='flex h-screen'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10 pr-10'>
				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Часто задаваемые вопросы</h1>

				<hr className='w-full mt-10' />

				{
					classes.map((item, index) => (
						<>
							<button className={`flex  w border-2 hover:border-primary ${activeFAQ === item.title ? 'border-primary' : 'border-white'} justify-between items-center text-black rounded-2xl my-4 px-4 py-3`} key={item.title + index} onClick={() => setActiveFAQ(item.title)}>
								<div className='flex flex-col items-start justify-center'>
									<span className='font-bold'>{item.title}</span>
									<span className='w-52 text-xs mt-2 break-words whitespace-nowrap overflow-hidden'>{item.description}</span>
								</div>

								<MdKeyboardArrowRight className='text-2xl ' />
							</button>

							<hr className='w-full' />
						</>
					))
				}
			</div>
			<div className='flex flex-col basis-2/3 h-screen overflow-y-auto'>

				<div className='flex basis-full flex-col bg-gray-extra-light-bg p-10 rounded-3xl m-8'>

					<span className='text-xs text-gray-medium-light'>Часто задаваемые вопросы</span>

					<h2 className='font-bold text-2xl mt-6'>{activeFAQ}</h2>

					<div className='flex p-4 bg-[#4CA0FC1A] rounded-2xl items-start mt-6'>
						<FaInfoCircle />
						<div className='flex flex-col ml-4'>
							<span>Если вы не нашли ответа на свой вопрос, задайте его нам на почту:</span>
							<a>support@codiplay.kz</a>
						</div>
					</div>

					{
						activeFAQ === 'Классы' &&
						<Collapse bordered={false} className='flex flex-col basis-full mr-5 bg-gray-extra-light-bg mt-10' expandIconPosition='end' expandIcon={({ isActive }) => isActive ? <MdKeyboardArrowUp className='text-primary' style={{ fontSize: 20 }} /> : <MdKeyboardArrowDown style={{ fontSize: 20 }} />}>
							{
								syllabus.map((item) => (
									<Panel header={
										<div className='flex flex-col py-3'>
											<p className='text-black font-medium text-base'>{item.title}</p>
										</div>
									} key={item.id}>

										<div className='flex flex-col items-end'>
											{
												item.data && item.data.map((faq) => (


													<div className='flex my-3 w-5/6 justify-between items-center hover:cursor-pointer' key={faq.id}>
														<p className='text-base'>{faq.descr}</p>
													</div>

												))
											}
										</div>
									</Panel>
								))
							}
						</Collapse>
					}
				</div>
			</div>
		</div>
	);
};

export default Help;
