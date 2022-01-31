import React, { useState } from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const HomeLayout = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	return (
		<div style={{ width: '100%', height: '100%', backgroundColor: '#F0F0C9' }}>
			<NavBar onClick={() => setDrawerOpen(true)} />
			<Sidebar open={drawerOpen} handleClose={() => setDrawerOpen(false)} />
			{/* <RatingCard
				open={drawerOpen}
				handleClose={() => setDrawerOpen(false)}
				name="Yoimiya"
				imageURL="/yoimiya profile.jpeg"
			/> */}
			<main>{children}</main>
		</div>
	);
};

export default HomeLayout;
