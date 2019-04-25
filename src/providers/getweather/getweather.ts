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
  
  constructor(public http: HttpClient) {
    console.log('Hello GetweatherProvider Provider');
   
  }
 /* getweather():Observable<any>{
    return this.http.get('https://api.darksky.net/forecast/9b9f3a14233a3147d295bd07a34b895f/53.1424,-7.6921');
  }*/
}
