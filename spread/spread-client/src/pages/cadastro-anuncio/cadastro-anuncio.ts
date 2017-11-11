import {Component} from '@angular/core';
import {NavController, ToastController,ViewController, App} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {ItemPage} from '../item/item';

import {HomePage} from '../home/home';
import {AnuncioService} from '../../services/anuncio-service';

import {CategoryService} from '../../services/category-service';

import { Camera } from '@ionic-native/camera';

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

  base64textString= '';

  public file = {nome:'',
                tipo:'',
                file:null};

  constructor(public nav: NavController,
    private anuncioService: AnuncioService,
    public viewCtrl: ViewController,
     public categoryService: CategoryService,
      public toastCtrl: ToastController,
      public appCtrl: App,
      public camera: Camera
    ) {
      
    this.anuncio = {}
    this.categoriaList = Array<any>();
    categoryService.findAll().subscribe(data =>{
      console.log(data);
      this.categoriaList = data;
   });
  }

getFiles(files: any) {
 
    var files = files.target.files;
    var file = files[0];

    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64textString = 'data:image/jpeg;base64,' + btoa(binaryString);
           console.log(this.base64textString);
   }

  // go to home page
  register() {
    this.anuncio.categoria = this.categoriaSelecionada;
   
    this.anuncio.usuario = JSON.parse(sessionStorage.getItem('user'));
    this.anuncio.foto = this.base64textString;
   this.anuncioService.save(this.anuncio).then(data =>{
        let toast = this.toastCtrl.create({
          message: 'Anuncio salvo com sucesso!',
          duration: 3000,
          position: 'middle'
        });

        console.log(data);
        this.nav.setRoot(ItemPage, {id: data})
      // this.nav.push(HomePage, {id: data}, {updateUrl: true})
        
   });
  
  }
}
