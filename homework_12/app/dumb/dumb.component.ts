import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `<div appMakeBigger>
              <ul appIsVisible [bool]="true">
                <li *ngFor="let e of a">{{e | multi: 3}}</li>
              </ul>
            </div>`,
  styleUrls: ['./dumb.component.css']
})

export class DumbComponent implements OnInit {
  
  @Input() public a;

  constructor() { }

  ngOnInit() {
  }

}
