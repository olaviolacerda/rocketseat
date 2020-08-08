import { LatLng } from "leaflet";

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

export type MapMarkerPosition = Pick<LatLng, 'lat' | 'lng'>;

export interface CurrentLocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  }
}