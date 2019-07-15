import {Module} from './module';
import {Mark} from './mark';

export interface Component {
  id: string;
  coefficient: number;
  module: Module;
  passDate: Date;
  marks: Array<Mark>;
}
