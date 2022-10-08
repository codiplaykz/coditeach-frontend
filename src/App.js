import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import {ProtectedRoute, Wrapper} from './components';
import {
	AdminHome,
	Class,
	Classes,
	CreateClass,
	CreateCurriculum,
	CreateLesson,
	CreateProject,
	CreateTest,
	Help,
	Home,
	Lessons,
	Login,
	News,
	NotFound,
	Notifications,
	ParentsHome,
	Projects,
	SchoolHome,
	Schools,
	Students,
	Teachers,
	Tests
} from './pages';

import './App.css';
import 'antd/dist/antd.min.css';

function App () {
	const currentMode = 'Light';
	const user = localStorage.getItem('user');

	// let homeComponent = user?.Role == 'admin' ? <AdminHome /> : user?.Role == 'parent' ? <ParentsHome /> : <Home />;
	// console.log('userRole: ', user.Role);

	return (
		<div className={currentMode === 'Dark' ? 'dark' : ''}>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route element={<ProtectedRoute isAllowed={user === null ? false : true} />}>
						<Route element={<Wrapper />}>
							<Route path='/' element={<Home />} />
							<Route path='/classes' element={<Classes />} />
							<Route path='/class/:id' element={<Class />} />
							<Route path='/create-class' element={<CreateClass />} />
							<Route path='/projects'>
								<Route index element={<Projects />} />
								<Route path='create' element={<CreateProject />} />
							</Route>
							<Route path='/tests'>
								<Route index element={<Tests />} />
								<Route path='create' element={<CreateTest />} />
							</Route>
							<Route path='/news' element={<News />} />
							<Route path='/help' element={<Help />} />
							<Route path='/notifications' element={<Notifications />} />
							<Route path='/schools' element={<Schools />} />
							<Route path='/curriculum'>
								<Route index element={<Lessons />} />
								<Route path='create' element={<CreateCurriculum />} />
							</Route>
							<Route path='/create-lesson' element={<CreateLesson />} />
							<Route path='/students' element={<Students />} />
							<Route path='/teachers' element={<Teachers />} />
							<Route path='/parents'>
								<Route index element={<ParentsHome />} />
							</Route>
							<Route path='/admin'>
								<Route index element={<AdminHome />} />
							</Route>
							<Route path='/school'>
								<Route index element={<SchoolHome />} />
							</Route>
						</Route>
					</Route>
					<Route path='/*' element={<NotFound/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
