import { Button, ButtonGroup, CssBaseline, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useZxing } from 'react-zxing';

export default function QRCodeReader() {
	const [result, setResult] = useState('');
	const [paused, setPaused] = useState(false);

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
			setResult(result.getText());
		},
	});

	return (
		<Grid
			container
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
		>
			<CssBaseline />
			<video ref={ref} />
      <Typography variant="body1" component="p" align="center" mt={4} mb={2}>
				Last result: {result}
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
	);
}
