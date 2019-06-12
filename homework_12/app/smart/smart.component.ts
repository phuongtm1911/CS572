import { Component, OnInit } from '@angular/core';
import { DumbComponent } from './../dumb/dumb.component';

@Component({
  selector: 'app-smart',
  template: `<app-dumb [a]="hobbies"></app-dumb>`,
  styleUrls: ['./smart.component.css']
})

export class SmartComponent implements OnInit {

  hobbies: any[] = ["listening to music", "watching movies", "shopping", "reading"];

  constructor() { }

  ngOnInit() {

  }

}
