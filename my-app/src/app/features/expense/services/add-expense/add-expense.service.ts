import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseRequest } from '../../model/expense-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  addExpense(friendId: number, expense: ExpenseRequest): Observable<any> {
    const url = '/rest/expense/friend/' + friendId;
    return this.http.post<any>(url, expense);
  }
}