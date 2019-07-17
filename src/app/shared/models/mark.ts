import {Student} from './student';
import {Exam} from './component';

export interface Mark {
  id: string;
  student: Student;
  component: Exam;
  value: number;
}
