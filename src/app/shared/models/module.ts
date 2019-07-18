import {Student} from './student';
import {Exam} from './component';
import {Mark} from './mark';

export interface Module {
  id: number;
  name: string;
  acronym: string;
  components: Array<Exam>;
  students: Array<Student>;

}
