import { Time } from '@angular/common';

export interface IKursus {
  id?: number;
  name: string;
  description: string;
  startDate: Date;
  startTime: string;
  price: number;
  imageUrl: string;
  location?: ILocation;
}

export interface ILocation {
  address: string;
  city: string;
  country: string;
}
