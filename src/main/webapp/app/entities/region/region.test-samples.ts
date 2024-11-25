import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 28525,
};

export const sampleWithPartialData: IRegion = {
  id: 4825,
};

export const sampleWithFullData: IRegion = {
  id: 20873,
  nom: 'geez acidly',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
