import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the GetNewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetNewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetNewsProvider Provider');
  }
  getNews():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&category=business&apiKey=0f0c3501db7b43ca834607cb3a2d9d88");
  }
}
