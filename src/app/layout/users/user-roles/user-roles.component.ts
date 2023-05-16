import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest } from 'rxjs';

import { UserService } from '../../../../api/services/user.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit, OnDestroy {
  public constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {}

  private userId: number;
  private routeSub: Subscription;

  public userName: string;

  public userRoles = [];
  public allRoles: string[] = [];

  public ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.userId = params.id;
      this.userName = params['user-name'];

      const userRoles$ = this.userService.apiUserGetAllRolesByIdUserIdGet({ userId: this.userId });
      const allRoles$ = this.userService.apiUserGetAllRolesGet();

      combineLatest(userRoles$, allRoles$, (userRoles, allRoles) => ({
        userRoles,
        allRoles
      })).subscribe(pair => {
        this.userRoles = pair.userRoles;

        this.allRoles = pair.allRoles.filter(item => !this.userRoles.includes(item));
      });
    });
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  public save() {
    this.userService
      .apiUserUpdateUserRolesUserIdPut({
        userId: this.userId,
        body: this.userRoles
      })
      .subscribe(rasult => {
        this.router.navigate(['/users']);
      });
  }

  public cancel() {
    this.router.navigate(['/users']);
  }

  public ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
