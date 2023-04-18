import IVehicle from "./IVehicle";

export interface IUser {
  id: number,
  email: string,
  password?: string,
  phoneNumber: string,
  firstName: string,
  lastName: string,
  type: 'admin' | 'client' | 'technical'
}

export interface IClient extends IUser {
  vehicles?: IVehicle[],
  type: 'client',
}

export interface ITechnical extends IUser {
  type: 'technical',
}