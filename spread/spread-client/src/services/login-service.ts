import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {GenericService} from '../services/generic.service';


@Injectable()
export class LoginService extends GenericService {

  constructor(public http: Http) {
    super('login/', http);
  }

  login(credentials){
    return this.postMethod('login/', credentials);
  }
 
}
