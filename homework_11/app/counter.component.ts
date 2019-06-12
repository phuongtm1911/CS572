import { Component,  OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div style="text-align:center">
              <button (click)="decrease()">-</button>
              {{counter}}
              <button (click)="increase()">+</button>
            </div>`,
  styles: []
})

export class CounterComponent implements OnInit { 

  counterValue: number = 0;
  
  @Input() public counter;
  @Output() public counterChange = new EventEmitter();
  
  constructor() { 
    this.counterValue = this.counter;
  }

  increase() {
    // this.counterValue++;
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  decrease() {
    // this.counterValue--;
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  ngOnInit(): void {

  } 

}
