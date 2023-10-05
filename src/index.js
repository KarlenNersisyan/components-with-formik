import React from 'react';
import ReactDOM from 'react-dom/client';

//* Helpers
import { ThemeProvider } from 'styled-components';

//* Components
import App from './App';

//* Styles
import Variables from './styles/variables';
import Typography from './styles/typography';
import HelperClass from './styles/helperClass';
import colors from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={colors}>
		<Variables />
		<HelperClass />
		<Typography />
		<App />
	</ThemeProvider>
);
