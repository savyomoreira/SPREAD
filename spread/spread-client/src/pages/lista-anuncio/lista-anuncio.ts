import {Component} from '@angular/core';
import {NavController, ActionSheetController, ModalController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {CategoryService} from '../../services/category-service';

import {AnuncioService} from '../../services/anuncio-service';

import {ModalFilterPage} from "../modal-filter/modal-filter";
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
  // list items of this category
  public items: any;

  // category info
  public category: any;

  // view type
  public viewType = 'list';

  categoryName= 'Nome Categoria'

  // sort by
  public sortBy = 'Best Match';

  constructor(public nav: NavController,
      public itemService: ItemService, 
      public categoryService: CategoryService,
      public modalCtrl: ModalController,
      public navParams: NavParams, 
      public actionSheetCtrl: ActionSheetController,
     private anuncioService: AnuncioService
    ) {
    this.categoryName = navParams.get('nomeCategoria');

    this.anuncioService.findByCategoria(navParams.get('id')).subscribe(data => {
      this.items = data;
    })

    // set category info
    this.category = categoryService.getItem(1);
  }

  // switch to list view
  viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }

  // choose sort by
  chooseSortBy() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Best Match',
          handler: () => {
            this.sortBy = 'Best Match';
          }
        },
        {
          text: 'Lowest Price First',
          handler: () => {
            this.sortBy = 'Lowest Price First';
          }
        },
        {
          text: 'Highest Price First',
          handler: () => {
            this.sortBy = 'Highest Price First';
          }
        },
        {
          text: 'No. of orders',
          handler: () => {
            this.sortBy = 'No. of orders';
          }
        },
        {
          text: 'Seller Rating',
          handler: () => {
            this.sortBy = 'Seller Rating';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // show filter modal
  openFilter(tabName) {
    // show modal
    let modal = this.modalCtrl.create(ModalFilterPage, {tabName: tabName});

    // listen for modal close
    modal.onDidDismiss(confirm => {
      if (confirm) {
        // apply filter here
      } else {
        // do nothing
      }
    });

    modal.present();
  }

  // view a item
  viewItem(itemId) {
    console.log(itemId)
    this.nav.push(ItemPage, {id: itemId})
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
