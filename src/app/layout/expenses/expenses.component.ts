import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  public constructor(private modalService: NgbModal, public fb: FormBuilder) {
    this.addExpenseOptions = fb.group({
      currency: this.currencyControl,
      name: this.nameControl,
      unitPrice: this.unitPriceControl,
      quantity: this.quantityControl,
      description: this.descControl
    });
  }

  public action: string;
  public expenses: any[];
  public expensesHistory: any[];
  public displayedColumns: any[];
  public displayedColumnsHistory: any[];
  public addExpenseOptions: FormGroup;
  public currencyControl = new FormControl('USD');
  public nameControl = new FormControl('');
  public unitPriceControl = new FormControl(null);
  public quantityControl = new FormControl('');
  public descControl = new FormControl('');

  public ngOnInit(): void {
    this.expenses = EXPENSES;
    this.expensesHistory = EXPENSES_HISTORY;
    this.displayedColumnsHistory = ['name', 'userName', 'amount', 'date', 'edit'];
    this.displayedColumns = ['name', 'userName', 'amount', 'date', 'status', 'edit'];
    this.addExpenseOptions.setValue({
      currency: 'USD',
      name: '',
      unitPrice: null,
      quantity: '',
      description: ''
    });
  }

  public pendingStatus(expense) {
    return expense.status === 'Pending';
  }

  public viewExpense(element, content) {
    this.addExpenseOptions.disable();
    this.action = 'View';
    this.addExpenseOptions.setValue({
      currency: element.currency,
      name: element.name,
      unitPrice: element.amount,
      quantity: element.quantity,
      description: element.description
    });
    this.modalService.open(content, {}).result.then(
      () => true,
      () => false
    );
  }

  public editExpense(element, content) {
    this.addExpenseOptions.enable();
    this.action = 'Edit';
    this.addExpenseOptions.setValue({
      currency: element.currency,
      name: element.name,
      unitPrice: element.amount,
      quantity: element.quantity,
      description: element.description
    });
    this.modalService.open(content, {}).result.then(
      () => true,
      () => false
    );
  }

  public removeExpense(content) {
    this.modalService.open(content, {}).result.then(
      () => true,
      () => false
    );
  }

  public addExpense(content) {
    this.action = 'Add';
    this.addExpenseOptions.enable();
    this.modalService.open(content, {}).result.then(
      () => true,
      () => false
    );
  }
}

const EXPENSES = [
  {
    name: 'Router',
    userName: 'Userovich1',
    amount: 312,
    date: '24/01/2020',
    status: 'Pending',
    currency: 'USD',
    quantity: 2,
    description: ''
  },
  {
    name: 'Mouse',
    userName: 'Userovich2',
    amount: 322,
    date: '24/01/2020',
    status: 'Approved',
    currency: 'USD',
    quantity: 1,
    description: ''
  },
  {
    name: 'Keyboard',
    userName: 'Userovich3',
    amount: 332,
    date: '24/01/2020',
    status: 'Pending',
    currency: 'USD',
    quantity: 3,
    description: ''
  },
  {
    name: 'Coffee',
    userName: 'Userovich4',
    amount: 342,
    date: '24/01/2020',
    status: 'Refused',
    currency: 'USD',
    quantity: 7,
    description: ''
  },
  {
    name: 'Cake',
    userName: 'Userovich5',
    amount: 352,
    date: '24/01/2020',
    status: 'Approved',
    currency: 'USD',
    quantity: 9,
    description: ''
  },
  {
    name: 'Coca-cola',
    userName: 'Userovich6',
    amount: 362,
    date: '24/01/2020',
    status: 'Refused',
    currency: 'USD',
    quantity: 12,
    description: ''
  }
];

const EXPENSES_HISTORY = [
  {
    name: 'Router',
    userName: 'Userovich1',
    amount: 312,
    date: '24/01/2020',
    status: 'Pending',
    currency: 'USD',
    quantity: 2,
    description: ''
  },
  {
    name: 'Mouse',
    userName: 'Userovich2',
    amount: 322,
    date: '24/01/2020',
    status: 'Approved',
    currency: 'USD',
    quantity: 1,
    description: ''
  },
  {
    name: 'Keyboard',
    userName: 'Userovich3',
    amount: 332,
    date: '24/01/2020',
    status: 'Pending',
    currency: 'USD',
    quantity: 3,
    description: ''
  },
  {
    name: 'Coffee',
    userName: 'Userovich4',
    amount: 342,
    date: '24/01/2020',
    status: 'Refused',
    currency: 'USD',
    quantity: 7,
    description: ''
  },
  {
    name: 'Cake',
    userName: 'Userovich5',
    amount: 352,
    date: '24/01/2020',
    status: 'Approved',
    currency: 'USD',
    quantity: 9,
    description: ''
  },
  {
    name: 'Coca-cola',
    userName: 'Userovich6',
    amount: 362,
    date: '24/01/2020',
    status: 'Refused',
    currency: 'USD',
    quantity: 12,
    description: ''
  }
];
