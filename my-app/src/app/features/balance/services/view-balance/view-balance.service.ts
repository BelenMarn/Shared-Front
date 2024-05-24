import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BalanceResponse } from '../../model/balance-response';

@Injectable({
  providedIn: 'root'
})
export class ViewBalanceService {
  private baseUrl = '/rest/balance';

  constructor(private http: HttpClient) { }

  getBalances(): Observable<BalanceResponse[]> {
    return this.http.get<BalanceResponse[]>(this.baseUrl).pipe(tap(console.log));
  }
}
