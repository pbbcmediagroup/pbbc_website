import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
	
	typography: createTypography(createPalette({}), {
		fontFamily: "'Philosopher', sans-serif"
	}),

	palette: {
		primary: {
			main: '#33b4ff',
		},
    	secondary: {
     	 	main: '#a2a6a8',
    	},
    	error: {
     		main: red.A400,
    	},
    	background: {
      		default: '#fff',
		},
	},
});

export default theme;
