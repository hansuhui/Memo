import {Component } from '@angular/core'; // 이걸 써줘야 컴포넌트 사용 가능
import {NavController} from 'ionic-angular';

@Component({
  template : '<h2> This is my page</h2><button ion-button (click)="onBack()">Back</button>'
})

export class MyPage{
  constructor(private navCtrl:NavController){

  }

  onBack(){
    this.navCtrl.pop();
  }
}