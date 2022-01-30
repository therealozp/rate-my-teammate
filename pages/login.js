import React from 'react';
import LoginPage from '../src/authentication/LoginPage';
import HoemLayout from '../src/layout/HomeLayout';
const login = () => {
	return (
		<HoemLayout>
			<LoginPage />
		</HoemLayout>
	);
};

export default login;
