import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  @Input('bool') b = true;

  constructor(private e: ElementRef) { 
    
  }

  ngOnInit() {
    if (this.b == false) {
      this.e.nativeElement.hidden = true;
    } 
  }

}
