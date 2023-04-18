import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import QrCode from '../components/QrCode';
import QrCodeReader from '../components/QrCodeReader';
import { IClient } from '../interfaces/IUser';
import { client, users } from '../mocks/users';

const HomeClient: FC = () => {
  const { userId } = useParams();
  const id = +(userId as string) - 1;
  console.log('id', userId);
	return (
		<>
			<Header name='Juninho' />
			{/* <QrCode client={ users[id] as IClient } /> */}
			<QrCodeReader />
		</>
	);
};

export default HomeClient;
