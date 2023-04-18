import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import QrCode from '../components/QrCode';
import QrCodeReader from '../components/QrCodeReader';
import IService from '../interfaces/IService';
import { IClient } from '../interfaces/IUser';
import { client, users } from '../mocks/users';

const HomeTech: FC = () => {
  const { userId } = useParams();
  const id = +(userId as string) - 1; //deixar fixo porque estou usando mock (a ideia é ter um db pra gerenciar.)

	return (
		<>
			<Header name='Juninho' />
			{/* <QrCode client={ users[id] as IClient } /> */}
			<QrCodeReader />
		</>
	);
};

export default HomeTech;
