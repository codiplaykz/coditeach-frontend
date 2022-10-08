import React, {useState} from 'react';


import BackButton from '../../components/BackButton';

import {FaImage} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';
import {IoIosAddCircle} from 'react-icons/io';

const CreateTest = () => {


	const [questions, setQuestions] = useState([
		{
			id: 1,
			question: 'Вопрос',
			answers: [1]
		}
	]);

	const onAddQuestionClick = () => {
		let arr = [...questions];
		arr.push({
			id: 1,
			question: 'Вопрос',
			answers: [1]
		});
		setQuestions(arr);
	};

	const onAddAnswerClick = (questionIndex) => {
		let arr = [...questions[questionIndex].answers];
		arr.push(arr.length + 1);
		let listQ = [...questions];
		listQ[questionIndex].answers = arr;
		setQuestions(listQ);
	};

	const onDeleteAnswerClick = (questionIndex, answerIndex) => {

		let arr = [...questions[questionIndex].answers];
		arr.splice(answerIndex, 1);
		let listQ = [...questions];
		listQ[questionIndex].answers = arr;
		setQuestions(listQ);

	};

	return (
		<div className='flex flex-col basis-full w-full px-10 mt-4 overflow-y-hidden'>
			<BackButton path='/tests' title='К списку тестов' />
			<div className='flex justify-between items-start mt-8'>
				<div className='flex flex-col'>
					<h2 className='font-bold text-xl'>Тест</h2>
					<span className='font-bold text-base text-primary'>{questions.length} вопросов · 30 минут</span>
				</div>
				<div className='flex item-start'>
					<button className='px-6 py-3 bg-gray-extra-light font-bold rounded-2xl'>Отменить</button>
					<button className='px-6 py-3 bg-primary text-white font-bold rounded-2xl ml-4'>Создать тест</button>
				</div>
			</div>

			<div className='flex flex-col basis-full h-96 items-center justify-start overflow-y-auto'>

				{
					questions.map((question, questionIndex) => {
						return (
							<div className='w-760 p-10 rounded-2xl bg-gray-extra-light-bg mt-3' key={question + questionIndex}>
								<div className='flex w-full justify-between items-center'>
									<h4 className='text-base font-bold'>Вопрос</h4>
									<span className='font-medium text-primary'>один из списка</span>
								</div>

								<div className='flex w-full items-center mt-5'>
									<input type="text" className='border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-4 py-3 w-full' placeholder='Вопрос' />
									<button className='w-12 h-12 rounded-xl bg-gray-extra-light ml-3 flex items-center justify-center'>
										<FaImage />
									</button>
								</div>
								<hr className='w-full my-6' />

								<div className='flex flex-col w-full items-start justify-center'>

									{
										question.answers.map((item, index) => {
											return (
												<div className='flex w-full items-center justify-between mb-2' key={item + index}>
													<div className='flex items-center'>
														<input type={'radio'} name='question1' />
														<label className='ml-3'>Вариант {item}</label>
														{index == 0 && <label className='font-medium text-xs text-success ml-4'>Правильный ответ</label>}
													</div>
													<IoClose className='text-xl cursor-pointer' onClick={() => onDeleteAnswerClick(questionIndex, index)} />
												</div>
											);
										})
									}


									<button className='flex items-center justify-start' onClick={() => onAddAnswerClick(questionIndex)}>
										<IoIosAddCircle />
										<span className='font-bold'>Добавить вариант</span>
									</button>
								</div>
							</div>
						);
					})
				}

				<button className='flex items-center justify-start px-4 py-2 bg-gray-extra-light rounded-xl mb-8 mt-4' onClick={() => onAddQuestionClick()}>
					<IoIosAddCircle />
					<span className='font-bold text-base ml-4'>Добавить вопрос</span>
				</button>

			</div>
		</div>
	);
};

export default CreateTest;