import React from 'react';
import { Box } from '@mui/system';
import {
	Typography,
	Button,
	Avatar,
	Card,
	CardHeader,
	CardContent,
	IconButton,
} from '@mui/material';
import { Cancel } from '@mui/icons-material';

const InviteComponent = ({
	inviteExists,
	invite,
	team,
	isAlreadyMember,
	hasUser,
}) => {
	return (
		<Box>
			<Card raised sx={{ width: '95vw' }}>
				<CardHeader
					action={
						<IconButton onClick={() => router.push(HOME)}>
							<Cancel />
						</IconButton>
					}
				/>
				<CardContent
					sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<>
						{inviteExists ? (
							<Typography
								variant="h6"
								align="center"
								color="textSecondary"
								sx={{
									marginBottom: '16px',
								}}
							>
								<strong>{invite?.sender}</strong> invited you to join:
							</Typography>
						) : (
							'This Invite or Team does not exist'
						)}
					</>

					{inviteExists ? (
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-around',
								height: '30vh',
								alignItems: 'center',
							}}
						>
							<Typography
								variant="h5"
								align="center"
								sx={{
									fontWeight: 'bold',
									overflowWrap: 'break-word',
									width: '80%',
								}}
							>
								{team.name}
							</Typography>
							<Avatar
								src="/yoimiya profile.jpeg"
								sx={{ height: '150px', width: '150px' }}
							/>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									paddingTop: '10px',
								}}
							>
								<Typography variant="h6">
									{team.members.length}{' '}
									{team.members.length === 1 ? 'Member' : 'Members'}
								</Typography>
							</Box>
						</Box>
					) : null}
					{hasUser ? (
						<Box sx={{ paddingTop: '20px' }}>
							{inviteExists && !isAlreadyMember ? (
								<Button
									// onClick={jointeam}
									// disabled={isDisabled}
									variant="outlined"
									color="primary"
								>
									Accept Invite
								</Button>
							) : (
								<Button
									onClick={() => console.log('some function to accept invite')}
									variant="outlined"
									color="primary"
								>
									Back
								</Button>
							)}
						</Box>
					) : (
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Typography variant="h6" gutterBottom>
								{inviteExists ? 'You Are Not Logged in' : 'Sign In to Team Up'}
							</Typography>

							{/* <GoogleButton
                  type="light"
                  onClick={() => {
                    signIn("google");
                  }}
                /> */}
						</Box>
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default InviteComponent;
