import { Item } from "./item";

/**
 * Based on https://servicodados.ibge.gov.br/api/v1/localidades/estados
 */
type IBGEUFResponse = {
  sigla: string;
}

/**
 * Based on https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
 */
type IBGECityResponse = {
  nome: string;
}

export type UfsInitials = IBGEUFResponse;
export type CitiesNames = IBGECityResponse;

export type Point = {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  image_url: string;
  latitude: number;
  longitude: number;
  uf: string;
  city: string;
}

export type PointDetailParams = {
  point_id: Point['id'];
}

export type PointData = {
  point: Point;
  items: Pick<Item, 'title'>[];
}

export type PointAddressParams = Pick<Point, 'city' | 'uf'>