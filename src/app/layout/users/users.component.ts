import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { UserApiModel } from '../../../api/models';
import { UserService } from '../../../api/services/user.service';
import { User } from '../../shared/_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public constructor(private router: Router, private userService: UserService) {}
  public users: UserApiModel[] = [];

  public invitationGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  @ViewChild(DatatableComponent)
  public table: DatatableComponent;

  public ngOnInit() {
    this.userService.apiUserGetAllGet().subscribe(data => {
      this.users = data;
    });
  }

  public viewUser(row: User) {
    this.router.navigate(['/user', row.id]);
  }
}
