import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineDataService {

  url = "https://randomuser.me/api/?results=10";

  constructor(private httpCLient : HttpClient) { }

  getOnlineData() {
    this.httpCLient.get('https://randomuser.me/api/?results=10').pipe(shareReplay(1)).subscribe((res) => { 
      var items = JSON.stringify(res);
      localStorage.setItem("users" , items);
    })
  }

  getCachedData(): Observable<[any]> {
    return of(JSON.parse(localStorage.getItem('users')).results) ;
  }
}
