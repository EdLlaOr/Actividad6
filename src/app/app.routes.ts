import { Routes } from '@angular/router';
import { UsersListViewComponent } from './pages/users-list-view/users-list-view.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo: "users"},
    {path:"users", component: UsersListViewComponent},
    {path:"user/:id", component:UserViewComponent},
    {path:"update/user/:id", component:FormComponent},
    {path:"new/user", component:FormComponent}
];
