import React from 'react';
import HomeLayout from '../../src/layout/HomeLayout';
import TeamsPage from '../../src/teams/TeamsPage';

const teams = () => {
	return (
		<HomeLayout>
			<TeamsPage />
		</HomeLayout>
	);
};

export default teams;
