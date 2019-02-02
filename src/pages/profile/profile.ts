import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams,ToastController, normalizeURL} from 'ionic-angular';
import {AuthService} from "../core/auth.service";
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  picMessage: string = '';
  errorMessage: string = '';


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public cropService: Crop) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  tryChangeProfilePicture(value){
    this.authService.doChangeProfilePicture(value)
      .then(res => {
        console.log(res);
       // this.navCtrl.push(this.nextPage);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

  openImagePickerCrop(){
    console.log("Open Image Picker Crop");
    this.imagePicker.hasReadPermission().then(
      (result) => {
        console.log("Read Permission");
        if(result == false){
          console.log("Result = False?");
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          console.log("Result = True");
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              console.log("Results");
              for (var i = 0; i < results.length; i++) {
                this.cropService.crop(results[i], {quality: 75}).then(
                  newImage => {
                    this.uploadImageToFirebase(newImage);
                  },
                  error => console.error("Error cropping image", error)
                );
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }

  uploadImageToFirebase(image){
    image = normalizeURL(image);

    //uploads img to firebase storage
    this.authService.doChangeProfilePicture(image)
      .then(photoURL => {

        let toast = this.toastCtrl.create({
          message: 'Image was updated successfully',
          duration: 3000
        });
        toast.present();
      })
  }

}
