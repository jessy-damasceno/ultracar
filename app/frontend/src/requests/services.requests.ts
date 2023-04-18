import IService, { IPiece } from "../interfaces/IService";
import { IClient, ITechnical } from "../interfaces/IUser";
import IVehicle from "../interfaces/IVehicle";
const SERVICES_KEY = 'services';

const dateNow = () => new Date().toLocaleString('pt-BR', {
  timeZone: 'America/Sao_Paulo',
});

export const readServices = (): IService[] => {
  const services = localStorage.getItem(SERVICES_KEY);
  if (services) return JSON.parse(services);
  
  return [];
};

export const createNewService = (client: IClient, technical: ITechnical, vehicle: IVehicle): IService => {
  const newService: IService = {
    id: readServices().length + 1,
    client,
    technical,
    createdAt: dateNow(),
    status: "progress",
    pieces: [],
    vehicle,
  }

  return newService;
}

export const saveServices = (services: IService[]): void => localStorage
  .setItem(SERVICES_KEY, JSON.stringify(services));

export const addNewService = (client: IClient, technical: ITechnical, vehicle: IVehicle, pieces: IPiece[] = []): void => {
  const services = readServices();

  const newService = createNewService(client, technical, vehicle);
  
  if (pieces.length) {
    newService.pieces.push(...pieces);
  }
  saveServices([...services, newService]);
};

export const removeService = (service: IService): void => {
  const services = readServices();
  saveServices(services.filter((s) => s.id !== service.id));
};

export const updateService = (service: IService): void => {
  const services = readServices();
  const updatedServices = services.map((s) => {
    if (s.id === service.id) return service;
    return s;
  });

  saveServices(updatedServices);
}

export const finishService = (service: IService): void => {
  const updatedService: IService = {
    ...service,
    status: "finished",
    finishedAt: dateNow(),
  }

  updateService(updatedService);
}