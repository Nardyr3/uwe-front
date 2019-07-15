import {Component} from '@angular/core';
import {Student} from './student';

export interface Module {
  id: string;
  name: string;
  acronym: string;
  components: Array<Component>;
  students: Array<Student>;
}
