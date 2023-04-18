import { FC } from 'react';
import Header from '../components/Header';
import QrCode from '../components/QrCode';
import { client } from '../mocks/users';

const HomeClient: FC = () => {
	return (
		<>
			<Header name='Juninho' />
			<QrCode client={ client } />
		</>
	);
};

export default HomeClient;
