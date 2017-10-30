import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {ItemService} from '../../services/item-service';
import {ModalItemOptionPage} from "../modal-item-option/modal-item-option";
import { NavParams } from 'ionic-angular';

import {AnuncioService} from '../../services/anuncio-service';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  // item info
  public item: any;

  constructor(public nav: NavController, public navParams: NavParams, 
    private anuncioService: AnuncioService,
    public itemService: ItemService,
    public modalCtrl: ModalController) {

    this.anuncioService.findOne(navParams.get('id')).subscribe(data => {
      this.item = data;
    })

  }

  // add or remove item on wish list
  toggleWishList(item) {
    item.on_wish_list = !item.on_wish_list;
  }

  // make array with range is n
  range(n) {
    return new Array(n);
  }

  // open item option modal
  showOptions(item) {
    // show modal
    let modal = this.modalCtrl.create(ModalItemOptionPage, {item: item});

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
}
