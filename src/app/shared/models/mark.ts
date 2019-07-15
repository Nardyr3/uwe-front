import {Student} from './student';
import {Component} from './component';

export interface Mark {
  id: string;
  student: Student;
  component: Component;
  value: number;
}
