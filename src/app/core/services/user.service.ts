import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private httpClient = inject(HttpClient);
  constructor() { }


  addUser(user: User): Observable<any> {
    const apiUrl = environment.apiUrl;

    return this.httpClient.post(`${apiUrl}User/AddUser`, user);

  }


}
