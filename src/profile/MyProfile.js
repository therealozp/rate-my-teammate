import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import ProfileComponent from './ProfileComponent';
import ProfileDrawer, { ProfileDrawerButton } from './ProfileDrawer';

const MyProfile = ({ user }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '80vh',
				flexDirection: 'column',
			}}
		>
			<Box sx={{ alignSelf: 'flex-start', margin: '32px 0 16px 16px' }}>
				<Typography sx={{ fontSize: 30 }}>Your Profile</Typography>
				<Typography variant="subtitle1">See how you look to others!</Typography>
			</Box>
			<Box>
				<ProfileComponent user={user} />
			</Box>
			<ProfileDrawer
				open={drawerOpen}
				handleClose={() => setDrawerOpen(false)}
				// name={activeList[index].name}
				user={user}
				isProfile
			/>
			<ProfileDrawerButton onClick={() => setDrawerOpen(!drawerOpen)} />
			<Box sx={{ height: '13vh' }} />
		</Box>
	);
};

export default MyProfile;
