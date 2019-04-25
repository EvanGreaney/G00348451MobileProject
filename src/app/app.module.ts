import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { GetNewsProvider } from '../providers/get-news/get-news';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GetweatherProvider } from '../providers/getweather/getweather';


@NgModule({
  declarations: [
    MyApp,
    
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetNewsProvider,
    GetweatherProvider
  ]
})
export class AppModule {}
