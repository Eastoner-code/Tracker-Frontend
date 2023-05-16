import { animate, state, style, transition, trigger } from '@angular/animations';
import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface IUserSalaryData {
  userId: number;
  name: string;
  salary: number;
  payed: number;
  operations?: IUserSalaryOperationsData[] | MatTableDataSource<IUserSalaryOperationsData>;
}

export interface IUserSalaryOperationsData {
  id: number;
  userId: number;
  date: string;
  payAmount: number;
}

const usersSalaryData: IUserSalaryData[] = [
  {
    userId: 0,
    name: 'Admin Test',
    salary: 20000,
    payed: 15000,
    operations: [
      {
        id: 0,
        userId: 0,
        date: '2020-12-02',
        payAmount: 0
      },
      {
        id: 0,
        userId: 0,
        date: '2020-12-02',
        payAmount: 0
      }
    ]
  },
  {
    userId: 0,
    name: 'Admin Test',
    salary: 20000,
    payed: 15000,
    operations: [
      {
        id: 0,
        userId: 0,
        date: '2020-12-02',
        payAmount: 7500
      },
      {
        id: 0,
        userId: 0,
        date: '2020-12-01',
        payAmount: 7500
      }
    ]
  }
];

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class SalariesComponent implements OnInit {
  public constructor(private cd: ChangeDetectorRef, private currencyPipe: CurrencyPipe) {}
  public dataSource: MatTableDataSource<IUserSalaryData>;
  public usersData: IUserSalaryData[] = [];
  public columnsToDisplay = ['name', 'salary', 'payed'];
  public innerDisplayedColumns = ['date', 'payAmount'];
  public expandedElement: IUserSalaryData | null;

  public exchangeRate: number;

  public monthCheck: any;

  @ViewChildren('innerTables') public innerTable: QueryList<MatTable<IUserSalaryOperationsData>>;

  public ngOnInit() {
    usersSalaryData.forEach(userSalary => {
      userSalary.operations && Array.isArray(userSalary.operations) && userSalary.operations.length
        ? (this.usersData = [...this.usersData, { ...userSalary, operations: new MatTableDataSource(userSalary.operations) }])
        : (this.usersData = [...this.usersData, userSalary]);
    });
    this.dataSource = new MatTableDataSource(this.usersData);
  }

  public toggleRow(element: IUserSalaryData) {
    element.operations && (element.operations as MatTableDataSource<IUserSalaryOperationsData>).data.length
      ? (this.expandedElement = this.expandedElement === element ? null : element)
      : (element.operations = null);
    this.cd.detectChanges();
  }

  public updateExchangeRate(value: number) {
    return alert(value);
  }

  public addPayAmount(value: number) {
    return alert(value);
  }

  public onMonthChangeEvent(event: FormControl): void {
    this.monthCheck = event;
  }

  /** Gets the total of all salaries. */
  public getSalariesTotal(salaryData: any[]): string {
    return salaryData.map(user => user.salary).reduce((acc, value) => acc + value, 0);
  }

  /** Gets the total of payed. */
  public getPayedTotal(salaryData): string {
    return salaryData.map(user => user.payed).reduce((acc, value) => acc + value, 0);
  }

  /** Transform the total value with currency pipe. */
  public transformTotal(totalValue: string): string {
    return `Total: ${this.currencyPipe.transform(totalValue)}`;
  }

  /** Gets the total by column. */
  public getTotalByColumn(column: string): string {
    const salaryTotal = this.transformTotal(this.getSalariesTotal(usersSalaryData));
    const payedTotal = this.transformTotal(this.getPayedTotal(usersSalaryData));
    return column === 'salary' ? salaryTotal : column === 'payed' ? payedTotal : '';
  }
}
