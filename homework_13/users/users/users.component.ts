import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OnlineDataService } from 'src/app/online-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  template: `<h3>User List<h3>
            {{users}}
            <ul>
              <li *ngFor="let u of users">{{u}}</li>
            </ul>`,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> {
    throw new Error("Method not implemented.");
  }

  public users;

  constructor(private router: Router, private dataService: OnlineDataService) { }

  ngOnInit() {
    this.router.navigate(['/users']);
    this.dataService.getOnlineData();
    this.users = JSON.stringify(this.dataService.getCachedData());
  }

}
