import {Component} from '@angular/core';
import {NavController, ActionSheetController, ModalController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {CategoryService} from '../../services/category-service';

import {ListAnuncioPage} from '../lista-anuncio/lista-anuncio';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'lista-categotia',
  templateUrl: 'lista-categotia.html'
})
export class ListaCategotiaPage {
  // list items of this category
  public categories: any;

  constructor(public nav: NavController,
      public itemService: ItemService, 
      public categoryService: CategoryService,
      public modalCtrl: ModalController,
      public actionSheetCtrl: ActionSheetController,
    ) {
    categoryService.findAll().subscribe(data =>{
      this.categories = data;
    });
  }

  viewItem(categoriaId){
    this.nav.push(ListAnuncioPage, {id: categoriaId});
    
  }
  
}
