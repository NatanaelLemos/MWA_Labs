import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    post: ''
  };

  @ViewChild('f') form: any;

  constructor(private http: Http, private userService: UserService) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.userService.submit(this.user);
    }
  }

  getData() {
    this.userService.get().subscribe(results => {
      this.user.name = results[0].json().name;
      this.user.email = results[0].json().email;
      this.user.post = results[1].json()[0].body;
    }, err => {
      console.log(err);
    });
  }
}
