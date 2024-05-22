import { Routes } from '@angular/router';
import { FriendComponent } from './features/friend/components/friend.component'; 
import { AddExpenseComponent } from './features/expense/components/add-expense/addexpense.component'; 
import { BalanceComponent } from './features/balance/components/balance.component'; 
import { ViewexpenseComponent } from './features/expense/components/view-expense/viewexpense.component';
import { UpdateFriendDialogComponent } from './features/friend/components/update-friend/update-friend.component';
import { DeleteConfirmationDialogComponent } from './features/friend/components/delete-friend/delete-friend.component';

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
        path: 'app-update-friend',
        component: UpdateFriendDialogComponent,
        title: 'Update friend page'

    },
    {
        path: 'app-delete-friend',
        component: DeleteConfirmationDialogComponent,
        title: 'Delete friend page'

    }
]
