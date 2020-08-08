import { Item } from './item';

export type Point = {
  id: number;
  name: string;
  email: string;
  image: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
}

export type CreatePointBodyParams = Omit<Point, 'id'> & { items: string; }

export type ListPointsQueryParams = {
  city: string;
  uf: string;
  items: Item['id'][];
}
