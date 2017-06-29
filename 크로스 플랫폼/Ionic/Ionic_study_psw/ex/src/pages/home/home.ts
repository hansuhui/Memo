import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPage } from '../my-page/my-page';
import { YourPage } from '../your-page/your-page';
import { Cat } from '../cat/cat';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myName: string = "JSGlobal";
  myAge:number=37;
  Animal = {
    Cat : 2,
    Dog : 5
  };
  show:boolean = true;
  MyPets = {
    flash : {
      kind : 'Cat',
      color : 'white'
    },
    Happy : {
      kind : 'Dog',
      color : 'brown'
    }
  };
  urlFall:string="http://static.naver.net/weather/images/w_icon/w_t01.gif";
  urlImages:Array<string>=[
    "http://static.naver.net/weather/images/w_icon/w_t01.gif",
    "https://ssl.pstatic.net/static/weather/images/w_icon/w_l4.gif"
  ];
  messages:Array<string> = [];
  abc:string ="Hello World!";
  y:number=0;
  abcd:boolean=false;

  constructor(public navCtrl: NavController) {
    let index = 0;
    setInterval(() => {
      index = index == 0? 1 : 0;
      this.urlFall = this.urlImages[index];
    }, 1000);
  }

 get pets(){
	return Object.keys(this.MyPets);
 }

  onClick(){
    this.navCtrl.push(MyPage);
  }

  onClickY(){
    this.navCtrl.push(YourPage);
  }

  onClickC(){
    this.navCtrl.push(Cat);
  }

  onClickHello(){
    alert("Hello World!");
  }

  onClickScroll(myContent){
    myContent.scrollTo(0, this.y+=580, 100);
  }
}
