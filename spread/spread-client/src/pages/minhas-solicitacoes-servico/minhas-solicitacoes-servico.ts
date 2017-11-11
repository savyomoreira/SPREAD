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
  selector: 'minhas-solicitacoes-servico',
  templateUrl: 'minhas-solicitacoes-servico.html'
})
export class MinhasSolicitacoesServicoPage {
  // list items of this category
  public items: any;

  // category info
  public category: any;

  // view type
  public viewType = 'list';

  // sort by
  public sortBy = 'Best Match';

  currentUser: any;

  constructor(public nav: NavController,
      public itemService: ItemService, 
      public categoryService: CategoryService,
      public modalCtrl: ModalController,
      public solicitacaoService: SolicitacaoService,
      public actionSheetCtrl: ActionSheetController
    ) {
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
      console.log(sessionStorage.getItem('user'))
    // this.anuncioService.findAll().subscribe(data => {
    //   this.items = data;
    // })

    solicitacaoService.findByIdCliente(this.currentUser.id).subscribe(data => {
      this.items = data;
     console.log(data)
    })

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
