import IVehicle from "../interfaces/IVehicle";

export const vehicles: IVehicle[] = [
  {
    id: 1,
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "branco",
  owner: {
    id: 2,
    email: 'client@test.com',
    password: 'client123',
    phoneNumber: '11988888888',
    firstName: 'Toninho',
    lastName: 'Cabral',
    type: 'client',
  }
  },
  {
    id: 2,
  brand: "Ford",
  model: "Ka",
  year: 2009,
  color: "vermelho",
  owner: {
    id: 2,
    email: 'client@test.com',
    password: 'client123',
    phoneNumber: '11988888888',
    firstName: 'Toninho',
    lastName: 'Cabral',
    type: 'client',
  }
  }
]