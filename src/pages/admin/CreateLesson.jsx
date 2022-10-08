import React from 'react';

import {RiPencilFill} from 'react-icons/ri';
import {IoMdBookmark} from 'react-icons/io';
import {IoImage} from 'react-icons/io5';
import {FiPaperclip} from 'react-icons/fi';
import {MdFileDownload, MdFileUpload} from 'react-icons/md';
import {BsLink45Deg} from 'react-icons/bs';


import BackButton from '../../components/BackButton';

const CreateLesson = () => {
	return (
		<div className='flex flex-col w-full px-5 mt-4'>
			<BackButton path='/curriculum' title='К списку уроков' />
			<div className='flex justify-between items-start mt-4'>
				<h2 className='font-bold text-xl'>Создание урока</h2>
				<div className='flex item-start'>
					<button className='px-6 py-3 bg-gray-extra-light font-bold rounded-2xl'>Отменить</button>
					<button className='px-6 py-3 bg-gray-extra-light font-bold rounded-2xl ml-4'>Сохранить, но не публиковать</button>
					<button className='px-6 py-3 bg-primary text-white font-bold rounded-2xl ml-4'>Опубликовать для всех</button>
				</div>
			</div>

			<div className='bg-gray-extra-light-bg h-fit rounded-2xl mt-4 w-2/3 self-center flex-row'>
				<div className='flex'>
					<div className='flex-row'>
						<h1 className='text-xs text-gray-medium-light ml-12 mt-12 flex float-left'>Вводный блок</h1>
						<h1 className='text-2xl text-black font-bold ml-12 mt-3'>Начальный урок</h1>
					</div>
					<button className='flex w-12 h-12 rounded-xl bg-gray-extra-light items-center justify-center mt-12 ml-96' >
						<RiPencilFill className='text-xl' />
					</button>
				</div>
				<div className='p-2 bg-primary-bg rounded-2xl ml-12 mt-3 w-fit'>
					<h1 className='text-xs text-primary'>Очень легкий</h1>
				</div>

				<div className='ml-12 mt-10'>
					<h1 className='text-sm font-bold'>Описание</h1>
				</div>
				<div className='flex-row'>
					<textarea type="text" className='mt-2 border-2 border-gray-light focus:outline-none focus:border-primary rounded-2xl px-2 py-2 w-4/5 h-28 ml-12' placeholder='Классный' />
				</div>

				<div className='bg-gray-extra-light self-center w-4/5 h-fit rounded-2xl my-6 ml-12 justify-center items-center flex py-24'>
					<div className='flex flex-col items-center justify-center'>
						<IoImage className='flex w-8 h-7 text-gray-medium-light ' />
						<h1 className='mt-6 text-base'>Перетащите изображение сюда или <button className='text-primary'>Выберите</button></h1>
						<h1 className='mt-2 text-sm text-[#767676]'>Рекомендуется: 1600x900 или больше</h1>
					</div>
				</div>
				
			</div>

			<div className='bg-gray-extra-light-bg rounded-2xl mt-10 w-2/3 self-center p-12'>
				{/* INFO  */}
				<div className='flex items-center'>
					<FiPaperclip className='text-primary' />
					<span className='text-black font-bold ml-2 text-base'>Необходимые файлы для выполнения</span>
				</div>

				<div className='flex mt-3 items-center'>
					<span className='text-links text-base'>Необходимые файлы для выполнения</span>
					<MdFileDownload className='text-links ml-2 text-lg' />
				</div>

				<button className='flex mt-3 items-center'>
					<MdFileUpload className='text-lg' />
					<span className='font-bold text-base ml-2'>Добавить файл</span>
				</button>
			
			</div>


			<div className='bg-gray-extra-light-bg rounded-2xl mt-10 w-2/3 self-center p-12'>

				<div className='flex items-center'>
					<IoMdBookmark className='text-primary text-lg' />
					<span className='text-black font-bold ml-2 text-base'>Полезная информация</span>
				</div>

				<textarea type="text" className='mt-6 border-2 border-gray-light focus:outline-none focus:border-primary rounded-2xl px-2 py-2 w-full h-20' placeholder='Классный' />


				<div className='flex justify-start items-center mt-2'>
					<button className='flex items-center text-black bg-gray-200 font-bold text-sm px-5 py-3 rounded-2xl'>
						<IoImage className='text-xl mr-2' />
						<span>Добавить фото</span>
					</button>
					<button className='flex items-center text-black bg-gray-200 font-bold text-sm px-5 py-3 rounded-2xl ml-5'>
						<BsLink45Deg className='text-xl mr-2' />
						<span>Добавить ссылку</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateLesson;