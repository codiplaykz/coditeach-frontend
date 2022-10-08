import React from 'react';

import news_pic from '../assets/images/news_pic.png';

import BackButton from '../components/BackButton';

const news = {
	title: 'Новый дизайн платформы',
	path: '/login',
	date: '12.01.2022',
	img: ''
};

const News = () => {
	return (
		<div className='flex bg-white h-screen'>
			<div className='flex flex-col basis-1/3 h-screen pt-5 pl-10 pr-10'>

				<BackButton path='/' title='На главную' />

				<h1 className='text-xl font-bold mt-10'>Журнал событий</h1>

				<div className='flex basis-full w-full md:overflow-hidden overflow-scroll md:hover:overflow-scroll flex-col pr-4'>

					{
						Array(10).fill(news).map((item) => (
							<>
								<button className='flex w-80 h-20 hover:border-primary border-white border-2 justify-start items-center text-black rounded-2xl py-3 my-3'><span className='font-bold text-sm ml-3 flex float-left'>{item.title}<span className='float-right text-sm font-medium text-[#C2C2C2] ml-14'>11:25</span></span></button>
								<hr />
							</>
						))
					}
					<button className='flex h-20 pt-3 pb-3 mt-5 hover:border-primary bg-gray-extra-light justify-center items-center text-black hover:text-black hover: border-2 hover: rounded-2xl w-80'><span className='font-bold'>Показать еще 10</span></button>
				</div>
			</div>
			<div className='flex flex-col basis-2/3 h-fit mt-6 bg-[#FCFCFC] rounded-2xl mr-10'>
				<h6 className='font-medium text-gray-medium-light text-xs ml-14 mt-16'>11:25</h6>
				<h1 className='font-bold text-2xl leading-7 text-black mt-5 ml-14'>Новый дизайн платформы</h1>
				<img src={news_pic} className='mt-5 w-4/5 ml-14' />
				<p className='text-black text-base font-normal leading-6 mt-4h w-4/5 ml-14 pb-10'>Станьте специалистом в сфере интернета вещей - Internet of things (IoT) - с нуля и создайте сеть умных гаджетов. Изучите язык C, механизмы отладки и программирования микроконтроллеров (STM32, Arduino). Вы получите опыт работы с технологиями Wi-Fi, Bluetooth и LoRa для построения современных встраиваемых систем</p>
			</div>

		</div>
	);
};

export default News;