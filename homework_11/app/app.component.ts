import { Component } from '@angular/core';

import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
                <app-counter [counter]="ComponentCounterValue1"
                            (counterChange)="ComponentCounterValue1=$event"></app-counter>
                Component 1 Counter Value = {{ComponentCounterValue1}}
                <app-counter [counter]="ComponentCounterValue2"
                            (counterChange)="ComponentCounterValue2=$event"></app-counter>
                Component 2 Counter Value = {{ComponentCounterValue2}}
                </div>`,
  styles: []
})

export class AppComponent {
  ComponentCounterValue1: number = 5;
  ComponentCounterValue2: number = 5;
}
