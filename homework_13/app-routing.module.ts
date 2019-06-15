import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { UserdetailsComponent } from './users/userdetails/userdetails.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:uuid', component: UserdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, UserdetailsComponent]