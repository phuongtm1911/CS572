import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div style="text-align:center">
              <button (click)="decrease()">-</button>
              {{counterValue}}
              <button (click)="increase()">+</button>
            </div>`,
  styles: []
})

export class CounterComponent implements OnInit { 

  counterValue: number = 0;
  
  @Input() public counter;
  @Output() public counterChange = new EventEmitter();
  
  constructor() { 
    
  }

  increase() {
    this.counterValue++;
    this.counter = this.counterValue;
    this.counterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue--;
    this.counter = this.counterValue;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit(): void {
    this.counterValue = this.counter;
  } 

}
