import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppstateService} from '../../shared/services/appstate.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/rest/authentication.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
  public loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService, private router: Router,
              protected appState: AppstateService) {
  }

  /**
   * Initialise le formulaire
   */
  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
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
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;


    this.auth.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      resolve => {
        this.router.navigate(['']);
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }


}
