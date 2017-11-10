import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {GenericService} from '../services/generic.service';


@Injectable()
export class SolicitacaoService extends GenericService {

  //private categories: any;

  constructor(public http: Http) {
    super('solicitacaoService/', http);
  }

  findByIdPrestador(idPrestador){
    return this.getMethod('solicitacaoService/' + idPrestador);
  }

  findByID(value){
    return this.getMethod('solicitacaoService/one/' + value);
 }
 
}
