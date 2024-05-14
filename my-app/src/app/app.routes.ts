import { Routes } from '@angular/router';
import { MenuComponent } from './core/components/menu/menu.component'; 
import { FriendComponent } from './features/friend/components/friend.component'; 
import { ExpenseComponent } from './features/expense/components/expense.component'; 
import { BalanceComponent } from './features/balance/components/balance.component'; 

 export const routeConfig: Routes = [
    {
        path: 'menu',
        component: MenuComponent,
        title: 'Menu page'

    },
    {
        path: 'friend',
        component: FriendComponent,
        title: 'Friend page'

    },
    {
        path: 'expense',
        component: ExpenseComponent,
        title: 'Expense page'

    },
    {
        path: 'balance',
        component: BalanceComponent,
        title: 'Balance page'

    }
]
