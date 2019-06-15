import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { OnlineDataService } from 'src/app/online-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  template: `<p>{{user}}</p>`,
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit, CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> {
    throw new Error("Method not implemented.");
  }

  public userId;
  public user;
  constructor(private router: Router, private route: ActivatedRoute, private dataService: OnlineDataService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('uuid');
   // this.dataService.getOnlineData();
    console.log( typeof this.dataService.getCachedData());
    this.dataService.getCachedData().subscribe((users) => {
      console.log(users);
      for (var i = 0; i < users.length; i++) {
        if (users[i].login.uuid == id) {
          this.user = users[i];
        }
      }
    });
    this.user = JSON.stringify(this.user);
  }

}
