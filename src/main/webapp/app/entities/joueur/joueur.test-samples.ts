import dayjs from 'dayjs/esm';

import { IJoueur, NewJoueur } from './joueur.model';

export const sampleWithRequiredData: IJoueur = {
  id: 21512,
};

export const sampleWithPartialData: IJoueur = {
  id: 10371,
  motDePasse: 'but',
  estAdministrateur: true,
};

export const sampleWithFullData: IJoueur = {
  id: 11537,
  pseudo: 'coaxingly following',
  motDePasse: 'aha',
  dateInscription: dayjs('2024-11-25T00:47'),
  estAdministrateur: false,
};

export const sampleWithNewData: NewJoueur = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
