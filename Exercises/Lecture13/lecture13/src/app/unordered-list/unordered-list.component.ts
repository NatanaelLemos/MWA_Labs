import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent implements OnInit {

  @Input() strings: string[];

  constructor() { }

  ngOnInit() {
  }

}
