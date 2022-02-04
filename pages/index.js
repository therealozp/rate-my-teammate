import React from 'react';
import HomeLayout from '../src/layout/HomeLayout';
import ProfilePage from '../src/profile/ProfilePage';
import Deck from '../src/profile/Deck';

const index = ({ person }) => {
	console.log(person);
	return (
		<div>
			<ProfilePage />
		</div>
	);
};

export default index;
