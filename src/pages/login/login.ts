import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../core/auth.service";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  nextPage = TabsPage;

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public navParams: NavParams
  ) {}

  ionViewWillLoad(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  tryLogin(value){
    this.authService.doLogin(value)
      .then(res => {
        console.log(res);
        this.navCtrl.push(this.nextPage);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
      .then((res) => {
        this.navCtrl.push(this.nextPage);
      }, (err) => {
        this.errorMessage = err.message;
      });
  }

  // tryGoogleLogin(){
  //   this.authService.doGoogleLogin()
  //     .then((res) => {
  //       this.navCtrl.push(this.nextPage);
  //     }, (err) => {
  //       this.errorMessage = err.message;
  //     });
  //}

  // tryTwitterLogin(){
  //   this.authService.doTwitterLogin()
  //     .then((res) => {
  //       this.navCtrl.push(this.nextPage);
  //     }, (err) => {
  //       this.errorMessage = err.message;
  //     });
  // }

  goRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }


}
