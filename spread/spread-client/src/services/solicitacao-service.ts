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

  findByIdCliente(idCliente){
    return this.getMethod('solicitacaoService/' + 'byClienteId/' + idCliente);
  }  

  findByID(value){
    return this.getMethod('solicitacaoService/one/' + value);
 }

 confirmacaoDeServico(idSolicitacao, dataAgendada){
  return this.putMethod('solicitacaoService/' + idSolicitacao, dataAgendada);
}

confirmarRealizacaoServico(idSolicitacao: Number){
  return this.putMethod('solicitacaoService/confirmarRealizacaoServico/', idSolicitacao);
}


 
}
