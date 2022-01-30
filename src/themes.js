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
			main: '#db4b1f',
		},
		secondary: {
			main: '#000054',
			light: '#7676A0',
		},
		themeYellow: {
			main: '#EDE476',
		},
		themeGrey: {
			main: '#EBEBEB',
		},
	},
});

export { theme };
