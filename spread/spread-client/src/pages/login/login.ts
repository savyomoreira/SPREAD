import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from '../home/home';
import {ForgotPasswordPage} from "../forgot-password/forgot-password";

import {LoginService} from '../../services/login-service';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  credentials = {
    login: '',
    senha: ''
  }

  constructor(public nav: NavController, public loginService: LoginService) {
  }

  // go to register page
  register() {
    this.nav.push(RegisterPage);
  }

  // go to home page
  login() {
    this.loginService.login(this.credentials).then(data => {
      sessionStorage.setItem('user', JSON.stringify(data.json()));
      this.nav.setRoot(HomePage);
    }).catch(data => {
      console.log('erro no login')
    });
    
  }

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }
}
