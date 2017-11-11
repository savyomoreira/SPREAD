import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {GenericService} from '../services/generic.service';


@Injectable()
export class LoginService extends GenericService {
  extractDataa;
  handleErrora;
  constructor(public http: Http) {
    super('login/', http);
  }

  login(credentials){
    return this.http.post(this.url + 'login/', JSON.stringify(credentials), { headers: this.getHeaders() })
    .map(res => this.extractDataa = res).toPromise()
    .then(this.extractDataa)
    .catch(this.handleErrora);
   // return this.postMethod('login/', credentials);
  }
 
}
