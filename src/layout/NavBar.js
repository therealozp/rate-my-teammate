import React from 'react';
import { Box, styled } from '@mui/system';
import {
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	alpha,
	IconButton,
	Badge,
} from '@mui/material';
import { Menu, Search as SearchIcon, Notifications } from '@mui/icons-material';

const Sep = styled('div')(({ theme }) => ({
	...theme.mixins.toolbar,
}));

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: theme.spacing(1),
	width: '60%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const NavBar = ({ onClick }) => {
	return (
		<>
			<AppBar
				sx={{
					wdith: '100vw',
					backgroundColor: (theme) => theme.palette.primary.light,
				}}
			>
				<Toolbar>
					<IconButton onClick={onClick}>
						<Menu />
					</IconButton>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
					<IconButton
						size="large"
						aria-label="show 17 new notifications"
						color="inherit"
					>
						<Badge badgeContent={17} color="secondary">
							<Notifications />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Sep />
		</>
	);
};

export default NavBar;
