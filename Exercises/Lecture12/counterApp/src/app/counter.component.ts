import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
    <button (click)="decrease()">-</button>
    <button (click)="increase()">+</button>
    </p>
    <p>
    Counter value: {{counterValue}}
    </p>
    <p>
    <input type="number" [value]="counterValue" (input)="counterValue=$event.target.value" />
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Output() counterChange = new EventEmitter<number>();

  private _counterValue = 0;

  public get counterValue() {
    return this._counterValue;
  }

  @Input('counterValue')
  public set counterValue(value: number) {
    this.counterChange.emit(value);
    this._counterValue = value;
  }

  constructor() { }

  ngOnInit() { }

  decrease() {
    this.counterValue--;
  }

  increase() {
    this.counterValue++;
  }
}
