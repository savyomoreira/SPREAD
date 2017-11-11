import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ToastController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {ListSolicitacoesServicoPage} from '../lista-solicitacoes-servico/lista-solicitacoes-servico';

import {SolicitacaoService} from '../../services/solicitacao-service';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-confirmacao-solicitacao',
  templateUrl: 'modal-confirmacao-solicitacao.html'
})
export class ModalConfirmacaoSolicitacaoPage {
  // current item
  public item: any;

  descricao: string;

  dataAgendamento: Date;

  currentUser :any;

  constructor(public nav: NavController, 
    private solicitacaoService: SolicitacaoService,
    public itemService: ItemService, public navParams: NavParams,
              public viewCtrl: ViewController, public toastCtrl: ToastController) {
    this.dataAgendamento = new Date();        
    this.item = navParams.get('item');
    this.item.option_price = 0;
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }


  confirmarSolicitacao(){
    console.log(this.item)
    this.solicitacaoService.confirmacaoDeServico(this.item.id, this.dataAgendamento).then(()=>{
      let toast = this.toastCtrl.create({
        message: 'Solicitação confirmada!',
        duration: 5000,
        position: 'middle'
      });
      this.nav.setRoot(ListSolicitacoesServicoPage)
      toast.present();

    });
    
  }

  // close modal
  closeModal() {
    this.viewCtrl.dismiss(true);
  }
}
