import { IClient } from "./IUser";

export default interface IVehicle {
  id?: number,
  brand: string,
  model: string,
  year: number,
  color: string,
  owner: IClient,
}