import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  
  constructor(private e: ElementRef, private r: Renderer2) { }

  @HostListener('dblclick') onDblClick() {
    var size: number = parseInt(this.e.nativeElement.fontSize) + 2;
    this.e.nativeElement.fontSize = size.toString() + 'px';
    this.r.setStyle(this.e.nativeElement, 'font-size', '22px');
    this.e.nativeElement.color = 'red';
  }

}
