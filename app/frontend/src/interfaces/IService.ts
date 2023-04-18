import { IClient, ITechnical } from "./User";

export default interface IService {
  id: number,
  technical: ITechnical,
  client: IClient,
  status: 'progress' | 'finished',
  createdAt: Date,
  finishedAt?: Date,
  pieces: IPiece[]
}

interface IPiece {
  price: number,
  name: string,
}