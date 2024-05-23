import { Injectable } from '@angular/core';
import { ExpenseResponse } from '../../model/expense-response';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ViewExpenseService {
  private baseUrl = '/rest/expense';

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<ExpenseResponse[]> {
    return this.http.get<ExpenseResponse[]>(this.baseUrl).pipe(tap(console.log));
  }
}
