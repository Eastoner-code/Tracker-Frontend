import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ProjectItemRoutingModule } from './project-item-routing.module';
import { ProjectItemComponent } from './project-item.component';

@NgModule({
  declarations: [ProjectItemComponent],
  imports: [
    CommonModule,
    ProjectItemRoutingModule,
    Ng2Charts,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class ProjectItemModule {}
