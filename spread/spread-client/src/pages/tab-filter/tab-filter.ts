import {Component, EventEmitter, Output} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

import {BairroService} from '../../services/bairro-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-tab-filter',
  templateUrl: 'tab-filter.html'
})
export class TabFilterPage {
  // set filter value
  public filter = {
    bairro : null,
    nome:''
  }

  bairros: any;

  @Output()
  event = new EventEmitter();

  constructor(public nav: NavController,
    private bairroService: BairroService,
    public viewCtrl: ViewController) {
      this.bairroService.findAll().subscribe(data => {
        this.bairros = data;
      });

  }

  applyFilter(){
    this.closeModal(this.filter);
  }

  // close modal
  closeModal(filter) {
    //this.nav.pop();
    this.event.emit({filter})
    this.viewCtrl.dismiss(true);
  }
}
