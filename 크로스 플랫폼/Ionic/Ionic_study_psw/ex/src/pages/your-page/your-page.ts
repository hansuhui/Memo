import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
/**
 * Generated class for the YourPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'your-page',
  templateUrl: 'your-page.html',
})
export class YourPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourPage');
  }

  onBack(){
    this.navCtrl.pop();
  }

}
