import React from 'react';
import {Sidebar} from './index';
import {Outlet} from 'react-router-dom';

function Wrapper() {
	const activeMenu = true;

	return (
		<div className="flex relative dark:bg-main-dark-bg">
			{activeMenu ? (
				<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
					<Sidebar />
				</div>
			) : (
				<div className="w-0 dark:bg-secondary-dark-bg">
					<Sidebar />
				</div>
			)}

			<div
				className={
					activeMenu
						? 'dark:bg-main-dark-bg  bg-white min-h-screen md:ml-72 w-full  '
						: 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
				}
			>
				<Outlet />
			</div>
		</div>
	);
}

export default Wrapper;
