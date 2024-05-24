import { Routes } from '@angular/router';
import { FriendComponent } from './features/friend/components/friend.component';
import { AddExpenseComponent } from './features/expense/components/add-expense/addexpense.component';
import { DeleteConfirmationExpenseDialogComponent } from './features/expense/components/delete-expense/deleteexpense.component';
import { ViewExpenseComponent } from './features/expense/components/view-expense/viewexpense.component';
import { DeleteConfirmationDialogComponent } from './features/friend/components/delete-friend/delete-friend.component';
import { UpdateFriendDialogComponent } from './features/friend/components/update-friend/update-friend.component';
import { BalanceComponent } from './features/balance/components/balance.component';

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
        component: ViewExpenseComponent,
        title: 'Expense page'

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

    },
    {
        path: 'app-delete-expense',
        component: DeleteConfirmationExpenseDialogComponent,
        title: 'Delete expense page'

    },
    {
        path: 'balance',
        component: BalanceComponent,
        title: 'Balance page'

    }
]
