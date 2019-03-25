import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;

  constructor(private _http: HttpClient) { }

  login(formLogin: { email: string, password: string })
    : Observable<boolean> {
    return new Observable(observer => {
      this._http.post('http://localhost:3000/login', formLogin).subscribe(
        (result: { accessToken: string }) => {
          this._token = result.accessToken;
          observer.next(true);
          observer.complete();
        },
        err => observer.error(err)
      )
    })
  }
  get token() {
    return this._token;
  }
}


