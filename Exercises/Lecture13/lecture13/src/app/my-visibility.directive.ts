import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'display', 'none');
  }

}
