import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
import {AnuncioService} from '../../services/anuncio-service';

import {CategoryService} from '../../services/category-service';


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
  categoriaList: Array<any>;
  categoriaSelecionada: any; 

  constructor(public nav: NavController,
    private anuncioService: AnuncioService,
     public categoryService: CategoryService) {

    this.anuncio = {}
    this.categoriaList = Array<any>();
    categoryService.findAll().subscribe(data =>{
      console.log(data);
      this.categoriaList = data;
   });
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  // go to home page
  register() {
    this.anuncio.categoria = this.categoriaSelecionada;
    console.log(this.anuncio);
    this.anuncioService.save(this.anuncio)
   this.nav.setRoot(HomePage);
  }
}
