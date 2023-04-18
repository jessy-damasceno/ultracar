import {
	Button,
	ButtonGroup,
	CssBaseline,
	Grid,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useZxing } from 'react-zxing';
import NewServiceAlert from './NewServiceAlert';
import type { IClient } from '../interfaces/IUser';

export default function QRCodeReader() {
	const [client, setClient] = useState<IClient | null>(null);
	const [paused, setPaused] = useState(false);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (client) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [client]);

	const resetReader = () => {
		setOpen(false);
		setPaused(false);
		setClient(null);
	};

	const {
		ref,
		torch: {
			on: torchOn,
			off: torchOff,
			isOn: isTorchOn,
			isAvailable: isTorchAvailable,
		},
	} = useZxing({
		paused,
		onResult(result) {
			setClient(JSON.parse(result.getText()));
		},
	});

	return (
		<>
			<NewServiceAlert
				open={open}
				setOpen={setOpen}
				resetReader={resetReader}
				client={client}
			/>
			<Grid
				container
				alignItems='center'
				justifyContent='center'
				flexDirection='column'
			>
				<CssBaseline />
				<video ref={ref} />
				<Typography
					variant='overline'
					component='h3'
					align='center'
					mt={4}
					mb={2}
				>
					Escaneie o QR Code do cliente para iniciar um novo serviço.
				</Typography>
				<ButtonGroup
					variant='contained'
					aria-label='outlined primary button group'
				>
					<Button
						type='button'
						color='primary'
						variant='contained'
						onClick={() => setPaused(!paused)}
					>
						{paused ? 'Resume' : 'Pause'}
					</Button>
					<Button
						type='button'
						color='primary'
						variant='contained'
						onClick={() => {
							if (isTorchOn) {
								torchOff();
							} else {
								torchOn();
							}
						}}
						disabled={!isTorchAvailable}
					>
						{isTorchOn ? 'Disable' : 'Enable'} torch
					</Button>
				</ButtonGroup>
			</Grid>
		</>
	);
}
