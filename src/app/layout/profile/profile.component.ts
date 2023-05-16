import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { UpdateUser } from '../../../api/models';
import { UserService } from '../../../api/services';
import { AuthorizationAppService } from '../../../app/shared/services/authorization.app.service';
import { timeZones as timezones } from '../../../assets/timezones';
import { mustMatch } from '../../shared/_helpers/must-match.validator';

export interface ITimeZone {
  Id: string;
  Aliases: string[];
  Location: {
    CountryCode: string;
    CountryName: string;
    Comment: string;
    Latitude: number;
    Longitude: number;
  };
  Offsets: string[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public constructor(
    private userService: UserService,
    private authorizationService: AuthorizationAppService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  public timeZoneControl = new FormControl('', Validators.required);
  public timeZones: ITimeZone[] = timezones;
  public filteredOptions: Observable<ITimeZone[]>;

  public submitted = false;

  public userFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    timeZone: new FormControl('', Validators.required)
  });

  public profileForm = this.formBuilder.group(
    {
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmNewPassword: new FormControl('', [])
    },
    {
      validator: mustMatch('newPassword', 'confirmNewPassword')
    }
  );

  public get form() {
    return this.profileForm.controls;
  }

  public ngOnInit(): void {
    this.filteredOptions = this.userFormGroup.get('timeZone').valueChanges.pipe(
      startWith(''),
      map(value => (value ? this.filter(value) : this.timeZones.slice()))
    );
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      const { firstName, lastName, email } = user;

      // Temporary variable until API isn't ready
      // Update timeZone with post request when API is ready
      const timeZone = '';

      this.userFormGroup.setValue({
        firstName,
        lastName,
        email,
        timeZone
      });
    }
  }

  public displayFn(timeZone: ITimeZone): string {
    return timeZone && timeZone.Id ? timeZone.Id : '';
  }

  public filter(value: string): ITimeZone[] {
    const filterValue = value.toString().toLowerCase();
    const filterByName = this.timeZones.filter(zone => zone.Location?.CountryName.toLowerCase().includes(filterValue));
    const filterByCode = this.timeZones.filter(zone => zone.Location?.CountryCode.toLowerCase().includes(filterValue));
    return value.length <= 2 ? filterByCode : filterByName;
  }

  public update() {
    const user: UpdateUser = JSON.parse(localStorage.getItem('currentUser'));
    const fields = this.userFormGroup.value;

    // Update user object with timeZone property when API is ready
    Object.assign(user, {
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email
    });
    this.userService.apiUserUpdateSelfPost({ body: user }).subscribe(res => {
      localStorage.setItem('currentUser', JSON.stringify(res));
      this.authorizationService.currentUserSubject.next(res);
    });
  }

  public onSubmit() {
    this.submitted = true;
    const fields = this.profileForm.value;
    if (this.profileForm.invalid) {
      this.toastrService.error('Invalid data', 'Error');
      return;
    }

    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.userService
      .apiUserChangeSelfPasswordPut({
        body: {
          email: user.email,
          currentPasword: fields.currentPassword,
          newPassword: fields.newPassword
        }
      })
      .subscribe(x => {
        if (x) {
          this.toastrService.success('Password changed', 'Succes');
        } else {
          this.toastrService.error('Invalid data', 'Error');
        }
      });
  }
}
