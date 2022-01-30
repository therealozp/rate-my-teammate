import React, { useState } from 'react';
import RatingCard from '../rating/RatingCard';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const HomeLayout = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	return (
		<div>
			<NavBar onClick={() => setDrawerOpen(true)} />
			<Sidebar open={drawerOpen} handleClose={() => setDrawerOpen(false)} />
			{/* <RatingCard
				open={drawerOpen}
				handleClose={() => setDrawerOpen(false)}
				name="Yoimiya"
				imageURL="/yoimiya profile.jpeg"
			/> */}
			<main style={{ width: '100%', height: '100%' }}>{children}</main>
		</div>
	);
};

export default HomeLayout;
