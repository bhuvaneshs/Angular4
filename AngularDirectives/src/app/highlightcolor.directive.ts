import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[Highlightcolor]'
})
export class HighlightcolorDirective implements AfterViewInit {
@Input() inputcolor: string;
  constructor(public element: ElementRef) {
   }
  ngAfterViewInit(): void {
    this.element.nativeElement.style.color = this.inputcolor;
  }
}
