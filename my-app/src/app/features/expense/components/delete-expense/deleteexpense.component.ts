import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 
import { ExpenseResponse } from "../../model/expense-response";


@Component({
  selector: 'app-delete-expense',
  standalone: true,
  templateUrl: './deleteexpense.component.html',
  styleUrl: './deleteexpense.component.css',
  imports: [MatDialogModule, MatButtonModule] 
})

export class DeleteConfirmationExpenseDialogComponent {
  constructor(
    @Inject(MatDialogRef<DeleteConfirmationExpenseDialogComponent>) public dialogRef: MatDialogRef<DeleteConfirmationExpenseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { expense: ExpenseResponse }
  ) {}

}
