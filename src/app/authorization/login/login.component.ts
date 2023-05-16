import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthorizationAppService } from '../../shared/services/authorization.app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authorization.component.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  // Get form controls
  public get form() {
    return this.loginForm.controls;
  }

  public constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authorizationAppService: AuthorizationAppService
  ) {
    // Redirect to home if already logged in
    if (this.authorizationAppService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  public onSubmit() {
    this.submitted = true;
    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    const obj: any = {};
    obj.email = this.form.email.value;
    obj.password = this.form.password.value;
    this.authorizationAppService
      .login(obj)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
