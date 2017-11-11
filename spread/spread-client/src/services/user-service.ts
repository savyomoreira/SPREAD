import {Injectable} from "@angular/core";
import {USERS} from "./mock-users";

import { Http } from '@angular/http';

import {GenericService} from '../services/generic.service';

@Injectable()
export class UserService extends GenericService {
  private users: any;


  constructor(public http: Http) {
    super('usuario/', http);
  }

  getAll() {
    return this.users;
  }

  getItem(id) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === parseInt(id)) {
        return this.users[i];
      }
    }
    return null;
  }

  remove(item) {
    this.users.splice(this.users.indexOf(item), 1);
  }
}
