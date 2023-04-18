import { IClient, IUser } from "../interfaces/IUser";
import { vehicles } from "./vehicles";

export const users: IUser[] = [
  {
    id: 1,
    email: 'admin@test.com',
    password: 'admin123',
    phoneNumber: '11999999999',
    firstName: 'Alceu',
    lastName: 'Valença',
    type: 'admin',
  },
  {
    id: 2,
    email: 'client@test.com',
    password: 'client123',
    phoneNumber: '11988888888',
    firstName: 'Toninho',
    lastName: 'Cabral',
    type: 'client',
  },
  {
    id: 3,
    email: 'tech@test.com',
    password: 'tech123',
    phoneNumber: '11977777777',
    firstName: 'Tech',
    lastName: 'Test',
    type: 'technical',
  },
];

const toninho = users[1];

export const client: IClient = {
  ...toninho as IClient,
  vehicles: [...vehicles],
}