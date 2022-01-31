import React from 'react';
import { Drawer, Typography, IconButton, Chip, Button } from '@mui/material';
import { Box } from '@mui/system';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const ProfileSection = ({ bio, email, school, subjects }) => {
	const Flex = ({ children }) => {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
				{children}
			</Box>
		);
	};
	return (
		<Box>
			<Typography>{bio}</Typography>
			<Flex>
				<EmailOutlinedIcon sx={{ marginRight: '8px' }} />
				<Typography>{email}</Typography>
			</Flex>
			<Flex>
				<SchoolOutlinedIcon sx={{ marginRight: '8px' }} />
				<Typography>
					Currently studying at <strong>{school}</strong>
				</Typography>
			</Flex>
			<Flex>
				<MenuBookOutlinedIcon sx={{ marginRight: '8px' }} />
				<Typography>My interests</Typography>
			</Flex>
			<Box>
				{subjects.map((d, i) => {
					return (
						<Chip
							label={d}
							key={`chip${i}`}
							variant="outlined"
							sx={{
								border: '1px solid #407fc2',
								color: (theme) => theme.palette.secondary.main,
								margin: '4px',
							}}
						/>
					);
				})}
			</Box>
		</Box>
	);
};

const ProfileDrawer = ({ open, handleClose, name }) => {
	return (
		<>
			<Drawer
				anchor="bottom"
				PaperProps={{
					sx: {
						width: '95vw',
						borderTopLeftRadius: '20px',
						borderTopRightRadius: '20px',
						height: '50vh',
						backgroundColor: (theme) => theme.palette.themeGrey.main,
						marginLeft: '2.5vw',
						padding: 3,
					},
				}}
				ModalProps={{
					sx: {
						display: 'flex',
						justifyContent: 'center',
					},
				}}
				onClose={handleClose}
				open={open}
			>
				<Box
					sx={{
						backgroundColor: (theme) => theme.palette.themeGrey.main,
						borderTopLeftRadius: '20px',
						borderTopRightRadius: '20px',
						marginBottom: '16px',
					}}
				>
					<Typography
						sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', fontSize: 30 }}
					>
						{name}
					</Typography>
				</Box>
				<ProfileSection
					bio="A pyromaniac who loves studying explosions and fireworks!"
					school="RMIT University"
					email="yoimbestgirl@gmail.com"
					subjects={[
						'Computer Science',
						'Physics',
						'Discrete Maths',
						'Literature',
					]}
				/>
				<Button
					variant="outlined"
					sx={{
						margin: '32px',
					}}
				>
					Team up with me!
				</Button>
			</Drawer>
		</>
	);
};

const ProfileDrawerButton = ({ onClick }) => {
	return (
		<>
			<IconButton
				sx={{
					width: '50px',
					height: '50px',
					backgroundColor: (theme) => theme.palette.themeGrey.main,
					borderRadius: '50%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'fixed',
					bottom: 50,
					left: '45vw',
					boxShadow: '2px 2px 3px #c7c7c7',
				}}
				onClick={onClick}
			>
				<ExpandLessIcon color="primary" />
			</IconButton>
		</>
	);
};

export default ProfileDrawer;
export { ProfileDrawerButton };
