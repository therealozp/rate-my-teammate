import React, { useState } from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const HomeLayout = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	return (
		<div>
			<NavBar onClick={() => setDrawerOpen(true)} />
			{/* <RatingCard
				open={drawerOpen}
				handleClose={() => setDrawerOpen(false)}
				name="Yoimiya"
				imageURL="/yoimiya profile.jpeg"
			/> */}
			<main
				style={
					{
						// minWidth: '100vw',
						// minHeight: '100vh',
						// backgroundColor: '#F0F0C9',
					}
				}
			>
				{children}
			</main>
			<Sidebar open={drawerOpen} handleClose={() => setDrawerOpen(false)} />
		</div>
	);
};

export default HomeLayout;
