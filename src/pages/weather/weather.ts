import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetweatherProvider} from '../../providers/getweather/getweather';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private GetWeatherProvider: GetweatherProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
    this.GetWeatherProvider.getweather().subscribe(weather =>{
      this.weather = weather;
    })
  }

}
