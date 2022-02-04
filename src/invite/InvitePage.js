import React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, Avatar } from '@mui/material';
import InviteComponent from './InviteComponent';

const InvitePage = () => {
	const team = {
		name: 'Dacct',
		members: [
			'hanthang',
			'cuongchuck',
			'ozymandio',
			'Catou',
			'newboy12',
			'completeboy12',
		],
	};
	const invite = {
		sender: 'hanthang',
	};
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '80vh',
				// border: '2px solid red',
			}}
		>
			<InviteComponent
				team={team}
				invite={invite}
				inviteExists={true}
				hasUser
			/>
		</Box>
	);
};

export default InvitePage;
