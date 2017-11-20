import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ToastController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {HomePage} from '../home/home';
import {SolicitacaoService} from '../../services/solicitacao-service';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-solicitacao',
  templateUrl: 'modal-solicitacao.html'
})
export class ModalSolicitacaoPage {
  // current item
  public item: any;

  descricao: string;

  currentUser :any;

  constructor(public nav: NavController, 
    private solicitacaoService: SolicitacaoService,
    public itemService: ItemService, public navParams: NavParams,
              public viewCtrl: ViewController, public toastCtrl: ToastController) {
    this.item = navParams.get('item');
    this.item.option_price = 0;
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  // choose a option
  chooseOption(optionGroup, option) {
    for (let i = 0; i < optionGroup.options.length; i++) {
      optionGroup.options[i].active = false;
    }

    option.active = true;
    optionGroup.currentOption = option;

    // recalculate price
    this.calculatePrice();
  }

  // calculate item price
  calculatePrice() {
    this.item.option_price = 0;
    for (let i = 0; i < this.item.option_groups.length; i++) {
      if (this.item.option_groups[i].currentOption)
        this.item.option_price += this.item.option_groups[i].currentOption.price;
    }
  }

  enviarSolicitacao(){
    console.log(this.item)
    this.solicitacaoService.save({descricao: this.descricao, cliente: this.currentUser, anuncio: this.item});
    let toast = this.toastCtrl.create({
      message: 'Solicitação enviada! Breve o profissional entrará em contato com você.',
      duration: 5000,
      position: 'middle'
    });

    this.closeModal();
    // this.nav.setRoot(HomePage)
    toast.present();
  }

  // add to card
  addCart(item) {
    let toast = this.toastCtrl.create({
      message: 'Item added to card',
      duration: 60000,
      position: 'middle'
    });

    toast.present();
    this.closeModal();
  }

  // buy now
  buy(item) {

  }

  // close modal
  closeModal() {
    this.viewCtrl.dismiss(true);
  }
}
