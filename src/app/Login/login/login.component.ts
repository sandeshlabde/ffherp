import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Global } from 'Global';
import { ILoginDetails } from '../../models';

import { ProspectService } from '../../services/prospect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Form!: FormGroup;
  Password: any;
  SessionFlag: any;
  EmailId: any;
  LoginYn: any;
  Error: any;
  loginDetails: ILoginDetails = {
    EmailId: '',
    password: '',
    SessionFlag: 'Login',
  } as ILoginDetails;

  constructor(
    private listService: ProspectService,
    private fb: FormBuilder,
    private router: Router,
    private global: Global
  ) {}

  onClickLogin() {
    if (this.Form.valid) {
      this.EmailId = this.Form.value.email;
      this.Password = this.Form.value.password;
      let user: ILoginDetails;
      user = {
        EmailId: this.EmailId,
        password: this.Password,
        SessionFlag: 'Login',
      };
      this.listService.login(user).subscribe((res: string) => {
        localStorage.setItem('Global.LOGGED_IN_USER', res);
        const response = JSON.parse(res);
        if (
          response.LoginYn == '1' ||
          response.LoginYn == '2' ||
          response.LoginYn == '4'
        ) {
          this.router.navigate(['admin']);
        } else if (response.LoginYn == '3') {
          this.Error =
            'Your subscription period has expired. Please contact your administrator for renewal.';
        } else {
          this.router.navigate(['']);
          this.Error = ' UserId and Password Combination Wrong';
        }
      });
    }
  }

  // autoLogin() {

  // }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
