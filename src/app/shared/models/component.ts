import {Module} from './module';
import {Mark} from './mark';

export interface Exam {
  id?: string;
  coefficient: number;
  module: Module;
  pass_date: Date;
  marks: Array<Mark>;
  moduleId?: number;
}
