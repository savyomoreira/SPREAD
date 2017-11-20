import {Component} from '@angular/core';
import {NavController, ActionSheetController, ModalController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {CategoryService} from '../../services/category-service';

import {AnuncioService} from '../../services/anuncio-service';

import {ModalFilterPage} from "../modal-filter/modal-filter";

import {TabFilterPage} from "../tab-filter/tab-filter";

import {ItemPage} from "../item/item";
import {CartPage} from "../cart/cart";
import { NavParams } from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'lista-anuncio',
  templateUrl: 'lista-anuncio.html'
})
export class ListAnuncioPage {
  
  public items: any;

  public category: any;

  categoryName= 'Nome Categoria'

  constructor(public nav: NavController,
      public itemService: ItemService, 
      public categoryService: CategoryService,
      public modalCtrl: ModalController,
      public navParams: NavParams, 
      public actionSheetCtrl: ActionSheetController,
     private anuncioService: AnuncioService
    ) {
    this.categoryName = navParams.get('nomeCategoria');

    this.buscarAnuncios(navParams.get('id'));
    
    this.category = categoryService.getItem(1);
  }

  buscarAnuncios(param){
    this.anuncioService.findByCategoria(param).subscribe(data => {
      this.items = data;
    })
  }

  openFilter(tabName) {
    // show modal
    let modal = this.modalCtrl.create(TabFilterPage, {tabName: tabName});

    // listen for modal close
    modal.onDidDismiss(confirm => {
      if (confirm) {
        console.log("");
        modal.dismiss(true)
      } else {
        modal.dismiss(true)
      }
    });

    modal.present();
  }

  viewItem(itemId) {
    console.log(itemId)
    this.nav.push(ItemPage, {id: itemId})
  }

 }
