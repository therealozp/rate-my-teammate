import React from 'react';
import { Box } from '@mui/system';
import { Typography, Avatar, Card, CardActions, Button } from '@mui/material';

const TeamCard = ({ imageSrc, name, timePeriod, desc, link }) => {
	return (
		<>
			<Card
				sx={{
					width: '370px',

					// alignItems: 'center',
					padding: '22px 22px 10px 22px',
					margin: '8px',
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
									fontWeight: 'bold',
									marginBottom: '8px',
								}}
							>
								{name}
							</Typography>
							<Typography>
								<strong>{timePeriod}</strong>
							</Typography>
							<Typography>{desc}</Typography>
						</Box>
					</Box>
				</Box>
				<CardActions>
					<Button variant="outlined" sx={{ marginLeft: 'auto' }}>
						Take me there!
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default TeamCard;
