import React from 'react';

import User from '../../assets/images/user.png';

import {AiFillPlusCircle} from 'react-icons/ai';
import {IoMdMore} from 'react-icons/io';
import {HiPencil} from 'react-icons/hi';
import {FaTrash} from 'react-icons/fa';
import {CgPassword} from 'react-icons/cg';

import BackButton from '../../components/BackButton';


const Students = () => {
	return (
		<div className='flex bg-white h-screen overflow-y-hidden'>
			<div className='flex flex-col basis-2/5 h-screen pt-5 pl-10 pr-10 justify-start items-start'>

				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Ученики  <span className='text-primary'>84</span></h1>


				<button className='flex w-full h-16 bg-primary justify-center items-center text-white rounded-2xl mt-10' to='/create-class'><AiFillPlusCircle />  <span className='font-bold ml-3'>Добавить ученика</span></button>

				<div className='flex basis-full w-full overflow-y-auto flex-col pr-4 mt-4'>
					<hr />
					{
						Array(12).fill('0').map(() => (
							<>
								<div className='flex w-full p-3 justify-between items-center border-2 border-white hover:border-primary rounded-2xl my-2 cursor-pointer'>
									<div className='flex justify-start items-center'>
										<img src={User} className='w-9 h-9' />
										<span className='ml-3'>Талдыбаев Жанадил</span>
									</div>
									<IoMdMore className='text-2xl text-center text-gray-medium-light' />
								</div>
								<hr />
							</>
						))
					}
				</div>
			</div>
			<div className='flex flex-col basis-3/5 h-screen pt-12 pr-12'>
				<div className='flex justify-between items-start p-12 bg-gray-extra-light-bg rounded-3xl'>
					<div className='flex items-center justify-start'>
						<img src={User} className='w-12 h-12' />
						<div className='flex flex-col ml-5'>
							<span className='text-xs text-gray-medium-light font-medium'>Ученик</span>
							<h2 className='text-2xl font-bold'>Талдыбаев Жанадил</h2>
						</div>
					</div>
					<div className='flex'>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center' >
							<CgPassword className='text-xl' />
						</button>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center ml-3' >
							<HiPencil className='text-xl' />
						</button>
						<button className='flex w-10 h-10 rounded-xl bg-gray-extra-light items-center justify-center ml-3'>
							<FaTrash className='text-error text-base' />
						</button>
					</div>
				</div>


				<div className='flex flex-col justify-start items-start p-12 bg-gray-extra-light-bg rounded-3xl mt-4'>
					<h4 className='text-base font-bold mb-3'>Класс</h4>
					<span>Ученик не состоит ни в одном классе</span>
					<button className='flex w-96 h-12 bg-primary justify-center items-center text-white rounded-2xl mt-3' to='/create-class'><AiFillPlusCircle />  <span className='font-bold ml-3'>Добавить ученика в класс</span></button>
				</div>

				<div className='flex flex-col justify-start items-start p-12 bg-gray-extra-light-bg rounded-3xl mt-4'>
					<h4 className='text-base font-bold mb-3'>Родители</h4>
					<div className='flex w-full justify-between items-center'>
						<div className='flex flex-col'>
							<span>zhtaldybayevparents@gmail.com</span>
							<span className='text-xs font-medium'>Родительский аккаунт</span>
						</div>
						<IoMdMore className='text-2xl text-center text-gray-medium-light' />
					</div>
				</div>
			</div>

		</div>
	);
};

export default Students;