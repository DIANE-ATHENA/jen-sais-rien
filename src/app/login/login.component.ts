import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  http: any;

  constructor(_formBuilder: FormBuilder, private _authService: AuthService, private _router: Router, private _snackBar: MatSnackBar) { 
    this.form = _formBuilder.group({
      email: ['', Validators.email],
      password: '' 
    })
  }

  login() {
    if (this.form.valid) {
      this._authService.login(this.form.value).subscribe(
        loginSuccess => {
          this._router.navigate([''])
        }, loginError => {
          this._snackBar.open('Authentification échouée', 'OK', {duration: 5000,
        })
      }
      )
    }
  }

  

  ngOnInit() {
  }

}
