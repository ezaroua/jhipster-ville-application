import { IVille, NewVille } from './ville.model';

export const sampleWithRequiredData: IVille = {
  id: 2203,
};

export const sampleWithPartialData: IVille = {
  id: 30408,
};

export const sampleWithFullData: IVille = {
  id: 20276,
  nom: 'instead',
  codePostal: 'phew wherever stump',
  nbHabitants: 12393,
};

export const sampleWithNewData: NewVille = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
