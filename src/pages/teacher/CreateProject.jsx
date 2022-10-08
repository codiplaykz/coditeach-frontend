import React from 'react';

import {RiPencilFill} from 'react-icons/ri';
import {IoImage} from 'react-icons/io5';
import {FiClock, FiLink} from 'react-icons/fi';
import {BsChevronDown} from 'react-icons/bs';
import {AiFillPlusCircle} from 'react-icons/ai';

import component from './../../assets/images/component.png';
import projectpic from './../../assets/images/projectpic.png';

import BackButton from '../../components/BackButton';

const CreateProject = () => {
	return (
		<div className='flex flex-col w-full px-5 mt-4'>
			<BackButton path='/projects' title='К списку проектов' />
			<div className='flex justify-between items-start mt-4'>
				<h2 className='font-bold text-xl'>Создание проекта</h2>
				<div className='flex item-start'>
					<button className='px-6 py-3 bg-gray-extra-light font-bold rounded-2xl'>Отменить</button>
					<button className='px-6 py-3 bg-gray-extra-light font-bold rounded-2xl ml-4'>Сохранить, но не публиковать</button>
					<button className='px-6 py-3 bg-primary text-white font-bold rounded-2xl ml-4'>Опубликовать для всех</button>
				</div>
			</div>

			<div className='bg-gray-extra-light-bg h-fit rounded-2xl mt-4 w-2/3 self-center flex-row'>
				<div className='flex'>
					<div className='flex-row'>
						<h1 className='text-xs text-[#C2C2C2] ml-12 mt-12 flex float-left'>SmartCity</h1>
						<h1 className='text-2xl text-black font-bold ml-12 mt-3'>Светофор</h1>
					</div>
					<button className='flex w-12 h-12 rounded-xl bg-gray-extra-light items-center justify-center mt-12 ml-96' >
						<RiPencilFill className='text-xl' />
					</button>
				</div>
				<div className='p-2 bg-primary-bg rounded-2xl ml-12 mt-3 w-fit'>
					<h1 className='text-xs text-primary'>Очень легкий</h1>
				</div>
				<div className='ml-12 mt-6'>
					<h1 className='text-sm font-bold'>Обложка</h1>
				</div>
				<div className='bg-gray-extra-light self-center w-4/5 h-fit rounded-2xl mt-2 ml-12 justify-center items-center flex'>
					<div className='flex-row'>
						<IoImage className='flex w-8 h-7 text-[#C2C2C2] ml-[166px] mt-[104px]' />
						<h1 className='mt-[22px] text-base'>Перетащите изображение сюда или <button className='text-primary'>Выберите</button></h1>
						<h1 className='mt-2 text-sm text-[#767676] ml-[51px] mb-[94px]'>Рекомендуется: 1600x900 или больше</h1>
					</div>
				</div>

				<div className='ml-12 mt-4'>
					<h1 className='text-sm font-bold'>Схема</h1>
				</div>
				<div className='bg-gray-extra-light self-center w-4/5 h-fit rounded-2xl mt-2 ml-12 justify-center items-center flex'>
					<div className='flex-row'>
						<IoImage className='flex w-8 h-7 text-[#C2C2C2] ml-[166px] mt-[104px]' />
						<h1 className='mt-[22px] text-base'>Перетащите изображение сюда или <button className='text-primary'>Выберите</button></h1>
						<h1 className='mt-2 text-sm text-[#767676] ml-[51px] mb-[94px]'>Рекомендуется: 1600x900 или больше</h1>
					</div>
				</div>

				<div className='ml-12 mt-4'>
					<h1 className='text-sm font-bold'>Описание</h1>
				</div>
				<div className='flex-row'>
					<textarea type="text" className='mt-2 border-2 border-gray-light focus:outline-none focus:border-primary rounded-2xl px-2 py-2 w-[566px] h-[140px] ml-12 mb-12' placeholder='Классный' />
				</div>
			</div>

			<div className='bg-gray-extra-light-bg h-fit rounded-2xl mt-4 w-2/3 self-center flex-row'>
				<div className='flex'>
					<FiClock className='text-primary ml-[52px] mt-[52px] w-4 h-4' />
					<h1 className='text-base font-bold ml-4 mt-[48px]'>Время на выполнение</h1>
				</div>
				<div className='flex mb-12'>
					<textarea type="text" className='mt-[26.5px] border-2 border-gray-light focus:outline-none focus:border-primary rounded-2xl px-2 py-2 w-[409px] h-12 ml-12' placeholder='Классный' />
					<div className='bg-white border-1 border-primary p-3 w-[141px] h-fit rounded-2xl ml-12 mt-[26.5px] flex'>
						<h1 className='ml-3 text-xs'>минут</h1>
						<button><BsChevronDown className='ml-[33.41px] text-black text-xs mt-[2.5px]' /></button>
					</div>
				</div>
			</div>

			<div className='bg-gray-extra-light-bg h-fit rounded-2xl mt-4 w-2/3 self-center flex-row'>
				<div className='flex'>
					<img src={component} className='text-primary ml-[52px] mt-[52px] w-4 h-4' />
					<h1 className='text-base font-bold ml-4 mt-[48px]'>Необходимые компоненты</h1>
				</div>
				<div className='flex'>
					<textarea type="text" className='mt-[26.5px] border-2 border-gray-light focus:outline-none focus:border-primary rounded-2xl px-2 py-2 w-[562px] h-12 ml-12' placeholder='Классный' />
				</div>
				<div className='flex mt-3 ml-[52px] mb-12'>
					<button className='flex'>
						<AiFillPlusCircle className='bg-white text-base mt-[2px]' />
						<h1 className='text-sm font-bold ml-3'>Добавить компонент</h1>
					</button>
				</div>
			</div>

			<div className='bg-gray-extra-light-bg h-fit rounded-2xl mt-4 w-2/3 self-center flex-row'>
				<div className='flex'>
					<FiLink className='text-primary ml-[52px] mt-[52px] w-4 h-4' />
					<h1 className='text-base font-bold ml-4 mt-[48px]'>Ссылка для покупки набора</h1>
				</div>
				<button className='flex'>
					<div className='bg-gray-extra-light  p-3 w-fit h-fit rounded-2xl ml-12 mt-[26.5px] flex mb-12'>
						<IoImage className='text-base mt-[5px]' />
						<h1 className='text-black font-bold text-base ml-3'>Добавить ссылку</h1>
					</div>
				</button>
			</div>

			<div className='bg-gray-extra-light-bg h-fit rounded-2xl mt-4 w-2/3 self-center flex-row justify-center items-center p-12'>
				<img src={projectpic} />
			</div>
		</div>
	);
};

export default CreateProject;