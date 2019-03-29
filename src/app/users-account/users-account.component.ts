import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from '@angular/core/src/util';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-account',
  templateUrl: './users-account.component.html',
  styleUrls: ['./users-account.component.css']
})
export class UsersAccountComponent implements OnInit {

  form: FormGroup
  _http: any;
  _token: string;

  constructor(private _fb: FormBuilder,
    private _userService: UserService) { 
    this.form=this._fb.group({
      nom: "",
      prenom: "",
      email: "",
      password: "",
    })
  }

  ngOnInit() {
  }

  createLogin() {
    if (this.form.valid) {
      this._userService.
    }
  }
}
