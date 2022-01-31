import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		// fontFamily: ["Josefin Sans", "cursive"].join(","),
		fontFamily: [
			'IBM Plex Sans Thai Looped',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	palette: {
		primary: {
			pink: '#FFCAD4',
			// main: '#E60028',
			main: '#D74E09',
			blood: '#6E0E0A',
		},
		secondary: {
			main: '#124E78',
		},
		themeYellow: {
			main: '#F2BB05',
		},
		themeGrey: {
			main: '#EBEBEB',
		},
		themeBackground: {
			main: '#F0F0C9',
		},
	},
});

export { theme };
