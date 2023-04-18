import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import HomeClient from './pages/HomeClient';
import HomeTech from './pages/HomeTech';
import ServicesPage from './pages/ServicePage';

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
	{
		path: '/home/:userId',
		element: <HomeClient />,
	},
	{
		path: '/home/tech/:userId',
		element: <HomeTech />,
	},
	{
		path: '/services',
		element: <ServicesPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
