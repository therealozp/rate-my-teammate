import React from 'react';
import NavBar from './NavBar';

const HomeLayout = ({ children }) => {
	return (
		<div>
			<NavBar />
			<main>{children}</main>
		</div>
	);
};

export default HomeLayout;
