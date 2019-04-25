import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetNewsProvider } from '../../providers/get-news/get-news';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
   News: any[]=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private Ns:GetNewsProvider) {
  }

  ionViewDidLoad() {
   this.Ns.getNews().subscribe(data =>{
     this.News = data;
   })
  }

}
