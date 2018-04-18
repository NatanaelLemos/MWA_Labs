import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'text-transform', 'uppercase');
  }

}
