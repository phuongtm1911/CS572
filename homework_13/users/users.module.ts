import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OnlineDataService } from '../online-data.service';

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule
  ],
  providers: [OnlineDataService]
})
export class UsersModule { }
