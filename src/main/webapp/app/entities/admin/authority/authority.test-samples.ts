import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '1cbd7701-6bfc-4d41-a0e3-72a3d1d6f35f',
};

export const sampleWithPartialData: IAuthority = {
  name: '469eab1c-5859-4399-9300-eb0cae531b9f',
};

export const sampleWithFullData: IAuthority = {
  name: '8251554d-3f87-4fc7-b64b-19d77af46b3e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
