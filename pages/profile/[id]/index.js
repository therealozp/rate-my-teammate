import React from 'react';
import HomeLayout from '../../../src/layout/HomeLayout';
import MyProfile from '../../../src/profile/MyProfile';

const index = ({ user }) => {
	return (
		<HomeLayout>
			<MyProfile user={user} />
		</HomeLayout>
	);
};

export default index;

export const getServerSideProps = ({ res }) => {
	console.log('This is: ', res.user);
	return {
		props: {
			user: res.user,
		},
	};
};
