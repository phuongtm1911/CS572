import { Component } from '@angular/core';

import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  template: `{{ComponentCounterValue}}
  <app-counter [counter]="counterValue"
       (counterChange)="this.ComponentCounterValue=$event"
                ></app-counter>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue: number = 5;
  ComponentCounterValue: number;
  
}




