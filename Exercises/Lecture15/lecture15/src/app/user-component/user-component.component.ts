import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { forkJoin } from 'rxjs/observable/forkJoin';

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

  constructor(private http: Http) { }

  ngOnInit() {
  }

  submit() {
    console.dir(this.user);
  }

  getData() {
    forkJoin([
      this.http.get('http://jsonplaceholder.typicode.com/users/1'),
      this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1 ')
    ]).subscribe(results => {
      this.user.name = results[0].json().name;
      this.user.email = results[0].json().email;
      this.user.post = results[1].json()[0].body;
    }, err => {
      console.log(err);
    });
  }
}
