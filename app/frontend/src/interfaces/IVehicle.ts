import { IClient } from "./User";

export default interface IVehicle {
  id?: string,
  brand: string,
  model: string,
  year: number,
  color: string,
  owner: IClient,
}