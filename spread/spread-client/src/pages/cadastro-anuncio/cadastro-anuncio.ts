import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-cadastro-anuncio',
  templateUrl: 'cadastro-anuncio.html'
})
export class CadastroAnuncioPage {

  anuncio: any;

  constructor(public nav: NavController) {
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  // go to home page
  register() {
    this.nav.setRoot(HomePage);
  }
}
