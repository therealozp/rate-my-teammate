import React from 'react';
import { Box, styled } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Sep = styled('div')(({ theme }) => ({
	...theme.mixins.toolbar,
}));

const NavBar = () => {
	return (
		<>
			<AppBar
				sx={{
					wdith: '100vw',
					backgroundColor: (theme) => theme.palette.primary.light,
				}}
			>
				<Toolbar>
					<Box></Box>
				</Toolbar>
			</AppBar>
			<Sep />
		</>
	);
};

export default NavBar;
