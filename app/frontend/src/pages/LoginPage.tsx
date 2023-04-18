import {
	Grid,
	CssBaseline,
	Paper,
	Box,
	Avatar,
	Typography,
	TextField,
	Button,
} from '@mui/material';
import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleClick = () => {
		console.log(email, password);
	};

	return (
		<Grid
			alignItems='center'
			justifyContent='center'
			container
			sx={{ height: '100vh' }}
		>
			<CssBaseline />
			<Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: 'auto',
						}}
					>
					<img src="/ultracar_logo.png" alt="Logo da Ultracar" width="200" />
					<Box component='form' noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							name='email'
							value={email}
							onChange={handleEmailChange}
							label='E-mail'
							id='email'
							placeholder='Digite o seu e-mail'
							autoComplete='email'
							helperText='Insira um e-mail válido'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							value={password}
							onChange={handlePasswordChange}
							label='Senha'
							type='password'
							id='password'
							placeholder='Digite a sua senha'
						/>
						<Button
							type='button'
							color='primary'
							fullWidth
							variant='contained'
							onClick={handleClick}
							sx={{ mt: 3, mb: 2 }}
						>
							Entrar
						</Button>
						<Grid container>
							<Grid item xs>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
