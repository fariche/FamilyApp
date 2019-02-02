import {NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MusicPage } from '../pages/music/music';
import { NewsPage } from '../pages/news/news';
import { VideoPage } from '../pages/video/video';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IntroPage} from "../pages/intro/intro";
import {LoginPage} from "../pages/login/login";
import {VimeoVideo} from "../pages/videos/vimeo";
import {YoutubeVideo} from "../pages/videos/youtube";
import {ParallaxHeaderDirective} from "../directives/parallax-header/parallax-header";
import {ProfilePage} from "../pages/profile/profile";
import {AuthService} from "../pages/core/auth.service";
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from "../environment/environment";
import {AngularFireModule} from '@angular/fire';

import { Facebook } from '@ionic-native/facebook';
import {RegisterPage} from "../pages/register/register";
import {ImagePicker} from "@ionic-native/image-picker";
import {Crop} from "@ionic-native/crop";
// import { GooglePlus } from '@ionic-native/google-plus';
// import { TwitterConnect } from '@ionic-native/twitter-connect';

@NgModule({
  declarations: [
    MyApp,
    MusicPage,
    NewsPage,
    VideoPage,
    TabsPage,
    IntroPage,
    LoginPage,
    VimeoVideo,
    YoutubeVideo,
    ParallaxHeaderDirective,
    ProfilePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage,
    NewsPage,
    VideoPage,
    TabsPage,
    IntroPage,
    LoginPage,
    VimeoVideo,
    YoutubeVideo,
    ProfilePage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService,
    Facebook,
    ImagePicker,
    Crop
    // TwitterConnect
  ]
})
export class AppModule {}
