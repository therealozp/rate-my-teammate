import React, { useState } from 'react';
import { Box } from '@mui/system';
import {
	Rating,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	TextField,
	Typography,
	Avatar,
	Button,
} from '@mui/material';

const RatingCard = ({ open, handleClose, name, imageURL }) => {
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');
	return (
		<Dialog open={open} onClose={handleClose} maxWidth="none">
			<DialogTitle>
				<Typography
					sx={{
						fontSize: '2rem',
						fontFamily: 'Quicksand',
						fontWeight: 'bold',
					}}
				>
					Rating
				</Typography>
			</DialogTitle>
			<DialogContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					// height: '50vh',
					width: '80vw',
					padding: 3,
				}}
			>
				<Typography sx={{ fontSize: '1.2rem' }}>
					How was your experience with <strong>{name}</strong>?
				</Typography>
				<Avatar
					sx={{ height: '125px', width: '125px', margin: '16px' }}
					src={imageURL}
				/>
				<Rating
					defaultValue={5}
					precision={0.5}
					value={rating}
					size="large"
					onChange={(event, newRating) => setRating(newRating)}
					sx={{
						marginBottom: '16px',
						'& 	.MuiRating-icon': {
							fontSize: 40,
						},
					}}
				/>
				<TextField
					placeholder="Leave a comment..."
					value={comment}
					onChange={(event) => setComment(event.target.value)}
					variant="outlined"
					multiline
					sx={{ width: '90%' }}
				/>
			</DialogContent>
			<DialogActions>
				<Button color="secondary" variant="outlined">
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default RatingCard;
