import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';

const theme = createTheme({
	palette: {
		primary: {
			main: '#0693e3',
		},
	},
	components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
