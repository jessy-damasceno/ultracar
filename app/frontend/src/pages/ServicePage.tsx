import { FC, useEffect, useState } from 'react';
import Header from '../components/Header';
import IService from '../interfaces/IService';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { readServices } from '../requests/services.requests';

const ServicesPage: FC = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    const data = readServices();
    setServices(data);
  }, [])

	return (
		<>
			<Header name='Juninho' />
			<Typography variant='h4' component='h1' align='center'>
				Serviços
			</Typography>
			<List>
				{services.map((service) => (
					<ListItem key={service.id}>
						<ListItemText primary={`ID do serviço: ${service.id}`} />
						<ListItemText
							primary={`Técnico responsável: ${service.technical.firstName} ${service.technical.lastName}`}
						/>
						<ListItemText
							primary={`Cliente: ${service.client.firstName} ${service.client.lastName}`}
						/>
						<ListItemText primary={`Status: ${service.status}`} />
						<ListItemText primary={`Data de criação: ${service.createdAt}`} />
						{service.finishedAt && (
							<ListItemText
								primary={`Data de finalização: ${service.finishedAt}`}
							/>
						)}
						<ListItemText
							primary={`Peças utilizadas: ${service.pieces
								.map(
									(piece) =>
										`${piece.name} ${piece.price.toLocaleString('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										})}`
								)
								.join(', ')}`}
						/>
						<ListItemText
							primary={`Veículo: ${service.vehicle.brand} ${service.vehicle.model} ${service.vehicle.year} ${service.vehicle.color}`}
						/>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default ServicesPage;
