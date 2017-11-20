import {Component} from '@angular/core';
import {NavController,ToastController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';

import {UserService} from '../../services/user-service';
import {BairroService} from '../../services/bairro-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  estados: Array<any>;

  user = {email: '', 
          name: '', 
          senha: '', 
          telefone: '',
          cep: '',
          endereco:'',
          complemento:'',
          bairro: null
        };

  constructor(public nav: NavController,
    public toastCtrl: ToastController,
    private bairroService: BairroService,
    private userService: UserService) {
      this.bairroService.findAll().subscribe(data => {
        this.estados = data;
      });
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  // go to home page
  register() {
    this.userService.save(this.user);
      let toast = this.toastCtrl.create({
        message: 'Usuario salvo com sucesso!',
        duration: 5000,
        position: 'middle'
      });
     
    this.nav.push(LoginPage);
    toast.present();
    
  }
}
