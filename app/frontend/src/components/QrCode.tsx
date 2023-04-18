import { FC } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { IClient } from '../interfaces/IUser';
import { Grid, Typography } from '@mui/material';

interface QrCodeProps {
	client: IClient;
}

const QrCode: FC<QrCodeProps> = ({ client }) => {
	console.log(client);

	return (
		<Grid
			container
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			sx={{ mt: 12, mb: 2 }}
		>
				<QRCodeCanvas includeMargin value={JSON.stringify(client)} size={256} />
				<Typography textAlign='center' component='h3' variant='caption' color='GrayText'>
					Apresente este QR Code para um técnico associado.
				</Typography>
		</Grid>
	);
};

export default QrCode;
