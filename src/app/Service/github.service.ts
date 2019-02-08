import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private http: HttpClient) {}

  fetchUser(): Observable<object> {
    return this.http.get('https://api.github.com/users');
  }

  getUserDetails(login) {
    return this.http.get(`https://api.github.com/users/${login}`);
  }

  getUserRepoDeatails(login) {
    return this.http.get(`https://api.github.com/users/${login}/repos`);
  }

  getUserFollowers(login) {
    return this.http.get(`https://api.github.com/users/${login}/followers`);
  }
}
