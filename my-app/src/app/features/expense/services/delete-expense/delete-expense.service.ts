import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteExpenseService {

  constructor(private http: HttpClient) {}

  deleteExpense(expenseId: number): Observable<any> {
    const url = '/rest/expense/' + expenseId;
    return this.http.delete<any>(url);
  }
}
