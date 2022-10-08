import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';

import Modal from '../components/Modal/Modal';
import {RiComputerLine, RiProjector2Fill, RiQuestionFill, RiUserSettingsLine} from 'react-icons/ri';
import {GoChecklist} from 'react-icons/go';
import {AiFillNotification} from 'react-icons/ai';
import {IoMdNotifications} from 'react-icons/io';
import {TbLogout} from 'react-icons/tb';
import {FaBook, FaUniversity, FaUserGraduate, FaUsers} from 'react-icons/fa';
import {IoEllipsisVertical} from 'react-icons/io5';
import {BsFillCameraFill} from 'react-icons/bs';

/* Images */
import logo from '../assets/logo.png';
import User from '../assets/images/user.png';

const links = [
	{
		title: 'Проекты',
		path: '/projects',
		icon: <RiProjector2Fill />,
		role: 'teacher'
	},
	{
		title: 'Тесты',
		path: '/tests',
		icon: <GoChecklist />,
		role: 'teacher'
	},



	{
		title: 'Школы',
		path: '/schools',
		icon: <FaUniversity />,
		role: 'admin'
	},
	{
		title: 'Учебные планы',
		path: '/curriculum',
		icon: <FaBook />,
		role: 'admin'
	},
	{
		title: 'Проекты',
		path: '/projects',
		icon: <RiProjector2Fill />,
		role: 'admin'
	},
	{
		title: 'Тесты',
		path: '/tests',
		icon: <GoChecklist />,
		role: 'admin'
	},
	{
		title: 'Ученики',
		path: '/students',
		icon: <FaUserGraduate />,
		role: 'admin'
	},




	{
		title: 'Учителя',
		path: '/teachers',
		icon: <FaUsers />,
		role: 'school_admin'
	},
	{
		title: 'Классы',
		path: '/classes',
		icon: <RiComputerLine />,
		role: 'school_admin'
	},
	{
		title: 'Ученики',
		path: '/students',
		icon: <FaUserGraduate />,
		role: 'school_admin'
	},

	{
		title: 'Журнал событий',
		path: '/news',
		icon: <AiFillNotification />,
		role: 'all'
	},
	{
		title: 'Помощь',
		path: '/help',
		icon: <RiQuestionFill />,
		role: 'all'
	}
];

const classes = [
	{
		title: '9В',
		path: '/9b'
	},
	{
		title: '10А',
		path: '/10a'
	},
	{
		title: '11В',
		path: '/11b'
	}
];

const notifications = [
	{
		student: 'Талдыбаев Жанадил',
		img: User,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	},
	{
		student: 'Талдыбаев Жанадил',
		img: User,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	},
	{
		student: 'Талдыбаев Жанадил',
		img: User,
		path: '/',
		class: '9А',
		message: 'сдал домашнее задание по уроку:',
		topic: 'Циклы. For'
	}
];

