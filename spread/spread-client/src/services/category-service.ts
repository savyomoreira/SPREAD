import {Injectable} from "@angular/core";
import {CATEGORIES} from "./mock-categories";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {GenericService} from '../services/generic.service';


@Injectable()
export class CategoryService extends GenericService {

  private categories: any;

  constructor(public http: Http) {
    super('categoria', http);
    this.categories = CATEGORIES;
  }

  // getAll() {    
  //   return this.http.get('http://localhost:8080/categoria').map(res => res.json());
  // }

  getItem(id) {
    for (var i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === parseInt(id)) {
        return this.categories[i];
      }
    }
    return null;
  }

  remove(item) {
    this.categories.splice(this.categories.indexOf(item), 1);
  }
  
 
}
