import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highLighter]'
})
export class HighlighterDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'blue';
   }
}
