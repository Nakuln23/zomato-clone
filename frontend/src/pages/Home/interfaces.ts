export interface getLocationParams {
  query?: string;
  lat?: any;
  lon?: number;
  count?: number;
}

export interface locationEntity {
  entity_type: string;
  entity_id: number;
  title: string;
  latitude: number;
  longitude: number;
  city_id: number;
  city_name: string;
  country_id: number;
  country_name: string;
}
