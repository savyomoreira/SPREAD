import {Injectable} from "@angular/core";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import {GenericService} from '../services/generic.service';


@Injectable()
export class AnuncioService extends GenericService {

  //private categories: any;

  constructor(public http: Http) {
    super('anuncio/', http);
  }

  findByCategoria(idCategoria){
    return this.getMethod('anuncio/byCategoria/' + idCategoria);
  }

  addAnexo(file: File, filename: String, format: String) : Observable<any> {
    const formData: any = new FormData();
    formData.append('file', file, file.name);
    formData.append('filename', filename);
    formData.append('format', format);
    return this.http.post(this.url + '', formData, { headers: this.getMultiPartHeaders() })
        .map((response: Response) => {
            const token = response.json() && response.json();
                return token;
        })
        .catch((error:any) => Observable.throw(error.json().error || 'Error de Servidor'));;
}
 
}
