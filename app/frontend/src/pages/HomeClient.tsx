import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import QrCode from '../components/QrCode';
import { IClient } from '../interfaces/IUser';
import { client, users } from '../mocks/users';

const HomeClient: FC = () => {
  const { userId } = useParams();
  const id = +(userId as string) - 1; //deixar fixo porque estou usando mock (a ideia é ter um db pra gerenciar.)
  console.log('id', userId);
	return (
		<>
			<Header name='Juninho' />
			<QrCode client={ client } />
		</>
	);
};

export default HomeClient;
