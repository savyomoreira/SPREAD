import {Component} from '@angular/core';
import {NavController, ActionSheetController, ModalController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {CategoryService} from '../../services/category-service';
import {SolicitacaoService} from '../../services/solicitacao-service';

import {ItemPage} from "../item/item";

import {AnuncioService} from '../../services/anuncio-service';

import {ModalFilterPage} from "../modal-filter/modal-filter";
import {DetalheSolicitacaoPage} from "../detalhe-solicitacao/detalhe-solicitacao";
import {CartPage} from "../cart/cart";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'meus-anuncios',
  templateUrl: 'meus-anuncios.html'
})
export class MeusAnunciosPage {
  // list items of this category
  public items: any;

  currentUser: any;

  constructor(public nav: NavController,
      public itemService: ItemService, 
      public categoryService: CategoryService,
      public modalCtrl: ModalController,
      public anuncioService: AnuncioService,
      public actionSheetCtrl: ActionSheetController
    ) {
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
      console.log(sessionStorage.getItem('user'))
   
    anuncioService.findByIdUser(this.currentUser.id).subscribe(data => {
      this.items = data;
     console.log(data)
    })

  }

  // view a item
  viewItem(itemId) {
    console.log(itemId)
    this.nav.push(ItemPage, {id: itemId})
  }

}
