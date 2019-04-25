import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GetweatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetweatherProvider {
  apiKey = '9b9f3a14233a3147d295bd07a34b895f';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello GetweatherProvider Provider');
    this.url = 'https://api.darksky.net/forecast/'+this.apiKey+'/53.1424,-7.6921';
  }
  getweather():Observable<any>{
    return this.http.get(this.url);
  }
}
