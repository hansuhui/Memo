import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyPage } from '../pages/my-page/my-page';
import { YourPage } from '../pages/your-page/your-page';
import { Cat } from '../pages/cat/cat';
import { Highlight } from '../components/highlight';
import { ChildCat } from '../components/child-cat/child-cat';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyPage,
    YourPage,
    Cat,
    Highlight,
    ChildCat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyPage,
    YourPage,
    Cat
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
