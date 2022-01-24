import React from 'react';
import HomeLayout from '../src/layout/HomeLayout';
import ProfilePage from '../src/profile/ProfilePage';

const index = () => {
	return (
		<div>
			<HomeLayout>
				<ProfilePage />
			</HomeLayout>
		</div>
	);
};

export default index;
