import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = [];
  constructor(private db: DbService) { }

  ngOnInit() {
    this.students = this.db.getData();
  }

}
