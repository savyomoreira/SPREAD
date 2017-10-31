import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {GenericService} from '../services/generic.service';


@Injectable()
export class BairroService extends GenericService {

  //private categories: any;

  constructor(public http: Http) {
    super('bairro/', http);
  }
 
}
