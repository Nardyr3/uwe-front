import {Mark} from './mark';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  marks: Array<Mark>;
}
