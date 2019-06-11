import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div style="text-align:center">
                <button (click)="decrease()">-</button>
                {{counterValue}}
                <button (click)="increase()">+</button>
              </div>`,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  } 

  counterValue: number;
  @Input() public counter;
  @Output() public counterChange = new EventEmitter();
  
  constructor() { 
    this.counterValue = this.counter;
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

}
