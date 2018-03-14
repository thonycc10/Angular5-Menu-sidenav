import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from './models/user.models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
}
