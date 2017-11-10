import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
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

  currentUser: any;

  constructor(public nav: NavController,
    public toastCtrl: ToastController,
     public loginService: LoginService) {

    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    if(this.currentUser != null){
      this.nav.setRoot(HomePage);
    }
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

      let toast = this.toastCtrl.create({
        message: 'Anuncio salvo com sucesso!',
        duration: 5000,
        position: 'middle'
      });
    
      toast.present();
      console.log('erro no login')
    });
    
  }

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }
}
