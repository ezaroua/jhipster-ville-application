import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 29804,
  login: 'Vat',
};

export const sampleWithPartialData: IUser = {
  id: 29437,
  login: 'l2B33D',
};

export const sampleWithFullData: IUser = {
  id: 3720,
  login: '8GchQ@DW',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
