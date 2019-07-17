import {Mark} from './mark';
import {Module} from './module';

export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  marks: Array<Mark>;
  modules: Array<Module>;
  roles: Array<string>;
}
