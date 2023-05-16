import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterUser, UpdateUser } from '../../../../api/models';
import { UserService } from '../../../../api/services';
import { TimeAppService } from '../../../../app/shared/services/time.app.service';
import { AuthorizationAppService } from '../../../shared/services/authorization.app.service';

@Component({
  selector: 'app-register',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public get getRegisterForm() {
    return this.registerForm.controls;
  }

  public get userId() {
    return this.activatedRoute.snapshot.params.id;
  }

  public get title() {
    return this.isNew ? 'Create' : 'Edit';
  }

  public get paswordGenerate() {
    return this.authorizationAppService.paswordGenerate();
  }
  // Get form controls

  public get isNew() {
    const routes = this.router.url.split('/');
    const route = routes[routes.length - 1];
    return route === 'new-user';
  }

  public constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    public authorizationAppService: AuthorizationAppService,
    private activatedRoute: ActivatedRoute,
    private timeAppService: TimeAppService
  ) {
    if (this.isNew) {
      this.isLoaded = true;
      this.init();
    } else {
      userService.apiUserGetUserUserIdGet({ userId: this.userId }).subscribe(
        res => {
          if (!res) {
            this.router.navigate(['/users']);
          }
          this.userForEdit = res;
          this.init();
          this.isLoaded = true;
        },
        error => {
          this.router.navigate(['/users']);
        }
      );
    }
  }

  public userForEdit: UpdateUser;
  public isLoaded = false;

  public toggleVisibilityPass = true;

  public registerForm: FormGroup;
  public returnUrl: string;
  public error = '';
  public date = new FormControl(new Date());

  public onSubmit() {
    const fields = this.getRegisterForm;
    const user: RegisterUser = {
      firstName: fields.firstName.value,
      lastName: fields.lastName.value,
      email: fields.email.value,
      meta: JSON.stringify({ birthDate: fields.birthDate.value }),
      startDateUtc: this.timeAppService.formatDateToBEFormatUtc(fields.startWorkDate.value)
    };
    if (this.isNew) {
      user.password = fields.newPassword.value;
      this.userService.apiUserRegisterPost({ body: user }).subscribe(
        data => {
          this.router.navigate(['/users']);
        },
        error => {
          this.error = error;
        }
      );
    } else {
      this.userService.apiUserUpdatePost({ body: { ...this.userForEdit, ...user } }).subscribe(
        data => {
          this.router.navigate(['/users']);
        },
        error => {
          this.error = error;
        }
      );
    }
  }

  public generateNewPassword() {
    this.registerForm.get('newPassword').setValue(this.paswordGenerate);
  }

  public init() {
    const meta = this.userForEdit ? JSON.parse(this.userForEdit.meta) : undefined;
    const obj = {
      firstName: [this.userForEdit ? this.userForEdit.firstName : '', [Validators.required]],
      lastName: [this.userForEdit ? this.userForEdit.lastName : '', [Validators.required]],
      email: [this.userForEdit ? this.userForEdit.email : '', [Validators.required, Validators.email]],
      birthDate: [meta ? new Date(meta.birthDate) : '', [Validators.required]],
      startWorkDate: [this.userForEdit ? new Date(this.userForEdit.startDateUtc) : '', [Validators.required]]
    };
    if (this.isNew) {
      // tslint:disable-next-line:no-string-literal
      obj['newPassword'] = [this.paswordGenerate, [Validators.required, Validators.minLength(6)]];
    }
    this.registerForm = this.formBuilder.group(obj);
  }
}
