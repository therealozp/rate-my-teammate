import React from 'react';
import { Box } from '@mui/system';
import { Typography, Avatar, Card, CardActions, Button } from '@mui/material';
import { dateJoinedString } from '../consts';

const InviteCard = ({ imageSrc, sender, sentAt, name, members }) => {
	return (
		<>
			<Card
				sx={{
					width: '370px',

					// alignItems: 'center',
					padding: '22px 22px 10px 22px',
					margin: '16px 8px',
					borderRadius: '8px',
				}}
				elevation={2}
			>
				<Box sx={{ display: 'flex' }}>
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
									// fontWeight: 'bold',
									marginBottom: '8px',
								}}
							>
								<strong>{name}</strong>{' '}
								<span style={{ fontSize: 18 }}>by {sender}</span>
							</Typography>
							<Typography>{dateJoinedString(sentAt)}</Typography>
							<Typography sx={{ marginTop: '8px' }}>
								{members.length} {members.length === 1 ? 'Member' : 'Members'}
							</Typography>
						</Box>
					</Box>
				</Box>
				<CardActions>
					<Button variant="outlined" sx={{ marginLeft: 'auto' }}>
						See Invite
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default InviteCard;
