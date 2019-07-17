import {Component, Input, OnInit, Query, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppstateService} from '../../../../shared/services/appstate.service';
import { NbPopoverDirective } from '@nebular/theme';
import {ModuleService} from '../../../../shared/services/rest/module.service';
import {Router} from '@angular/router';
import {Module} from '../../../../shared/models/module';
import {Exam} from '../../../../shared/models/component';
import {ComponentService} from '../../../../shared/services/rest/component.service';

export function markValidator(control: FormControl) {
  const mark = control.value;
  return (mark >= 0 && mark <= 100 ? null : {invalidMark: true});
}

@Component({
  selector: 'app-add-grade-dialog',
  templateUrl: './add-grade-dialog.component.html',
  styleUrls: ['./add-grade-dialog.component.scss']
})
export class AddGradeDialogComponent implements OnInit {
  @Input() title: string;
  @ViewChildren(NbPopoverDirective) popovers: QueryList<NbPopoverDirective>;
  private modules: Array<Module>;
  private components: Array<Exam>;

  /**
   * Form soumis ?
   */
  public submitted = false;

  /**
   * Formulaire de connexion
   */
  public loginForm: FormGroup;

  /**
   * Connexion en cours
   */
  public loading: boolean;
  constructor(private moduleService: ModuleService, private componentService: ComponentService,
              protected ref: NbDialogRef<AddGradeDialogComponent>, private formBuilder: FormBuilder, protected appState: AppstateService) {
  }

  /**
   * Initialise le formulaire
   */
  public ngOnInit(): void {
    this.moduleService.getModules().subscribe(res => {
      console.log(res);
      this.modules = res;
    });
    this.loading = false;
    this.loginForm = this.formBuilder.group({
      name: [''],
      mark: ['', [Validators.required, markValidator]],
      module: ['', Validators.required],
      component: ['', Validators.required],
    });

  }

  /**
   *  Fonction qui renvoie le formulaire
   */
  public get f(): any {
    return this.loginForm.controls;
  }

  /**
   * Submit du formulaire de connexion
   */
  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid ) {
      console.log(this.popovers);
      if (this.loginForm.controls.mark.errors && this.loginForm.controls.mark.errors.required) {
        this.open(0);
      }
      if (this.loginForm.controls.module.errors && this.loginForm.controls.module.errors.required) {
        this.open(1);
      }
      if (this.loginForm.controls.component.errors && this.loginForm.controls.component.errors.required) {
        this.open(2);
      }
      return;
    }
    this.loading = true;
    this.ref.close();
  }
  private dismiss() {
    this.ref.close();
  }

  open(popover: number) {
    if (this.popovers.toArray()[popover]) {
      this.popovers.toArray()[popover].show();
    }
  }

  close(popover: number) {
    if (this.popovers.toArray()[popover]) {
      this.popovers.toArray()[popover].hide();
    }
  }
}
