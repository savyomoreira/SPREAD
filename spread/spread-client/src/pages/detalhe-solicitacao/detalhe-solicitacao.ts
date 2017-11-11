import {Component} from '@angular/core';
import {NavController, ModalController, ToastController} from 'ionic-angular';
import {ItemService} from '../../services/item-service';
import {ModalConfirmacaoSolicitacaoPage} from "../modal-confirmacao-solicitacao/modal-confirmacao-solicitacao";
import { NavParams } from 'ionic-angular';

import {AnuncioService} from '../../services/anuncio-service';

import {SolicitacaoService} from '../../services/solicitacao-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-detalhe-solicitacao',
  templateUrl: 'detalhe-solicitacao.html'
})
export class DetalheSolicitacaoPage {
  // item info
  public item: any;

  constructor(public nav: NavController, public navParams: NavParams, 
    private anuncioService: AnuncioService,
    public itemService: ItemService,
    private toastCtrl: ToastController,
    public solicitacaoService: SolicitacaoService,
    public modalCtrl: ModalController) {

    this.solicitacaoService.findByID(navParams.get('id')).subscribe(data => {
      this.item = data;
      console.log(this.item)
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

  confirmarRealizacaoServico(){
    console.log(this.item.id)
    this.solicitacaoService.confirmarRealizacaoServico(this.item.id).then(()=>{
      let toast = this.toastCtrl.create({
        message: 'Solicitação confirmada!',
        duration: 5000,
        position: 'middle'
      });
  
      toast.present();
    })
  }

  // open item option modal
  showOptions(item) {
    // show modal
    let modal = this.modalCtrl.create(ModalConfirmacaoSolicitacaoPage, {item: item});

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
