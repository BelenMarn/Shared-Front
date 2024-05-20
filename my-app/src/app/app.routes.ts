import { Routes } from '@angular/router';
import { FriendComponent } from './features/friend/components/friend.component'; 
import { AddExpenseComponent } from './features/expense/components/add-expense/addexpense.component'; 
import { BalanceComponent } from './features/balance/components/balance.component'; 
import { ViewexpenseComponent } from './features/expense/components/view-expense/viewexpense.component';

 export const routeConfig: Routes = [
    {
        path: 'friend',
        component: FriendComponent,
        title: 'Friend page'

    },
    {
        path: 'addexpense',
        component: AddExpenseComponent,
        title: 'Add Expense page'

    },
    {
        path: 'viewexpense',
        component: ViewexpenseComponent,
        title: 'View Expense page'

    },
    {
        path: 'balance',
        component: BalanceComponent,
        title: 'Balance page'

    }
]
