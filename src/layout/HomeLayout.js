import React, { useState } from 'react';
import RatingCard from '../rating/RatingCard';
import NavBar from './NavBar';

const HomeLayout = ({ children }) => {
	return (
		<div>
			<NavBar />

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
