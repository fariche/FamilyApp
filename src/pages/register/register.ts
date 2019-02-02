import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../core/auth.service";
import {LoginPage} from "../login/login";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'register.html',
})
export class RegisterPage {

  nextPage = LoginPage;

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {}

  ionViewWillLoad(){
    this.registerForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
      .then(res => {
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in now.";
        this.navCtrl.push(this.nextPage);
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }



}
