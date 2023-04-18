import { IClient, ITechnical } from "./IUser";
import IVehicle from "./IVehicle";

export default interface IService {
  id: number,
  technical: ITechnical,
  client: IClient,
  status: 'progress' | 'finished',
  createdAt: string,
  finishedAt?: string,
  pieces: IPiece[],
  vehicle: IVehicle,
}

export interface IPiece {
  price: number,
  name: string,
}