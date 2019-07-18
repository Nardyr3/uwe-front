import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../../../shared/services/rest/student.service';
import {Student} from '../../../../shared/models/student';
import {Module} from '../../../../shared/models/module';
import {AppstateService} from '../../../../shared/services/appstate.service';
import {ModuleService} from '../../../../shared/services/rest/module.service';

@Component({
  selector: 'app-administration-student',
  templateUrl: './administration-student.component.html',
  styleUrls: ['./administration-student.component.scss']
})
export class AdministrationStudentComponent implements OnInit {
  private currentStudent: Student;
  private moduleSubscribed: Array<Module>;
  private modules: Array<Module>;
  private selectedModule: number;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private appState: AppstateService, private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.modules = this.appState.modules;
    const studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(Number(studentId)).subscribe(resolve => {
      console.log(resolve);
      this.currentStudent = resolve;
      this.moduleSubscribed = this.currentStudent.modules;
      console.log(this.modules);
      console.log(this.moduleSubscribed);
      let moduleSubscribedId = [];
      this.moduleSubscribed.forEach(module => {
        moduleSubscribedId.push(module.id);
      });
      this.modules = this.modules.filter((obj) => {
        return !moduleSubscribedId.includes(obj.id);
      });
    });
  }

  public refreshStudent() {
    this.modules = this.appState.modules;
    this.selectedModule = null;
    this.studentService.getStudentById(this.currentStudent.id).subscribe(resolve => {
      this.currentStudent = resolve;
      this.moduleSubscribed = this.currentStudent.modules;
      let moduleSubscribedId = [];
      this.moduleSubscribed.forEach(module => {
        moduleSubscribedId.push(module.id);
      });
      this.modules = this.modules.filter((obj) => {
        return !moduleSubscribedId.includes(obj.id);
      });
    });
  }

  public addModuleToStudent() {
    this.moduleService.addStudent(this.selectedModule, this.currentStudent.id).subscribe(resolve => {
      console.log('Student ajouté !');
      this.refreshStudent();
    }, error => {

    });
    console.log(this.selectedModule);
  }

  public removeStudentFromModule(moduleId) {
    this.moduleService.removeStudent(moduleId, this.currentStudent.id).subscribe(resolve => {
      console.log('Student removed !');
      this.refreshStudent();
    }, error => {

    });
  }

}