const Sidebar = () => {
	let navigate = useNavigate();

	const activeMenu = true;

	const user = JSON.parse(localStorage.getItem('user'));
	const [userName, setUserName] = useState(user.Name);
	const [userSurname, setUserSurname] = useState(user.Surname);
	const [userMail, setUserMail] = useState(user.Email);

	const [modal, setModal] = useState(false);

	const activeLink = 'flex items-center gap-5 pl-6 pt-3 pb-2.5 rounded-lg text-black font-bold text-md m-2';
	const normalLink = 'flex items-center gap-5 pl-6 pt-3 pb-2.5 rounded-lg text-md text-gray-medium-light font-bold dark:text-gray-200 dark:hover:text-black hover:bg-primary-bg m-2';

	const classActiveLink = 'flex items-center gap-5 mt-2 pl-4 pt-3 pb-2.5 rounded-2xl text-primary border-2 border-primary font-bold';
	const classNormalLink = 'flex w items-center gap-5 mt-2 pl-4 pt-3 pb-3.5 rounded-2xl text-black font-bold bg-primary-bg';

	const read = 'flex w-80 hover:border-primary hover:bg-white hover:text-black hover:border-1 border-1 border-white justify-start items-center text-black rounded-2xl pl-3 pt-3 pb-3 mt-5';
	// const unread = 'flex w-80 hover: border-primary bg-primary-bg hover:text-black hover:border-1 border-l-bg-primary border-l-4 justify-start items-center text-black rounded-2xl pl-3 pt-3 pb-3 mt-5';
	// const open = 'flex w-80 border-primary hover:bg-white hover:text-black border-1 justify-start items-center text-black rounded-2xl pl-3 pt-3 pb-3 mt-5';	


	const onLogoutButtonClick = () => {
		localStorage.clear();
		navigate('/login');
	};

	return (
		<div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>

			{
				activeMenu && (<div className='flex h-screen flex-col justify-between items-start'>
					<div className='w-full'>
						<div className='flex justify-between items-center'>
							<Link to={user.Role == 'parent' ? '/parents/' : user.Role == 'admin' ? '/admin/' : user.Role == 'school_admin' ? '/school' : '/'} className='items-center gap-3 ml-6 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
								<img src={logo} />
							</Link>

							<button onClick={() => setModal('notifications')}><IoMdNotifications className='mr-6 text-xl text-gray-medium-light' /> </button>

						</div>

						{

							user?.Role == 'teacher' &&
							<>
								<div className="flex justify-between items-center mt-10 ml-6 mr-6">
									<h3 className='font-bold'>Классы</h3>
									<Link to='/classes' className='text-primary font-bold text-sm'>Создать</Link>
								</div>

								<div className='mt-3 ml-6 mr-6'>
									{
										classes.map((item) => (
											<NavLink
												to={`/class${item.path}`}
												key={item.title}
												onClick={() => { }}
												className={({ isActive }) => isActive ? classActiveLink : classNormalLink}
											>
												<span>{item.title}</span>
											</NavLink>
										))
									}
								</div>

								<hr className='mt-5 ml-6 mr-6' />
							</>
						}

						<div className='mt-5'>
							{
								links.map(item => {
									if (item.role == user?.Role || item.role == 'all') {
										return (
											<NavLink
												to={item.path}
												key={item.path}
												className={({ isActive }) => isActive ? activeLink : normalLink}
											>
												{item.icon}
												<span>{item.title}</span>
											</NavLink>);
									}
								})}

						</div>

					</div>

					<div className="flex flex-col w-full items-center mb-10 pr-3">
						{/* <FaUserCircle className='text-6xl text-primary' /> */}
						<img src={User} className='w-14 h-14' />
						<h4 className='mt-3 text-sm font-medium'>{`${user?.Name} ${user?.Surname}`}</h4>
						<p className='text-gray-medium-light text-xs'>{user?.Email}</p>
						<div className='flex mt-2'>
							<RiUserSettingsLine className='text-gray-medium-light mr-4 text-lg cursor-pointer' onClick={() => setModal('userSettings')}/>
							<button onClick={() => onLogoutButtonClick()}>
								<TbLogout className='text-gray-medium-light text-lg cursor-pointer' />
							</button>
						</div>
					</div>
				</div>)
			}
			<Modal show={modal == 'notifications'} onClose={() => setModal('')}>
				<div className='flex flex-col basis-full items-center p-10'>
					<div className='flex'>
						<h2 className='text-xl text-black font-bold flex float-left'>Уведомления</h2>
						<IoEllipsisVertical className='flex float-right ml-40 mt-1.5 text-lg text-gray-medium-light' />
					</div>
					<div className='flex flex-col'>
						{
							notifications.map((item, index) => (
								<button key={index} onClick={() => setModal('')}>
									<Link key={index} className={read} to={'/notifications'}>
										<div className='flex flex-col'>
											<img src={item.img} className='w-12 h-12 mb-12' />
										</div>
										<div className='flex flex-col'>
											<span className='font-bold text-sm ml-3 flex float-left'>{item.student}<span className='flex float-right text-sm font-medium text-[#C2C2C2] ml-10'>11:25</span></span>
											<p className='text-xs font-medium text-[#C2C2C2] ml-3 flex float-left'>ученик из {item.class}</p>
											<p className='text-sm font-medium text-black ml-3 mt-3 flex float-left'>{item.message}</p>
											<Link to='/login'> <p className='text-sm font-medium text-primary ml-3 mt-1 flex float-left'>{item.topic}</p> </Link>
										</div>
									</Link>
								</button>
							))
						}
						<button onClick={() => setModal('')}>
							<Link className='flex mt-4 justify-center items-center' to='/notifications'><span className='font-bold text-[#C2C2C2] hover:text-black'>Показать все уведомления</span></Link>
						</button>
					</div>
				</div>
			</Modal>

			<Modal show={modal == 'userSettings'} onClose={() => setModal('')}>
				<div className='flex flex-col items-start justify-start basis-full p-10'>
					<h2 className='text-xl text-black font-bold flex float-left'>Редактирование профиля</h2>
					<div className='flex items-center justify-start mt-4'>
						<img src={User} className='w-16 h-16' />
						<div className='ml-4'>
							<span>Роль: {user.Role}</span>
							<button className='flex items-center px-4 py-2 mt-2 bg-gray-extra-light font-bold rounded-xl'><BsFillCameraFill className='mr-3'/>Изменить фото</button>
						</div>
					</div>

					<div className='flex justify-between items-center w-full mt-8'>
						<div className='flex flex-col w-full'>
							<h4 className='text-sm font-medium'>Имя</h4>
							<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Айдар' value={userName} onChange={(e) => setUserName(e.target.value)} />
						</div>
						<div className='flex flex-col w-full ml-6'>
							<h4 className='text-sm font-medium'>Фамилия</h4>
							<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='Айдарбеков' value={userSurname} onChange={(e) => setUserSurname(e.target.value)}/>
						</div>
					</div>


					<div className='flex flex-col w-full mt-6'>
						<h4 className='text-sm font-medium'>Электронная почта</h4>
						<input type="text" className='mt-1 border-2 border-gray-light focus:outline-none focus:border-primary rounded-xl px-2 py-2 w-full' placeholder='example@gmail.com' value={userMail} onChange={(e) => setUserMail(e.target.value)}/>
					</div>

					<div className='flex justify-between w-full items-center mt-6'>
						<button className='h-12 w-full justify-center items-center bg-gray-extra-light rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-black font-bold'>Отменить</span>
						</button>

						<button className='h-12 w-full justify-center items-center bg-primary ml-5 rounded-xl' onClick={() => setModal('')}>
							<span className='text-base text-white font-bold'>Добавить</span>
						</button>
					</div>
				</div>
			</Modal>
		</div >
	);
};

export default Sidebar;
