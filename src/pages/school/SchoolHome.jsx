import React, {useState} from 'react';

import {IoIosPeople, IoMdMore} from 'react-icons/io';
import {FaStar} from 'react-icons/fa';

import User from '../../assets/images/user.png';


const SchoolHome = () => {
	const [selectedClass, setSelectedClass] = useState(null);


	return (
		<div className='flex flex-col h-screen pl-10 pt-5 overflow-y-hidden'>
			<div className='w-full'>
				<h1 className='text-xl font-bold'>Главная</h1>
			</div>
			<div className='flex basis-full mt-8'>
				<div className='flex flex-col basis-3/5 h-screen'>

					<div className='flex items-center justify-between'>
						<div className=''>
							<h3 className='text-xl font-bold'>3 четверть</h3>
							<span className='text-gray-medium'>1 апреля - 17 мая</span>
						</div>
						<div className='flex items-center py-4 px-6 border-2 border-gray-extra-light rounded-xl'>
							<div>
								<h3 className='text-2xl font-bold'>97%</h3>
								<span className='text-gray-medium'>посещение</span>
							</div>
							<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-8'>
								<IoIosPeople className='text-white text-xl' />
							</div>
						</div>
						<div className='flex items-center py-4 px-6 border-2 border-gray-extra-light rounded-xl'>
							<div>
								<h3 className='text-2xl font-bold'>83%</h3>
								<span className='text-gray-medium'>сдали д/з</span>
							</div>
							<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-8'>
								<FaStar className='text-white text-lg' />
							</div>
						</div>
					</div>

					<div className='flex flex-col w-full max-h-full items-start py-6 px-4 border-2 border-gray-extra-light rounded-xl mt-6 overflow-y-auto'>
						<h4 className='font-bold text-black text-base'>Учителя <span className='text-primary'>4</span></h4>
						{
							Array(5).fill('').map((item, index) => (
								<>
									<div className='flex w-full justify-between items-center px-4 h-14 border-2 border-white hover:border-primary rounded-xl cursor-pointer my-2' key={index}>
										<div className='flex items-center justify-start'>
											<img src={User} className='w-9 h-9' />
											<h4 className='font-medium text-sm ml-4'>Талдыбаев Жанадил</h4>
										</div>
										<IoMdMore className='text-2xl' />
									</div>
									<hr className='w-full' />
								</>
							))
						}
					</div>


				</div>
				<div className='flex flex-col basis-2/5 mx-8 items-start justify-start'>


					<div className='flex items-center py-4 px-6 border-2 border-gray-extra-light rounded-xl'>
						<div>
							<h3 className='text-2xl font-bold'>93%</h3>
							<span className='text-gray-medium'>принятых д/з</span>
						</div>
						<div className='flex bg-primary items-center justify-center w-10 h-10 rounded-full ml-8'>
							<FaStar className='text-white text-lg' />
						</div>
					</div>

					<div className='flex flex-col p-8 bg-main-bg rounded-xl mt-6'>

						<h4 className='font-bold text-black text-base'>Ученики <span className='text-primary'>1 новый</span></h4>
						<div className='flex max-w-sm overflow-x-auto scrollb mt-2 pb-3'>
							{
								Array(8).fill('10A').map((item, index) => (
									<button className={`px-4 py-2 ${selectedClass == index ? 'bg-white border-primary' : 'bg-gray-extra-light border-gray-extra-light'} border-2  mr-3 rounded-2xl`} key={index} onClick={() => setSelectedClass(index)}>
										<span className='text-black font-bold'>{item}</span>
									</button>
								))
							}
						</div>
						<div className='overflow-y-auto h-2/6 max-w-sm'>
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
					</div>
				</div>
			</div>

		</div>
	);
};

export default SchoolHome;