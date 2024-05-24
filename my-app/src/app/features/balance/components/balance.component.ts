import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceResponse } from '../model/balance-response';
import { ViewBalanceService } from '../services/view-balance/view-balance.service';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit {
  balances: BalanceResponse[] = [];


  constructor(
    private viewBalanceService: ViewBalanceService,

  ) { }

  ngOnInit(): void {
    this.getBalances();
  }

  getBalances(): void {
    this.viewBalanceService.getBalances()
      .subscribe(balances => this.balances = balances);
  }

}
