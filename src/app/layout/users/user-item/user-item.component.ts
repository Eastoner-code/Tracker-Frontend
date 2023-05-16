import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { ProjectApiModel } from '../../../../api/models';
import { ProjectService } from '../../../../api/services/project.service';
import { Position } from '../../../shared/_models/position';
import { Skill } from '../../../shared/_models/skill';
import { User } from '../../../shared/_models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  public constructor(private route: ActivatedRoute, private projectsService: ProjectService, private fb: FormBuilder) {}
  public profileForm: FormGroup;

  @ViewChild('chipPositionInput')
  public chipPositionInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoPositions')
  public matPositionAutocomplete: MatAutocomplete;
  @ViewChild('chipSkillInput')
  public chipSkillInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoSkills')
  public matSkillAutocomplete: MatAutocomplete;
  public member: User;
  public selectedProjects: any;
  public chipPositionForm = new FormControl();
  public chipSkillForm = new FormControl();
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public positions: Position[] = [];
  public filteredChipPositions: Observable<Position[]>;
  public selectedChipPositions: Position[] = [];
  public skills: Skill[] = [];
  public filteredChipSkills: Observable<Skill[]>;
  public selectedChipSkills: Skill[] = [];
  public projectData: ProjectApiModel[];

  // Get all projects
  private initProjectsPage() {
    this.projectsService.apiProjectGetAllGet().subscribe(x => {
      this.projectData = x;
    });
  }

  private _filterChipPosition(value: string): Position[] {
    let filterValue: any = {};
    if (typeof value === 'number') {
      const a = this.positions.find(x => x.id === value).name;
      filterValue = a.toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }
    return this.positions.filter(position => position.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterChipSkill(value: string): Skill[] {
    let filterValue: any = {};
    if (typeof value === 'number') {
      const a = this.skills.find(x => x.id === value).name;
      filterValue = a.toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }
    return this.skills.filter(skill => skill.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public ngOnInit() {
    let userId: any;

    userId = !Object.keys(this.route.snapshot.params).length ? 1 : this.route.snapshot.paramMap.get('id');
    const fomattedUserId: number = Number(userId);

    this.initProjectsPage();

    this.filteredChipPositions = this.chipPositionForm.valueChanges.pipe(
      // tslint:disable-next-line: deprecation
      startWith(''),
      map((position: string | null) => (position ? this._filterChipPosition(position) : this.positions.slice()))
    );

    this.filteredChipSkills = this.chipSkillForm.valueChanges.pipe(
      // tslint:disable-next-line: deprecation
      startWith(null),
      map((skill: string | null) => (skill ? this._filterChipSkill(skill) : this.skills.slice()))
    );
  }

  public onChangeProjects(values: number[]) {
    this.selectedProjects = values;
  }

  public addChipPosition(event: MatChipInputEvent): void {
    if (!this.matPositionAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.chipPositionForm.setValue(null);
    }
  }

  public removeChipPosition(chipPosition: Position): void {
    const index = this.selectedChipPositions.indexOf(chipPosition);
    if (index >= 0) {
      this.selectedChipPositions.splice(index, 1);
    }
  }

  public selectChipPosition(event: MatAutocompleteSelectedEvent): void {
    const newChipPosition = this.positions.find(x => x.id === event.option.value);
    this.selectedChipPositions.push(newChipPosition);
    this.chipPositionInput.nativeElement.value = '';
    this.chipPositionForm.setValue(null);
  }

  public addChipSkill(event: MatChipInputEvent): void {
    if (!this.matSkillAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        const maxSkillId = Math.max(...this.skills.map(x => x.id));
        const newSkill: Skill = {
          id: maxSkillId + 1,
          name: value.trim(),
          skill: ''
        };
        this.selectedChipSkills.push(newSkill);
      }
      if (input) {
        input.value = '';
      }
      this.chipSkillForm.setValue(null);
    }
  }

  public removeChipSkill(chipSkill: Skill): void {
    const index = this.selectedChipSkills.indexOf(chipSkill);
    if (index >= 0) {
      this.selectedChipSkills.splice(index, 1);
    }
  }

  public selectChipSkill(event: MatAutocompleteSelectedEvent): void {
    const newChipSkill = this.skills.find(x => x.id === event.option.value);
    this.selectedChipSkills.push(newChipSkill);
    this.chipSkillInput.nativeElement.value = '';
    this.chipSkillForm.setValue(null);
  }

  // Profile form initialization
  public initProfile(member: User) {
    this.profileForm.controls.firstName.setValue(member.firstName);
    this.profileForm.controls.lastName.setValue(member.lastName);
    this.profileForm.controls.email.setValue(member.email);
    this.selectedProjects = this.projectData;
  }
}
