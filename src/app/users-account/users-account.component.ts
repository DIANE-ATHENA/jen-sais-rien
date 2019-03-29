import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from '@angular/core/src/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-account',
  templateUrl: './users-account.component.html',
  styleUrls: ['./users-account.component.css']
})
export class UsersAccountComponent implements OnInit {

  form: FormGroup
  _http: any;
  _token: string;

  constructor(private _fb: FormBuilder) { 
    this.form=this._fb.group({
      nom: "",
      prenom: "",
      email: "",
      password: "",
    })
  }

  ngOnInit() {
  }

  createLogin(formcreateLogin: { nom: any, prenom: any, email: string, password: string })
  : Observable<boolean> {
  return new Observable(observer => {
    this._http.post('http://localhost:3000/createLogin', formcreateLogin).subscribe(
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
