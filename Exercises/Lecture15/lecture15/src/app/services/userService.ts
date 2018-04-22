import { forkJoin } from 'rxjs/observable/forkJoin';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

export class UserService {

    constructor(private http: Http) {
    }

    get() {
        return forkJoin([
            this.http.get('http://jsonplaceholder.typicode.com/users/1'),
            this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1 ')
        ]);
    }

    submit(user: User) {
        console.dir(user);
    }
}
