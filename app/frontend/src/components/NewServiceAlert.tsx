import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IClient, ITechnical } from '../interfaces/IUser';
import VehicleCard from './VehicleCard';
import {
	createTheme,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import IVehicle from '../interfaces/IVehicle';
import { addNewService } from '../requests/services.requests';
import { users } from '../mocks/users';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

interface IProps {
	open: boolean;
	setOpen: Function;
	resetReader?: Function;
	client: IClient | null;
}

const NewServiceAlert: FC<IProps> = ({
	open,
	setOpen,
	resetReader,
	client,
}) => {
	const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(
		null
	);
	const [car, setCar] = useState<IVehicle | null>(null);
	const handleClose = () => {
		resetReader();
	};

	const handleConfirm = () => {
		if (selectedVehicleId) {
			const selectedVehicle = client?.vehicles.find(
				(vehicle) => vehicle.id === selectedVehicleId
			);
			setCar(selectedVehicle);
			addNewService(client, users[2] as ITechnical, selectedVehicle);
		}
		handleClose();
	};

	console.log(car);
	const date = new Date().toLocaleString('pt-BR', {
		timeZone: 'America/Sao_Paulo',
	});
	console.log(date);

	return (
		<ThemeProvider theme={darkTheme}>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{'Escolha um veículo para iniciar o serviço.'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						<FormControl component='fieldset'>
							<FormLabel component='legend'>Veículos disponíveis</FormLabel>
							<RadioGroup
								name='vehicle-selection'
								value={selectedVehicleId?.toString() || ''}
								onChange={(event) =>
									setSelectedVehicleId(parseInt(event.target.value))
								}
							>
								{client &&
									client.vehicles.map((vehicle, i) => (
										<FormControlLabel
											key={i}
											value={vehicle.id}
											control={<Radio />}
											label={<VehicleCard vehicle={vehicle} />}
										/>
									))}
							</RadioGroup>
						</FormControl>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button color='error' onClick={handleClose}>
						Cancelar
					</Button>
					<Button color='primary' onClick={handleConfirm} autoFocus>
						Confirmar sem peças
					</Button>
					<Button color='primary' onClick={handleClose}>
						Adicionar peças
					</Button>
				</DialogActions>
			</Dialog>
		</ThemeProvider>
	);
};

export default NewServiceAlert;
