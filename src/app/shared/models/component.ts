import {Module} from './module';
import {Mark} from './mark';

export interface Exam {
  id: number;
  name: string;
  coefficient: number;
  module: Module;
  pass_date: Date;
  marks: Array<Mark>;
  moduleId?: number;
  studentMark?: Mark;
}
