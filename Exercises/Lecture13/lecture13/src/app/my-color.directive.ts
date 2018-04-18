import { Directive, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  @Output() colorChanged = new EventEmitter<string>();

  colors: string[] = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#000000'
  ];

  constructor(private element: ElementRef, private renderer: Renderer2) {
    element.nativeElement.onclick = () => {
      const color = this.colors[Math.floor(Math.random() * 4)];
      renderer.setStyle(element.nativeElement, 'color', color);
      this.colorChanged.emit(color);
    };
  }

}
