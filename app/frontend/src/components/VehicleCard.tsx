import { Card, CardContent, Typography } from '@mui/material';
import type IVehicle from '../interfaces/IVehicle';

interface VehicleCardProps {
	vehicle: IVehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
	return (
		<Card sx={{ maxWidth: 400, m: 2 }}>
			<CardContent>
				<Typography variant='h5' component='h2' gutterBottom>
					{vehicle.brand} {vehicle.model} ({vehicle.year})
				</Typography>
				<Typography variant='body1' color='text.secondary' gutterBottom>
					Color: {vehicle.color}
				</Typography>
				<Typography variant='body1' color='text.secondary'>
					Owner: {vehicle.owner.firstName} {vehicle.owner.lastName} (
					{vehicle.owner.email})
				</Typography>
			</CardContent>
		</Card>
	);
};

export default VehicleCard;
