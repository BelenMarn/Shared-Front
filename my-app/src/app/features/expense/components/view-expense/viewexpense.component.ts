import { Component, OnInit } from '@angular/core';
import { ExpenseResponse } from '../../model/expense-response';
import { MatDialog } from '@angular/material/dialog';
import { ViewExpenseService } from '../../services/view-expense/view-expense.service';
import { DeleteExpenseService } from '../../services/delete-expense/delete-expense.service';
import { DeleteConfirmationExpenseDialogComponent } from '../delete-expense/deleteexpense.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'viewexpense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./viewexpense.component.html",
  styleUrl: './viewexpense.component.css',
})

export class ViewExpenseComponent implements OnInit {
  expenses: ExpenseResponse[] = [];
  moment = moment;


  constructor(
    private viewExpenseService: ViewExpenseService,
    private deleteExpenseService: DeleteExpenseService,
    private dialog: MatDialog


  ) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.viewExpenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }

  deleteConfirmation(expense: ExpenseResponse) {
    const dialogRef = this.dialog.open(DeleteConfirmationExpenseDialogComponent, {
      data: { expense: expense }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === true) {
        this.deleteExpenseService.deleteExpense(expense.idExpense)
          .subscribe(
              (response) => {

              //Updating the friend's list.
              this.viewExpenseService.getExpenses()
              .subscribe(expenses => this.expenses = expenses);
            });
        }
      });
  }
}
