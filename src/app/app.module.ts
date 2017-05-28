import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: 'AIzaSyBv5iCptkRvE-BsdLb-6djlewtlNuftlIw',
  authDomain: 'angularfire-827e2.firebaseapp.com',
  databaseURL: 'https://angularfire-827e2.firebaseio.com',
  projectId: 'angularfire-827e2',
  storageBucket: 'angularfire-827e2.appspot.com',
  messagingSenderId: '1068848000409'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
