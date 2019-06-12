import { Component } from '@angular/core';
import { DumbComponent } from './dumb/dumb.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<app-dumb [a]="hobbies"></app-dumb>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hobbies: any[] = ["listening to music", "watching movies", "shopping", "reading"];

  constructor() { }

  ngOnInit() {

  }
}
