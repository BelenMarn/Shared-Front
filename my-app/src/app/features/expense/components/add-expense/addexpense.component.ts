import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FriendResponse } from '../../../friend/model/friend-response';
import { ShowFriendsService } from '../../../friend/services/show-friends/show-friends.service';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/add-expense/add-expense.service';
import { FormsModule } from '@angular/forms';
import { ExpenseRequest } from '../../model/expense-request';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddExpenseComponent implements OnInit {
  friends: FriendResponse[] = [];
  selectedFriendId: number | null = null;
  description: string = '';
  amount: number = 0;


  constructor(
    private showFriendsService: ShowFriendsService,
    private expenseService: ExpenseService
  ) { }


  ngOnInit(): void {
    this.getFriends();
  }
  
  getFriends(): void {
    this.showFriendsService.getAllFriends()
      .subscribe(friends => {
        console.log('Friends data:', friends);
        this.friends = friends;
      });
  }

  onChangeFriend(value: string) {
    console.log('Selected value:', value);
    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue)) {
      this.selectedFriendId = parsedValue;
    } else {
      console.error('Invalid ID selected');
    }
  }

  onSubmit() {
    console.log('Description:', this.description);
    console.log('Amount:', this.amount);

    if(!this.description || !this.amount){
      return;
    }

    if (this.description.trim().length === 0) {
      console.error('Please enter a description for the expense.');
      return;
    }

    if (isNaN(this.amount) || this.amount <= 0) {
      console.error('Please enter a valid amount (positive number) for the expense.');
      return;
    }

    const expense: ExpenseRequest = {
      description: this.description,
      amount: this.amount
    };

    this.expenseService.addExpense(this.selectedFriendId!, expense)
      .subscribe(
        (response) => {
            console.log('Expense added successfully.', response);
          },
      )
  }
}