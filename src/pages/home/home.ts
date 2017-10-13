import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NextPage} from '../next/next';
import {UserComponent} from '../../components/user/user'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  me:UserComponent;

  constructor(public navCtrl: NavController) {

    this.me = new UserComponent();

  }

  onClick(){

      this.navCtrl.push(NextPage)

  }

}
