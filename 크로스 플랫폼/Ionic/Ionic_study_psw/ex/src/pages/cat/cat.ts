import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    template:`
    <h1>This is my cat</h1>
    <button (click)="onBack()">Back</button>
    `
})

export class Cat{
    constructor(private navCtrl: NavController){

    }

    onBack(){
        this.navCtrl.pop();
    }

    // 페이지 호출되자마자 발생되는 이벤트
    ionViewDidLoad(){
        alert("Hello");
    }
}