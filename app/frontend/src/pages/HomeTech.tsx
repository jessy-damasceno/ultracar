import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import QrCodeReader from '../components/QrCodeReader';

const HomeTech: FC = () => {
	return (
		<>
			<Header name='Ultracar' />
			<QrCodeReader />
		</>
	);
};

export default HomeTech;
