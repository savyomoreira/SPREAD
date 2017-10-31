import {Component} from '@angular/core';
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
    shipTo: ''
  }

  estados: any;

  constructor(public nav: NavController,
    private estadoService: BairroService,
    public viewCtrl: ViewController) {
      estadoService.findAll().subscribe(data=>{
          this.estados = data;
          console.log(data)
        });

  }

  // close modal
  closeModal() {
    // this.nav.pop();
    // this.viewCtrl.dismiss(true);
  }
}
