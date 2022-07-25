import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  visiblePassword: string = "password";
  form!: FormGroup;
  alerts: boolean = false;
  data: any;

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private cookieService:CookieService) { }

  changeVisibl(event: any): void{
    console.log(event.target.innerHTML)
    if (event.target.innerHTML =='visibility'){
      this.visiblePassword = 'text';
      event.target.innerHTML = 'visibility_off';
    } else {
      this.visiblePassword = 'password';
      event.target.innerHTML = 'visibility';
    };
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        mind: new FormControl(null, [])
      }
    )
  }

  onSubmit(): void{
    this.form.disable();
    this.auth.login(
      this.form.controls["email"].value,
      this.form.controls["password"].value,
    ).subscribe(
        (data: any) => {
          this.auth.data = data;
          if (this.form.controls["mind"]){
            this.cookieService.set('token',data['tokens']['token']);
            this.cookieService.set('refreshToken',data['tokens']['refreshToken']);
          }
          this.router.navigate(['/dashboard']);
        },
        error => {console.log(error); this.alerts = !this.alerts}
    );
    this.form.enable();
  }
  get email() { return this.form.controls["email"]; }
  get password() { return this.form.controls["password"]; }
}
