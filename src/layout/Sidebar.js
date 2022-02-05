import React from 'react';
import { Box } from '@mui/system';
import {
	Divider,
	Drawer,
	Typography,
	ListItem,
	ListItemText,
	ListItemIcon,
} from '@mui/material';
import Link from 'next/link';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import ExploreIcon from '@mui/icons-material/Explore';
import CelebrationIcon from '@mui/icons-material/Celebration';

const SidebarComp = ({ label, href, customIcon }) => {
	return (
		<Link href={href} passHref>
			<ListItem
				button
				// onClick={handleClickcourse}
				// className={clsx(classes.listcolor, classes.hide)}
				sx={{ height: '70px', padding: 3 }}
			>
				<ListItemIcon sx={{ color: 'whitesmoke' }}>{customIcon}</ListItemIcon>
				<Typography sx={{ fontSize: 23 }}>{label}</Typography>
				<ListItemText />
				{/* {courseExpanded ? <ExpandLess /> : <ExpandMore />} */}
			</ListItem>
		</Link>
	);
};

const Sidebar = ({ open, handleClose }) => {
	return (
		<Drawer
			open={open}
			onClose={handleClose}
			PaperProps={{
				sx: {
					width: '320px',
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(15px)',
					color: 'white',
				},
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '60px',
					padding: '0 16px',
					margin: '16px 0',
				}}
			>
				<Typography
					sx={{
						fontSize: '3rem',
						fontFamily: 'Quicksand',
						fontWeight: 'bold',
					}}
				>
					Bibi
				</Typography>
			</Box>
			<Divider />
			<SidebarComp
				label="Explore"
				href="/"
				customIcon={<ExploreIcon fontSize="large" />}
			/>
			<SidebarComp
				label="My Profile"
				href="/profile/ozymandio"
				customIcon={<PersonIcon fontSize="large" />}
			/>
			<SidebarComp
				label="Teams"
				href="/teams"
				customIcon={<GroupsIcon fontSize="large" />}
			/>
			<SidebarComp
				label="Invites"
				href="/invites"
				customIcon={<CelebrationIcon fontSize="large" />}
			/>
		</Drawer>
	);
};

export default Sidebar;
