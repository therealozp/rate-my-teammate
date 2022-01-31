import React from 'react';
import { Box } from '@mui/system';
import { Typography, Avatar, Card } from '@mui/material';

const MemberCard = ({ imageSrc, name, contacts, role }) => {
	return (
		<Card
			sx={{
				width: '370px',
				display: 'flex',
				// alignItems: 'center',
				padding: '22px',
				margin: '8px',
				borderRadius: '8px',
			}}
			elevation={2}
		>
			<Avatar
				sx={{
					height: '100px',
					width: '100px',
					border: (theme) => `2px solid ${theme.palette.secondary.light}`,
				}}
				src={imageSrc}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					marginLeft: '25px',
				}}
			>
				<Box sx={{ marginBottom: '16px' }}>
					<Typography
						sx={{
							fontSize: 20,
							fontFamily: 'Quicksand',
							fontWeight: 'bold',
							marginBottom: '8px',
						}}
					>
						{name}
					</Typography>
					<Typography>{role}</Typography>
					<Typography>
						<strong>{contacts}</strong>
					</Typography>
				</Box>
			</Box>
		</Card>
	);
};

export default MemberCard;
