import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';

@Injectable()
export class AbstractHttpService {

    protected url: string = 'http://localhost:8080/';
    //protected url: string = 'http://138.197.27.106:8080/'
    protected http: Http;
    private extractData;
    private handleError;
    
    constructor(httpParameter: Http) {
        this.http = httpParameter;
    }

    protected getMethod(relativePath: string) {
        console.log(this.url + relativePath)
        return this.http.get(this.url + relativePath)
        .map(res => res.json());
    }

   protected postMethod(relativePath: string, value) {
        return this.http.post(this.url + relativePath, JSON.stringify(value), { headers: this.getHeaders() })
            .map(res => this.extractData = res.json()).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    protected putMethod(relativePath: string, value) {
        return this.http.put(this.url + relativePath, JSON.stringify(value), { headers: this.getHeaders() })
            .map(res => this.extractData = res).toPromise()
            .then(this.extractData)
            .catch(this.handleError);;
    }

    protected deleteMethod(relativePath: string, value) {
        return this.http.delete(this.url + relativePath + '/' + value, { headers: this.getHeaders() })
        .map(res => this.extractData = res).toPromise()
        .then(this.extractData)
        .catch(this.handleError);;
    }

    protected getHeaders() {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');return headers;
    }

    getMultiPartHeaders() {
        const headers = new Headers();
        headers.set('Content-Type', 'multipart/form-data');
        return headers;
    }
}
