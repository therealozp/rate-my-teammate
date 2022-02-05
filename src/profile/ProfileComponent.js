import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Typography, Stack, Chip } from '@mui/material';
import Dot from '@mui/icons-material/FiberManualRecord';

const ProfileComponent = ({ user }) => {
	return (
		<Box
			sx={{
				position: 'relative',
			}}
		>
			<Box
				sx={{
					borderRadius: '10px',
					overflow: 'hidden',
					height: '500px',
					width: '350px',
				}}
			>
				<Image
					src="/yoimiya profile.jpeg"
					height={500}
					width={350}
					objectFit="cover"
					alt="profilepic"
				/>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: '100%',
					backgroundColor: 'rgba(27, 27, 27, 0.5)',
					opacity: 1,
					transition: 'opacity 0.3s ease',
					'&:hover': {
						opacity: 0,
					},
					borderRadius: '10px',
					padding: '0 0 32px 32px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
				}}
			>
				<Box
					sx={{ display: 'flex', alignItems: 'baseline', marginBottom: '8px' }}
				>
					<Typography
						sx={{
							fontWeight: '700',
							color: '#FFFFFF',
							fontFamily: 'Quicksand',
							fontSize: 35,
						}}
					>
						{user?.name}
					</Typography>
					<Dot sx={{ fontSize: 15, margin: '0 8px', color: '#AAD75F' }} />
					<Typography
						sx={{
							color: '#ebebeb',
							fontFamily: 'Quicksand',
						}}
					>
						{user?.school}
					</Typography>
				</Box>

				<Stack direction="row" spacing={1} sx={{ marginBottom: '8px' }}>
					{user?.displaySubjects.map((d, i) => {
						return (
							<Chip
								label={d}
								key={`chip${i}`}
								variant="outlined"
								sx={{
									// backgroundColor: '#b1b1c6',
									color: '#FFFFFF',
								}}
							/>
						);
					})}
				</Stack>
			</Box>
		</Box>
	);
};

export default ProfileComponent;
