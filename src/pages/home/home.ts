import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  searchNews(){
    this.navCtrl.push('NewsPage');
  }

  searchWeather(){
    this.navCtrl.push('WeatherPage');
  }

}
